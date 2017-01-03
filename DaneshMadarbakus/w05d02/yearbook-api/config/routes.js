const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');
const projectsController = require('../controllers/projects');

router.route('/users')
  .get(usersController.index)
  .post(usersController.create);
router.route('/users/:id')
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.delete);

router.route('/projects')
  .get(projectsController.index)
  .post(projectsController.create);
router.route('/projects/:id')
  .get(projectsController.show)
  .put(projectsController.update)
  .delete(projectsController.delete);

module.exports = router;
