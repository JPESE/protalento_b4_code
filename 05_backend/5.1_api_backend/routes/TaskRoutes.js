const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');
const Task = require('../models/TaskModel');

router.get('/', TaskController.findAll)
router.get('/:id', TaskController.findOneById);
router.post('/', TaskController.create)
router.put('/:id', TaskController.setTaskDone)
router.delete('/:id', TaskController.deleteTask)

module.exports = router;
//volver a hacer esto desde cero, entendiendo que hace que, ver las clases de controllers, modules y routes//