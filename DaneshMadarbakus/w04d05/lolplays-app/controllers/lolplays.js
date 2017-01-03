const Lolplay = require('../models/lolplay');

// INDEX
function lolplaysIndex(req, res) {
  Lolplay.find({}, (err, lolplays) => {
    if (err) return res.render('lolplays/index', { lolplays: null, error: 'Something went wrong' });
    return res.render('lolplays/index', { lolplays });
  });
}

// NEW
function lolplaysNew(req, res) {
  return res.render('lolplays/new', { error: null });
}

// CREATE
function lolplaysCreate(req, res) {
  const lolplay = new Lolplay(req.body.lolplay);
  lolplay.save((err, lolplay) => {
    if (err) return res.render('lolplays/index', { lolplays: null, error: err.message });
    return res.redirect(`/lolplays/${lolplay._id}`);
  });
}

// Show
function lolplaysShow(req, res) {
  Lolplay.findById(req.params.id, (err, lolplay) => {
    if (err) return res.render('lolplays/show', { lolplay: {}, error: 'Something went wrong.' });
    if (!lolplay) return res.render('lolplays/show', { lolplay: {}, error: 'No video was found!' });
    return res.render('lolplays/show', { lolplay, error: null });
}

// EDIT
function lolplaysEdit(req, res) {

}

// UPDATE
function lolplaysUpdate(req, res) {

}

// DELETE
function lolplaysDelete(req, res) {

}

module.exports = {
  index: lolplaysIndex,
  new: lolplaysNew,
  create: lolplaysCreate,
  show: lolplaysShow,
  edit: lolplaysEdit,
  update: lolplaysUpdate,
  delete: lolplaysDelete
};
