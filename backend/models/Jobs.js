// models/Form.js

const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  receivedDate: { type: Date, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
  whatsapp: { type: Number },
  email: { type: String },
  depositedBy: { type: String, required: true },
  depositorName: { type: String },
  item: { type: String, required: true },
  accessories: { type: String, required: true },
  serialNo: { type: String, required: true },
  problems: { type: String, required: true },
  billNo: { type: String, required: true },
  billDate: { type: Date, required: true },
  warranty: { type: Boolean, required: true },
  standby: { type: Boolean, required: true },
//   password: { type: String, required: true }
}, { timestamps: true });

const Jobs = mongoose.model('job', formSchema);

module.exports = Jobs;
