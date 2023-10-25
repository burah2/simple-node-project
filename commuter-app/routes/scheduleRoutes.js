const express = require('express');
const router = express.Router();
const Schedule = require('../models/schedule'); // Import the Schedule model

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
    const schedule = await Schedule.findById(req.params.id);
    if (!schedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }
    res.json(schedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a schedule by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedSchedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSchedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }
    res.json(updatedSchedule);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a schedule by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedSchedule = await Schedule.findByIdAndRemove(req.params.id);
    if (!deletedSchedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }
    res.json(deletedSchedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
