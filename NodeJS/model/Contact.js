const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullname: {
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
  relationStatus: {
    type: String,
    enum: ['single', 'married', 'in relationship', 'divorced', 'widowed'],
    required: true,
  },
  location: {
    type:{
      type: String,
      enum: ['Point'],
      // required: true
    },
    coordinates:{
      type: [Number],
      // required: true
    }
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Contact', contactSchema);