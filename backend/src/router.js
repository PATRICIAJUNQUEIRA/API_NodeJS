const express = require('express');

const router = express.Router();

const tasksController = require('./controllers/tasksConrollers');

router.get('/tasks', tasksController.getAll);

module.exports = router;