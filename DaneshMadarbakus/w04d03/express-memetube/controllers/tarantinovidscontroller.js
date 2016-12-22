//STEP-13 Now we are going to set up the controller page. So you must first require the models file which holds the schema
const Tarantinovid = require('../models/tarantinovid'); /* The schema and collection/database is accessed from here */

//STEP-14 Create the controllers of index and all of the functions for the database
/* This function will display all of the vids that are currently in the collection */
function tarantinovidsIndex(req, res){
  Tarantinovid.find({}, (err, tarantinovids) => {
    if (err) return console.log(err); /* If there is an error it will be console logged*/
    return res.render('/tarantinovids/index', { tarantinovids });
  });
}
/* This function will allow you to fill in the details for a new video */
function tarantinovidsNew(req, res){
  return res.render('tarantinovids/new');
}
/* This function will allow you to show a video */
function tarantinovidsShow(req, res){
  Tarantinovid.findById(req.params.id, (err, tarantinovid) => {
    if (err) return console.log(err);
    if (!tarantinovid) return console.log('No Tarantino vid found');
    return res.render('tarantinovids/show', { tarantinovid });
  });
}
/* This function will actually allow you to create the new video */
function tarantinovidsCreate(req, res){
  const tarantinovid = new Tarantinovid(req.body.tarantinovid);
  tarantinovid.save((err, tarantinovid) => {
    if (err) return console.log(err);
    return res.redirect(`/tarantinovids/${tarantinovid._id}`);
  });
}
/* This function will allow you to put the details in to edit a video */
function tarantinovidsEdit(req, res){
  Tarantinovid.findById(req.params.id, (err, tarantinovid) => {
    if (err) return console.log(err);
    if (!tarantinovid) return console.log('No tarantino vid found');
    return res.render('/tarantinovids/edit', { tarantinovid });
  });
}
/* This function will allow you to actually update the video */
function tarantinovidsUpdate(req, res){
  Tarantinovid.findByIdAndUpdate(req.params.id, req.body.tarantinovid, { new: true }, (err, tarantinovid) => {
    if (err) return console.log(err);
    if (!tarantinovid) return console.log('No Tarantino vid found');
    return res.redirect(`/tarantinovids/${tarantinovid._id}`);
  });
}
/* This function will allow you to delete a video */
function tarantinovidsDelete(req, res){
  Tarantinovid.findByIdAndRemove(req.params.id, err => {
    if(err) return console.log(err);
    return res.redirect('/tarantinovids');
  });
}

//STEP-15 create a module export so that the controllers can be accessed elsewhere
module.exports = {
  index: tarantinovidsIndex,
  new: tarantinovidsNew,
  show: tarantinovidsShow,
  create: tarantinovidsCreate,
  edit: tarantinovidsEdit,
  update: tarantinovidsUpdate,
  delete: tarantinovidsDelete
}; /* This is basically an index that allows us to access the controller functions outside of the file by using the label on the left side of each item */

//STEP-16 create the view files if you have not already done so
