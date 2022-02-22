const db = require("../db/dbConfig.js");

const getAllItems = async () => {
  try {
    const allItems = await db.any("SELECT * FROM baked");
    console.log(allItems);
    return allItems;
  } catch (error) {
    return error;
  }
};

const getOne = async (id) => {
  try {
    const one = await db.one("SELECT * FROM baked WHERE id=$1", id);
    return one;
  } catch (error) {
    return error;
  }
};

const createOne = async (item) => {
  try {
    let { name, description, price, rating, featured_bestseller, image } = item;
    const newOne = await db.one(
      "INSERT INTO baked (name, description, price, rating, featured_bestseller, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * ",
      [name, description, price, rating, featured_bestseller, image]
    );
    return newOne;
  } catch (error) {
    return error;
  }
};

const deleteOne = async (id) => {
  try {
    const deletedOne = await db.one(
      "DELETE FROM baked WHERE ID=$1 RETURNING *",
      id
    );
    return deletedOne;
  } catch (error) {
    return error;
  }
};

const updateOne = async (id, item) => {
  try {
    let { name, description, price, rating, featured_bestseller, image } = item;
    const updatedOne = await db.one(
      "UPDATE baked SET name=$2, description=$3, price=$4, rating=$5, featured_bestseller=$6, image=$7 WHERE id=$1 RETURNING *",
      [id, name, description, price, rating, featured_bestseller, image]
    );
    return updatedOne;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllItems,
  getOne,
  createOne,
  deleteOne,
  updateOne,
};
