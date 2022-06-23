const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true,
  },
  number: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  relationStatus:{
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
});

module.exports = mongoose.model('Contact', userSchema);