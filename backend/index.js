// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jobsRoutes = require('./routes/jobsRoutes');
DB = "mongodb+srv://chainware:chainware%402001@chainware.sr2olto.mongodb.net/servicecraft?retryWrites=true&w=majority&appName=chainware";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.use("/", (req,res)=>{
    res.json({
        message : "hello"
    })
});
app.use('/api', jobsRoutes);

// MongoDB Connection
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
