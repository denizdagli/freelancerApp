const router = require('express').Router();
const projectController = require('../controllers/projectController');

router.post('/create', projectController.createProject);
router.get('/get', projectController.getProjects);
router.get('/get/:id', projectController.getProject);
router.put('/update/:id', projectController.updateProject);
router.delete('/delete/:id', projectController.deleteProject);
module.exports = router;