// STEP-6 set the relevant port and database locations
module.exports = {
  port: process.env.PORT || 3000,
  db: 'mongodb://localhost/express-authentication'
};
