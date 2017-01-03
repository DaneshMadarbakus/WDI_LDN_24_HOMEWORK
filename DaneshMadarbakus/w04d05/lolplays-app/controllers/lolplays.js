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
  });
}

// EDIT
function lolplaysEdit(req, res) {
  Lolplay.findById(req.params.id, (err, lolplay) => {
    if (err) return res.render('lolplays/edit', { lolplay: {}, error: 'Something went wrong.' });
    if (!lolplay) return res.render('lolplays/edit', { lolplay: {}, error: 'No video was found!' });
    return res.render('lolplays/edit', { lolplay, error: null });
  });
}

// UPDATE
function lolplaysUpdate(req, res) {
  Lolplay.findById(req.params.id, (err, lolplay) => {
    if (err) return res.render('lolplays/edit', { lolplay: {}, error: 'Something went wrong.' });
    if (!lolplay) return res.render('lolplays/edit', { lolplay: {}, error: 'No video was found!' });

    for (const field in Lolplay.schema.paths) {
      if ((field !== '_id') && (field !== '__v')) {
        if (req.body.lolplay[field] !== undefined) {
          lolplay[field] = req.body.lolplay[field];
        }
      }
    }

    lolplay.save((err, lolplay) => {
      if (err) return res.render('lolplays/edit', { lolplay: {}, error: 'Something went wrong.' });
      return res.redirect(`/lolplays/${lolplay._id}`);
    });
  });
}

// DELETE
function lolplaysDelete(req, res) {
  Lolplay.findByIdAndRemove(req.params.id, err => {
    if (err) return res.render('lolplays/show', { lolplay: {}, error: 'Something went wrong.' });
    return res.redirect('/lolplays');
  });
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
