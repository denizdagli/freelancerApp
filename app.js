const express = require("express");
const fileUpload = require("express-fileupload");
const ejs = require("ejs");
require("dotenv").config();
require("./src/config/dbConnection");
const projectRoute = require("./src/routes/projectRoute");
const pageRoute = require("./src/routes/pageRoute");
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
app.use("/", projectRoute);
//app.use("/", pageRoute);


app.listen(port, () => console.log(`Listening on port ${port}...`));
