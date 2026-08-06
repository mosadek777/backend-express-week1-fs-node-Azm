const app = require("express").Router();
const fs = require("fs");
const { nanoid } = require("nanoid");
const path = require("path");
let finalPath = path.join(__dirname, "../../DB/myData.json");

const {
  addUserController,
  getAllUsersController,
  updateUserController,
  deleteUserController,
} = require("./controller/user.controller");

app.get("/getAllUsers", getAllUsersController);
app.post("/addUsers", addUserController);
app.put("/updateUser/:id", updateUserController);
app.delete("/deleteUser/:id", deleteUserController);

module.exports = app;
