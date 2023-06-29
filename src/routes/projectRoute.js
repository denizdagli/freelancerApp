const router = require('express').Router();
const projectController = require('../controllers/projectController');

router.post('/', projectController.addProject);
router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProject);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);
module.exports = router;