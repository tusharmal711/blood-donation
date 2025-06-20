

const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  FullName: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  PhoneNO: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  gender: { type: String, required: true },
  bloodType: { type: String, required: true },
  weight: { type: Number, required: true },
  Address: { type: String, required: true },
  LastDonation: { type: String },
  TotalDonation: { type: Number },
  profileImagePath:{type: String,
    required: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Donate', donorSchema);
