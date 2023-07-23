const express = require('express');
const tasksController = require('./controllers/tasksConrollers')

const router = express.Router();

router.get('/tasks', tasksController.getAll);

module.exports = router;