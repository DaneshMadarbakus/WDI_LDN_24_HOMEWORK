// STEP-12 Set up the model. Require relevent packages.
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// STEP-13 Set up the userSchema
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true},
  passwordHash: { type: String, required: true }
});

// STEP-14 Set up the relevant rules for the userSchema
    // assign the the virtual and encrypted passwords values
userSchema.virtual('password').set(setPassword);
    // assign the virtual passwordConfirmation a value
userSchema.virtual('passwordConfirmation').set(setpasswordConfirmation);
    // Check if the password field is filled and if it matches the
    // passwordConfirmation field
userSchema.path('passwordHash').validate(validatePasswordHash);

// STEP-15 Set up a new method that will be used when the user wants to login
// and will check if the password and the encrypted password match
userSchema.methods.validatePassword = validatePassword;

// STEP-16 Edit(transform) the function that sends the user item to the JSON
// by deleting the bits we don't want to show up
userSchema.set('toJSON', {
  transform: function(doc, ret){
    delete ret.passwordHash;
    delete ret.email;
    delete ret.__v;
    return ret;
  }
});

// STEP-16 Alternatively this would edit the same function but by telling it
// to show only the specific bits we want as opposed to telling it to show
// everything but deleting the bits we don't want first
//
// This one is WHITELISTING
// userSchema.set('toJSON', {
//   transform: function(doc, ret) {
//     const returnJSON = {
//       _id: ret._id,
//       username: ret.username
//     };
//     return returnJSON;
//   }
// });

// STEP-17 Export the userSchema
module.exports = mongoose.model('User', userSchema);


function setPassword(value){
  this._password = value;
  this.passwordHash = bcrypt.hashSync(value, bcrypt.genSaltSync(8));
}

function setpasswordConfirmation(passwordConfirmation){
  this._passwordConfirmation = passwordConfirmation;
}

function validatePasswordHash(){
  if (this.isNew) {
    if (!this._password) {
      return this.invalidate('password', 'A password is required.');
    }
    if (this._password !== this._passwordConfirmation) {
      return this.invalidate('passwordConfirmation', 'Passwords do not match.');
    }
  }
}

function validatePassword(password) {
  return bcrypt.compareSync(password, this.passwordHash);
}
