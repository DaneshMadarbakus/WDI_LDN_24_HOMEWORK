const mongoose = require('mongoose');

const lolplaySchema = new mongoose.Schema({
  title: {type: String, trim: true, required: true},
  videoId: {type: String, required: true},
  description: {type: String, trim: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('LOLPlay', lolplaySchema);
