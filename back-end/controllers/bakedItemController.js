const express = require("express");
const bakedItems = express.Router();

const {
  getAllItems,
  getOne,
  createOne,
  deleteOne,
  updateOne,
} = require("../queries/bakedItems.js");

bakedItems.get("/", async (request, response) => {
  const allItems = await getAllItems();
  response.status(200).json(allItems);
});

bakedItems.get("/:id", async (request, response) => {
  const one = await getOne(request.params.id);
  response.status(200).json(one);
});

bakedItems.post("/", async (request, response) => {
  const newOne = await createOne(request.body);
  response.status(200).json(newOne);
});

bakedItems.delete("/:id", async (request, response) => {
  const deletedOne = await deleteOne(request.params.id);
  response.status(200).json(deletedOne);
});

bakedItems.put("/:id", async (request, response) => {
  const updatedOne = await updateOne(request.params.id, request.body);
  response.status(200).json(updatedOne);
});

module.exports = bakedItems;
