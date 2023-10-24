const express = require('express');
const router = express.Router();
const Schedule = require('../models/schedule'); 
const { error } = require('console');

// Create a new schedule
router.post('/', async (req, res) => {
  try {
    const schedule = new Schedule(req.body);

    const newSchedule = await schedule.save();
    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a list of all schedules
router.get('/', async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific schedule by ID
router.get('/:id', async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params
