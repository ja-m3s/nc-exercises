const https = require("node:https");
const fs = require("fs");

/** queries api, retrieves instructions,
saves to a file */
function getInstructions() {
  const options = {
    hostname: "nc-leaks.herokuapp.com",
    path: "/api/confidential",
    method: "GET",
  };

  const request = https.request(options, (response) => {
    let body = "";
    response.on("data", (packet) => {
      body += packet.toString();
    });

    response.on("end", (packet) => {
      parsedBody = JSON.parse(body)
      console.log(parsedBody)
      fs.writeFile("./instructions.MD", parsedBody.instructions, () => {
        console.log("Written instructions.");
      });
      
    });
  });

  request.end();
}

function getPeople(){
    const options = {
        hostname: "nc-leaks.herokuapp.com",
        path: "/api/people",
        method: "GET",
      };
    
      const request = https.request(options, (response) => {
        let body = "";
        response.on("data", (packet) => {
          body += packet.toString();
        });
    
        response.on("end", (packet) => {
            parsedBody = JSON.parse(body)
            //console.log(parsedBody)
//northcoders.json
            let northcoders = []
            //for(let i = 0; i< parsedBody.people.length; i++)
            for(person of parsedBody.people){
                //parsedBody.people[i]
                if(person.job.workplace === 'northcoders'){
                    console.log(person.firstName,person.lastName,person.job.workplace)
                   northcoders.push(person);
                }
            }
            fs.writeFile("./northcoders.json", JSON.stringify(northcoders), () => {
                console.log("Written northcoders array to file.");
              });

            
          });
        });

    request.end();
}

///function getInterests(){
  fs.readFile('northcoders.json', (err, data) => {
  if (err) throw err;
  const getUsers = JSON.parse(data)

  for(user of getUsers){
    console.log(user.username);
  }
})  
//}
// function getInterests(){

//   fs.readFile('northcoders.json', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   })  

// const options = {
//     hostname: "nc-leaks.herokuapp.com",
//     path: `/api/people/${username}/interests`,
//     method: "GET",
//   };

//   const request = https.request(options, (response) => {
//     let body = "";
//     response.on("data", (packet) => {
//       body += packet.toString();
//     });

//     response.on("end", (packet) => {
//       parsedBody = JSON.parse(body)
//       console.log(parsedBody)
//       fs.writeFile("./instructions.MD", parsedBody.instructions, () => {
//         console.log("Written instructions.");
//       });
      
//     });
//   });

//   request.end();
// }

//getInterests(); 

// //getInstructions();
// //getPeople();






// module.exports = { getInstructions };
