//STEP-9 we have to require mongoose so that we can start to set the schema for our database - this page is basically gonna be the place we set the parameters for our document pages(objects inside the database)
const mongoose = require('mongoose');

//STEP-10 Set up the Schema for what our page document (object) should look like
const tarantinovidSchema = new mongoose.Schema({
  title: { type: String, trim: true },
  description: { type: String },
  videoId: { type: String, required: true },
  genre: { type: String }
}, {
  timestamps: true
});

//STEP-11 Export what is in this file so that it can be accessed by all the other files
module.exports = mongoose.model('Tarantinovid', tarantinovidSchema); /* The first bit called TarantinoVid is turned into a collection within the database and is automatically pluralised and the second bit is exporting the Schema that we just made. */

//STEP-12 Create your controller if you have not already done so
