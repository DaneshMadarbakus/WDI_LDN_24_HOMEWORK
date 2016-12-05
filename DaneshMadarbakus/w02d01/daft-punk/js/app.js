document.addEventListener('DOMContentLoaded', start);

var music = ['sounds/work_it.wav', 'sounds/make_it.wav', 'sounds/do_it.wav', 'sounds/makes_us.wav', 'sounds/harder.wav', 'sounds/better.wav', 'sounds/faster.wav', 'sounds/stronger.wav', 'sounds/more_than.wav', 'sounds/hour.wav', 'sounds/our.wav', 'sounds/never.wav', 'sounds/ever.wav', 'sounds/after.wav', 'sounds/work_is.wav', 'sounds/over.wav'];


function start() {
  var buttons = document.getElementsByTagName('li');
  var audio = document.getElementById('audio');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playMusic);
    buttons[i].value = i;
  }

  function playMusic(){
    // audio.src = 'sounds/' + this.id + '.wav';
    audio.src = music[this.value];
    audio.play();
  }

}
