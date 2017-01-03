const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { required: true, type: String },
  description: { type: String },
  github: { type: String },
  website: { type: String }
}, {
  timestamps: true
});

projectSchema.set('toJSON', { getters: true, virtuals: false });

module.exports = mongoose.model('Project', projectSchema);
