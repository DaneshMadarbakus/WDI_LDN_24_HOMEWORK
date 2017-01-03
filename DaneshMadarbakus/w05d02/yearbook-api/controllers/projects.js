const Project = require('../models/project');

//INDEX
function projectsIndex(req, res){
  Project.find({}, (err, projects) => {
    if (err) return res.json({ message: err });
    if (!projects) return res.json({ message: 'Not a project!' });
    return res.status(200).json(projects);
  });
}

//CREATE
function projectsCreate(req, res){
  Project.create(req.body.project, (err, project) => {
    if (err) return res.status(500).json({message: err });
    if (!project) return res.status(404).json({ message: 'Please send the correct information'});
    return res.status(201).json(project);
  });
}

//SHOW
function projectsShow(req, res){
  Project.findById(req.params.id)
  .exec((err, project) => {
    if(err) return res.json({ message: err });
    if(!project) return res.json({ message: 'Not a project!'});
    return res.json(project);
  });
}

//UPDATE
function projectsUpdate(req, res){
  Project.findByIdAndUpdate(req.params.id, req.body.project, (err, project) => {
    if (err) return res.json({ message: 'Something went wrong.' });
    if (!project) return res.json({ message: 'No project was found!' });
    return res.json({ message: 'Successfully updated'});
  });
}

//DELETE
function projectsDelete(req, res){
  Project.findByIdAndRemove(req.params.id, (err) => {
    if (err) return res.json({ message: 'Something went wrong.' });
    return res.json({message: 'project deleted'});
  });
}

module.exports = {
  index: projectsIndex,
  create: projectsCreate,
  show: projectsShow,
  update: projectsUpdate,
  delete: projectsDelete
};
