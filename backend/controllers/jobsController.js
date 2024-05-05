// controllers/formController.js

const Jobs = require('../models/Jobs');

// Create new form
exports.createJobs = async (req, res) => {
  try {
    const form = new Jobs(req.body);
    await form.save();
    res.status(201).json({ message: 'Jobs submitted successfully', data: form });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all forms
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Jobs.find();
    res.status(200).json({data: jobs});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get form by ID
exports.getJobsById = async (req, res) => {
  try {
    const form = await Jobs.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ message: 'Jobs not found' });
    }
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update form
exports.updateJobs = async (req, res) => {
  try {
    const form = await Jobs.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!form) {
      return res.status(404).json({ message: 'Jobs not found' });
    }
    res.status(200).json({ message: 'Jobs updated successfully', data: form });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete form
exports.deleteJobs = async (req, res) => {
  try {
    const form = await Jobs.findByIdAndDelete(req.params.id);
    if (!form) {
      return res.status(404).json({ message: 'Jobs not found' });
    }
    res.status(200).json({ message: 'Jobs deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
