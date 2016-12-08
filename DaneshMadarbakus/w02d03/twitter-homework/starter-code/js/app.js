console.log('working');

var TwitterPage = TwitterPage || {};

//append comment

// add event listener, append comment
TwitterPage.addEventListener = function() {

  $('input[type=submit]').on('click', function(e){
    e.preventDefault();
    var newString = '<li class="stream-item"> <div class="tweet"> <a href="#"> <img src="http://facehoff.herokuapp.com/50/50" alt="User image goes here."> </a> <div class="content"> <strong class="fullname">David Hasselhof</strong> <span>&rlm;</span> <span>@</span> <b>iAmDavidHasselhofHomie</b>  &nbsp;&middot;&nbsp; <small class="time">just now</small><p>' + $('#new-tweet-input').val() + '</p></div></div></li>';
    $('.stream-items').prepend(newString);
    console.log($('#new-tweet-input').val());
  });

};

//append tweets onto page
TwitterPage.addTweetToPage = function(element) {
  var string = '<li class="stream-item"> <div class="tweet"> <a href="#"> <img src="' + element.user_thumbnail + '" alt="User image goes here."> </a> <div class="content"> <strong class="fullname">' + element.name + '</strong> <span>&rlm;</span> <span>@</span> <b>' + element.screen_name +'</b>  &nbsp;&middot;&nbsp; <small class="time">' + element.created_at + '</small> <p>' + element.text + '</p></div></div></li>';
  // console.log(string);
  $('.stream-items').append(string);

  // TwitterPage.addEventListener();
};

//loop over and find tweets
TwitterPage.grabTweets = function() {
  this.$tweets = window.tweets;
  $(this.$tweets).each(function(index, element) {
    // console.log(element);
    TwitterPage.addTweetToPage(element);
  });
};

//start window load
$(function() {
  TwitterPage.grabTweets();
  TwitterPage.addEventListener();
});
