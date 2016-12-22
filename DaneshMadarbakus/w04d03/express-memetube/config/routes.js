//STEP-17 require express
const express = require('express'); /* This allows us to use express on this page */

//STEP-18 set up the router
const router = express.Router(); /* WDTD? It assigns the router function to a const/variable? */

//STEP-19 Require the tarantinovids controller
const tarantinovids = require('../controllers/tarantinovidscontroller'); /* This allows us to to connect to the controller file and access all of its functions */

//STEP-20 Set up the routes
router.route('/')
  .get((req, res) => res.render('home'));
  /* This sets the default page for our site. If the URL only has a "/", it does not enter the controller, it goes straight to the views file and renders home.ejs */

router.route('/tarantinovids') /* If the URL has "/tarantinovids" do the stuff below it */
  .get(tarantinovids.index) /* GET means get the file and display it - go into the controller file and use the function labeled index*/
  .post(tarantinovids.create); /* POST means you want to send information to the site/server - go into the controller and use the function labelled as create */
router.route('/tarantinovids/new') /* If the URL has "/tarantinovids/new" do the stuff below it */
  .get(tarantinovids.new);
router.route('/tarantinovids/:id')
  .get(tarantinovids.show)
  .put(tarantinovids.update)
  .delete(tarantinovids.delete);
router.route('/tarantinovids/:id/edit')
  .get(tarantinovids.edit);

//STEP-21 Export the router page so that all other files can access it

module.exports = router;

//STEP-22 Set up the views if you have not already done so
