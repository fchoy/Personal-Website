var audio = new Audio("smacksoundeffect.mp3");
audio.volume = 0.75;
function smackSound(){
    var playAudio = function(){
      audio.loop = false;
      audio.play();
    }

    document.getElementById("random-button").addEventListener("click", playAudio);
  }