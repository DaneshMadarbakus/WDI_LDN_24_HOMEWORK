const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { required: true, type: String },
  twitter: { type: String },
  github: { type: String },
  image: { type: String },
  bio: { type: String },
  portfolio: { type: String },
  projects: [{ type: mongoose.Schema.ObjectId, ref: 'Project' }]
}, {
  timestamps: true
});

userSchema.set('toJSON', { getters: true, virtuals: false });

module.exports = mongoose.model('User', userSchema);
