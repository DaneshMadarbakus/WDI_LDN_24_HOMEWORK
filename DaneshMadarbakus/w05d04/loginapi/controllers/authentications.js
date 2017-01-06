// STEP-9 Prepare the authencations controller. Get functions ready to be exported

// STEP-11 Connect to the model so that we can start building our functions in
// accordance to the Model
const User = require('../models/user');

// STEP-18 Fill out the functions
    // This function activates(evokes) when the user tries to register.
    // This function firstly creates a new user. It then checks if there is
    // any errors and if there is it will send into JSON the message that
    // something went wrong. If there is no error however, it will send a
    // message into the JSON welcoming the user by his username and then
    // entering the users information.
function authenticationsRegister(req, res) {
  User.create(req.body.user, (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.!' });
    return res.status(201).json({
      message: `Welcome ${user.username}`,
      user
    });
  });
}
    // This function activates(evokes) when the user tries to login.
    // This function firstly finds the user information by looking for a
    // matching email field. Then it checks if there are any errors and if
    // there are any it will send a message into JSON saying the something
    // went wrong. Then it checks to see firstly if the email input matches
    // any email inside any user item and secondly if a user found then does
    // the password input match the one inside that user item. If a relevant
    // user item isn't found or if the password doesn't match the user item
    // then it will send a message to JSON saying unauthorised and to go
    // away. If however there are no errors and a user is found with a
    // relevant matching password then it will send a message saying welcome
    // back and also the user item to JSON. 
function authenticationsLogin(req, res) {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.'});
    if (!user || !user.validatePassword(req.body.password)) {
      return res.status(401).json({ message: 'Unauthorised! Go away.'});
    }
    return res.status(200).json({
      message: 'Welcome back.',
      user
    });
  });
}

// STEP-10 Export the functions so when ready we can use them in the routes
module.exports = {
  register: authenticationsRegister,
  login: authenticationsLogin
};
