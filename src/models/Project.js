const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create Schema

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "Project", timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
