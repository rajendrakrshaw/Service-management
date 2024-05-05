// routes/formRoutes.js

const express = require('express');
const router = express.Router();
const formController = require('../controllers/jobsController');

router.get('/', (req,res)=>{
        res.json({
            message : "hello"
        })
    });

// Create form
router.post('/api/jobs', formController.createJobs);

// Get all forms
router.get('/api/jobs', formController.getAllJobs);

// Get form by ID
router.get('/api/jobs/:id', formController.getJobsById);

// Update form
router.put('/api/jobs/:id', formController.updateJobs);

// Delete form
router.delete('/api/jobs/:id', formController.deleteJobs);

module.exports = router;
