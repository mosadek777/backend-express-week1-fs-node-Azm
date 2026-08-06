const fs = require("fs");
const { nanoid } = require("nanoid");
const path = require("path");
let finalPath = path.join(__dirname, "../../../DB/myData.json");

// !-------------------------------------- Get All users ---------------------------------------------------
let getAllUsersController = (req, res, next) => {
  let allData = JSON.parse(fs.readFileSync(finalPath));
  // let allData = fs.readFileSync(finalPath);
  res.json({ message: "done", data: allData });
};

// !-------------------------------------- Add users ---------------------------------------------------
let addUserController = (req, res, next) => {
  let { name, email, age } = req.body;

  let allData = JSON.parse(fs.readFileSync(finalPath));
  let findUser = allData.find((user) => user.email == email);

  if (findUser) {
    res.json({ message: "user already exist" });
  } else {
    let newUser = {
      name,
      email,
      age,
      id: nanoid(),
    };
    allData.push(newUser);
    fs.writeFileSync(finalPath, JSON.stringify(allData));
    console.log(newUser);
    console.log(allData);
    res.json({ message: "added", data: allData });
  }
};

// !-------------------------------------- Update users ---------------------------------------------------

let updateUserController = (req, res, next) => {
  let { id } = req.params;
  let { name, email, age } = req.body;
  let allData = JSON.parse(fs.readFileSync(finalPath));

  let matchedUer = allData.find((user) => user.id == id);
  if (matchedUer) {
    allData.map((user) => {
      if (user.id == id) {
        user.name = name;
        user.email = email;
        user.age = age;
      }
    });
    fs.writeFileSync(finalPath, JSON.stringify(allData));
    res.json({ message: "successfully updated", data: allData });
  } else {
    res.json({ message: "user not found" });
  }
};

// !-------------------------------------- Delete users ---------------------------------------------------
let deleteUserController = (req, res, next) => {
  let { id } = req.params;

  let allData = JSON.parse(fs.readFileSync(finalPath));

  let matchedUer = allData.find((user) => user.id == id);
  if (matchedUer) {
    allData = allData.filter((user) => user.id != id);
    fs.writeFileSync(finalPath, JSON.stringify(allData));
    res.json({ message: "successfully deleted", data: allData });
  } else {
    res.json({ message: "user not found" });
  }
};

// ? ---------------------------------exports--------------------------

module.exports = {
  getAllUsersController,
  addUserController,
  updateUserController,
  deleteUserController,
};
