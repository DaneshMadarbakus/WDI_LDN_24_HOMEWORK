const User = require('../models/user');

//INDEX
function usersIndex(req, res){
  User.find().populate('projects').exec(function(err, users){
    if (err) return res.json({ message: err });
    if (!users) return res.json({ message: 'Not a user!' });
    return res.status(200).json(users);
  });
}

//CREATE
function usersCreate(req, res){
  User.create(req.body.user, (err, user) => {
    if (err) return res.status(500).json({message: err });
    if (!user) return res.status(404).json({ message: 'Please send the correct information'});
    return res.status(201).json(user);
  });
}

//SHOW
function usersShow(req, res){
  User.findById(req.params.id)
  .populate('projects')
  .exec((err, user) => {
    if(err) return res.json({ message: err });
    if(!user) return res.json({ message: 'Not a user!'});
    return res.json(user);
  });
}

//UPDATE
function usersUpdate(req, res){
  User.findByIdAndUpdate(req.params.id, req.body.user, (err, user) => {
    if (err) return res.json({ message: 'Something went wrong.' });
    if (!user) return res.json({ message: 'No user was found!' });
    return res.json({ message: 'Successfully updated'});
  });
}

//DELETE
function usersDelete(req, res){
  User.findByIdAndRemove(req.params.id, (err) => {
    if (err) return res.json({ message: 'Something went wrong.' });
    return res.json({message: 'user deleted'});
  });
}

module.exports = {
  index: usersIndex,
  create: usersCreate,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
};
