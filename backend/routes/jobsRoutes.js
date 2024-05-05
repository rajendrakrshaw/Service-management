// routes/formRoutes.js

const express = require('express');
const router = express.Router();
const formController = require('../controllers/jobsController');

// Create form
router.post('/jobs', formController.createJobs);

// Get all forms
router.get('/jobs', formController.getAllJobs);

// Get form by ID
router.get('/jobs/:id', formController.getJobsById);

// Update form
router.put('/jobs/:id', formController.updateJobs);

// Delete form
router.delete('/jobs/:id', formController.deleteJobs);

module.exports = router;
