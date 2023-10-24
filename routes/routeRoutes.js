const express = require('express');
const router = express.Router();
const Route = require('../models/route'); // Import the Route model

// Create a new route
router.post('/', async (req, res) => {
  try {
    const route = new Route(req.body);
    const newRoute = await route.save();
    res.status(201).json(newRoute);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a list of all routes
router.get('/', async (req, res) => {
  try {
    const routes = await Route.find();
    res.json(routes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific route by ID
router.get('/:id', async (req, res) => {
  try {
    const route = await Route.findById(req.params.id);
    if (!route) {
      return res.status(404).json({ error: 'Route not found' });
    }
    res.json(route);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a route by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedRoute = await Route.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRoute) {
      return res.status(404).json({ error: 'Route not found' });
    }
    res.json(updatedRoute);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a route by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedRoute = await Route.findByIdAndRemove(req.params.id);
    if (!deletedRoute) {
      return res.status(404).json({ error: 'Route not found' });
    }
    res.json(deletedRoute);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
