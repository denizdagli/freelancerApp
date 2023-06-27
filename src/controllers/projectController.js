const Project = require("../models/Project");
const fs = require("fs");

exports.addProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.redirect("/#pOrtfolio");
    } catch (error) {
        res.status(500).json({ message: "Error creating project" });
    }
    }

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving projects" });
    }
    }


exports.getProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving project" });
    }
    }


exports.updateProject = async (req, res) => {
          
    try {
        const project = await Project.findById(req.params.id);
        Object.assign(project, req.body);
        await project.save();
        res.status(200).json({ message: "Project updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating project" });
    }
    }


exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        await project.remove();
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting project" });
    }
    }


    
