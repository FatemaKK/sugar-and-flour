// DEPENDENCIES
const express = require("express");
const cors = require("cors");


// CONFIGURATION
const app = express();
const bakedItemController = require("./controllers/bakedItemController");

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

app.use("/bakedItems", bakedItemController);

// ROUTES
app.get("/", (_, response) => {
  response.status(200).send("Sugar High!");
});

app.get("*", (_, response) => {
  response.status(404).send({error: "Server Error"});
});

// EXPORT
module.exports = app;
