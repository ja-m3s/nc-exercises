const express = require("express");
const app = express();
const port = process.env.PORT || 30000;

// Interesting Quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
];

// Random Trivia
const trivia = [
  "Honey never spoils.",
  "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
  "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
];

// Custom Cool Facts
const coolFacts = [
  "Bananas are berries, but strawberries are not.",
  "Octopuses have three hearts.",
  "The Great Wall of China is not visible from space with the naked eye.",
];

// Endpoint to get a random interesting quote
app.get("/interesting-quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = randomIndex === 0 ? quotes[0] : quotes[randomIndex];
  res.status(200).send({ quote });
});

// Endpoint to get random trivia
app.get("/random-trivia", (req, res) => {
  const randomIndex = Math.floor(Math.random() * trivia.length);
  const fact = randomIndex === 0 ? trivia[0] : trivia[randomIndex];
  res.status(200).send({ trivia });
});

// Endpoint to get a random cool fact
app.get("/cool-fact", (req, res) => {
  const randomIndex = Math.floor(Math.random() * coolFacts.length);
  const fact = randomIndex === 0 ? coolFacts[randomIndex] : coolFacts[0];
  res.status(200).send({ fact });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: err });
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { app, server };
