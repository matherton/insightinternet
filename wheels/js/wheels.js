let wheel = document.getElementById('wheel');
let resetBtn = document.getElementsByClassName('reset-btn')[0];
let rotation = 0;
let scale = 1;
let slowingDown = false;
let pressed = {};

window.addEventListener('keydown', handleKeyDown, false);
window.addEventListener('keyup', handleKeyUp, false);

(function(){
  const resetSpinBtn = document.getElementById("spinBtn");

  resetSpinBtn.addEventListener("click", function(){
            
            let state1 = document.getElementById('t1').value;
            let state2 = document.getElementById('t2').value;
            let duration = 150;
            animateWheel(duration);
            slowingDown = true;
            if ( resetSpinBtn.innerHTML == state1 ) {
              resetSpinBtn.innerHTML = state2;
            }
    else if ( resetSpinBtn.innerHTML == state2 ) {
                resetSpinBtn.innerHTML = state1;
            }
            // add as many dynamic values as you wish here
            else {
                // to be on the safe side
                resetSpinBtn.innerHTML = state1;
            }
            resetSpinBtn.disabled = true;
            setTimeout(function(){
              resetSpinBtn.disabled = false;
              resetSpinBtn.innerHTML = state2;
            },15000);
  }, false);

})();

/*document.getElementById('test').addEventListener("click", function() {
  console.log('button pressed!');
  
  alert('how do I spn the wheel?');
  document.getElementById('test').innerHTML = "Hello World";
});*/

function handleKeyDown(e) {
  if (e.keyCode === 32 && slowingDown === false) {
    animateKeyOut();
    if (pressed[e.which]) return;
    pressed[e.which] = e.timeStamp;
  }
};

function handleKeyUp(e) {
  if (e.keyCode === 32) {
    animateKeyIn();
    spinThatWheel(e);
  }
};

function animateKeyOut() {
  scale -= 0.03;
  if (scale < 0.5) return;
  TweenMax.to(resetBtn, 0.5, {ease: Sine.easeOut, scale: scale});
}

function animateKeyIn() {
  scale = 1;
  TweenMax.to(resetBtn, 0.25, {scale: scale});
}

function spinThatWheel(e) {
  if ( !pressed[e.which] ) return;
  let duration = Math.floor((e.timeStamp - pressed[e.which]) / 25);
  
  if (duration > 150) duration = 150;
  
  animateWheel(duration);
  slowingDown = true;
  pressed[e.which] = 0;
};

function animateWheel(duration) {
  let randomNum = Math.floor((Math.random() * 10));
  rotation += (30 * duration) + (30 * randomNum);
  TweenMax.to(wheel, 20, {
    ease: Power4.easeOut,
    rotation: rotation,
    onComplete: resetWheel
  });
}

function resetWheel() {
  slowingDown = false;
};