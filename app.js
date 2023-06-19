const express = require("express");
const fileUpload = require("express-fileupload");

require("dotenv").config();
require("./src/config/dbConnection");
const projectRoute = require("./src/routes/projectRoute");
const app = express();
const port = process.env.PORT || 3001;

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

//ROUTES
app.use("/api/project", projectRoute);
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/api", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});
app.listen(port, () => console.log(`Listening on port ${port}...`));
