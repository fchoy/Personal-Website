var audio = new Audio("smacksoundeffect.mp3");
var smackCount = 0;



audio.loop = false;
audio.volume = 0.7;

function smackSound(){
  audio.currentTime = 0.5; //start audio 0.5s in
  let kronii =  document.getElementById("kronii-image");
  let kroniiText = document.getElementById("smack-counter-text");

  //animate shaking when button is pressed
  kronii.animate([    
    { transform: 'translate(1px, 1px) rotate(0deg)' },
    { transform: 'translate(-1px, -2px) rotate(-1deg)', offset: 0.1 },
    { transform: 'translate(-3px, 0px) rotate(1deg)', offset: 0.2 },
    { transform: 'translate(3px, 2px) rotate(0deg)', offset: 0.3 },
    { transform: 'translate(1px, -1px) rotate(1deg)', offset: 0.4 },
    { transform: 'translate(-1px, 2px) rotate(-1deg)', offset: 0.5 },
    { transform: 'translate(-3px, 1px) rotate(0deg)', offset: 0.6 },
    { transform: 'translate(3px, 1px) rotate(-1deg)', offset: 0.7 },
    { transform: 'translate(-1px, -1px) rotate(1deg)', offset: 0.8 },
    { transform: 'translate(1px, 2px) rotate(0deg)', offset: 0.9 },
    { transform: 'translate(1px, -2px) rotate(-1deg)' }], {duration: 300, iterations: 1});

  audio.play();
  smackCount++;
  kroniiText.innerHTML = "Smack Counter : " + smackCount;
}

//used to put a button press counter that starts at 0 and increases by 1 every time it is passed.
function counter(){ 

}