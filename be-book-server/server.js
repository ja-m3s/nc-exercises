const http = require("http");
const fsp = require("fs/promises");

const regexBookGet = /^\/api\/books\/[0-9]+$/m;
const regexBookAuthor = /^\/api\/books\/[0-9]+\/author$/m;
const regexNumberMatch = /[0-9]+/;

let server = http.createServer((request, response) => {
  const { method } = request;
  if (method === "GET") {
    getLogic(request, response);
  } else if (method === "POST") {
    postLogic(request, response);
  } else {
    console.log("method not implemented");
  }
});

function getLogic(request, response) {
  const { url } = request;
  console.log(url);
  let body = "";
  request.on("data", (packet) => {
    body += packet.toString();
  });
  request.on("end", () => {
    if (url === "/api") {
      sendResponse(200, response, { msg: "Hello from the server!" });
    } else if (url === "/api/books") {
      fsp.readFile("data/books.json", "utf-8").then((data) => {
        sendResponse(200, response, data);
      });
    } else if (regexBookGet.test(url)) {
      fsp.readFile("data/books.json", "utf-8").then((data) => {
        sendResponse(200, response, getBook(data, url));
      });
    } else if (regexBookAuthor.test(url)) {
      fsp
        .readFile("data/books.json", "utf-8")
        .then((response) => {
          return getAuthorID(response, url);
        })
        .then((authorID) => {
          fsp
            .readFile("data/authors.json", "utf-8")
            .then((response) => {
              return getAuthorName(response, authorID);
            })
            .then((fullName) => {
              sendResponse(200, response, { fullName: fullName });
            });
        });
    } else {
      sendResponse(400, response, { msg: "Bad Request" });
    }
  });
}

function postLogic(request, response) {
  const { url } = request;
  let body = "";
  request.on("data", (packet) => {
    body += packet.toString();
  });
  request.on("end", () => {
    const newBook = JSON.parse(body);

    fsp
      .readFile("data/books.json", "utf-8")
      .then((fileContents) => {
        const books = JSON.parse(fileContents);

        books.forEach((element) => {
          if (element.bookId === newBook.bookId) {
            throw new Error("Non-unique Book ID");
          }
        });

        const updatedBooks = [...books, newBook];

        return fsp.writeFile(
          "data/books.json",
          JSON.stringify(updatedBooks, null, 2)
        );
      })
      .then(() => {
        sendResponse(201, response, { book: newBook });
      })
      .catch((err) => {
        sendResponse(400, response, err);
      });
  });
}

//Auxiliary Methods
function sendResponse(statusCode, response, ...args) {
  response.setHeader("Content-Type", "application/json");
  response.statusCode = statusCode;
  response.write(JSON.stringify(...args));
  response.end();
}

function getBook(data, url) {
  const id = Number(url.match(regexNumberMatch));
  const parsedData = JSON.parse(data);
  for (let i = 0; i < parsedData.length; i++) {
    if (parsedData[i].bookId === id) {
      return parsedData[i];
    }
  }
  return `no book found with id - ${id}`;
}

function getAuthorID(response, url) {
  const parsedData = JSON.parse(response);
  const id = Number(url.match(regexNumberMatch));
  for (let i = 0; i < parsedData.length; i++) {
    if (parsedData[i].bookId === id) {
      return parsedData[i].authorId;
    }
  }
  return `no book found with id - ${id}`;
}

function getAuthorName(fileContents, id) {
  const authors = JSON.parse(fileContents);
  for (let i = 0; i < authors.length; i++) {
    if (authors[i].authorId === Number(id)) {
      return authors[i].fullName;
    }
  }
  return `no author name found with author id - ${id}`;
}

//Start listening
server.listen(9090, () => {});
