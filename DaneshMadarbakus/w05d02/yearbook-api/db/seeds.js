const mongoose = require('mongoose');

const databaseUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/yearbook-api';
mongoose.connect(databaseUrl);

const Project = require('../models/project');
const User = require('../models/user');

const project1 = new Project({
  title: 'API Project',
  description: 'It is an API project',
  github: 'www.gitbub.com/apiproject',
  website: 'n/a'
});

project1.save((err, project) => {
  if (err) return console.log(err);
  return console.log(`${project.title} was saved`);
});


const user1 = new User({
  name: 'Danesh',
  twitter: 'https://twitter.com/DanTheMMAn93',
  github: 'https://github.com/DaneshMadarbakus',
  image: 'https://avatars3.githubusercontent.com/u/23051758?v=3&u=4c060917217fe5eb00a5e0a4ba9cebe6578e5a18&s=400',
  bio: 'n/a',
  portfolio: 'n/a',
  projects: [project1]
});

user1.save((err, user) => {
  if (err) return console.log(err);
  return console.log(`${user.name} was saved`);
});
