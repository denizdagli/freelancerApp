const Project = require("../models/Project");
const fs = require("fs");
const path = require("path");

exports.addProject = async (req, res) => {
  const uploadDir = "public/uploads/";
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadeImage = req.files.image;
  let uploadPath = path.join(
    process.cwd(),
    "public/uploads/",
    uploadeImage.name
  );
  try {
    await uploadeImage.mv(uploadPath);
    await Project.create({
      ...req.body,
      image: "/uploads/" + uploadeImage.name,
    });
    res.redirect("/#portfolio");
   
  } catch (error) {
    res.status(500).json({ message: "Error occurred while adding project" });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.render("index", { projects: projects });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving projects" });
  }
};

exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving project" });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    Object.assign(project, req.body);
    await project.save();
    res.status(200).json({ message: "Project updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating project" });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    await project.remove();
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting project" });
  }
};
