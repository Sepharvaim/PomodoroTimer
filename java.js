var audioBreakEnd = new Audio('sound/session.mp3');
var audioEndSession = new Audio('sound/break.mp3');

let studyTime = document.querySelector(".item4");
let breakTime = document.querySelector(".item7");
let item3 = document.querySelector(".item3");
let item5 = document.querySelector(".item5");
let item6 = document.querySelector(".item6");
let item8 = document.querySelector(".item8");
let timeClock = document.querySelector(".time");
let playButton = document.querySelector(".play");
let stopButton = document.querySelector(".stop");
let pauseButton = document.querySelector(".pausa");
let resetButton = document.querySelector(".reset");
let gameTime = +localStorage.getItem('gameTime') || 0;
resetButton.innerHTML = `Film hours gained: ${Math.floor((gameTime / 60))}.${gameTime % 60} `

let modeSetting = true;

let seconds = 0;
let minutes = studyTime.innerHTML;
let minutesBreak = breakTime.innerHTML;
let secondsBreak = 0;

let oneCall = true;
let interval = false;


// abbassa numero fino a 15
item3.addEventListener("click", () => {
  if (modeSetting) {
    if (studyTime.innerHTML != "15") {
      studyTime.innerHTML -= 1;
      timeClock.innerHTML = studyTime.innerHTML + ":" + "00";
    }
  }
})
// reduce break time up to 5
item6.addEventListener("click", () => {
  if (modeSetting) {
    if (breakTime.innerHTML != "5") {
      breakTime.innerHTML -= 1;
      minutesBreak = breakTime.innerHTML;
    }
  }
})
// aggiungi tempo studio 
item5.addEventListener("click", () => {
  if (modeSetting) {
    studyTime.innerHTML -= -1;
    timeClock.innerHTML = studyTime.innerHTML + ":" + "00";
  }
});
// ADD A BREAK TIME
item8.addEventListener("click", () => {
  if (modeSetting) {
    breakTime.innerHTML += 1;
    minutesBreak = breakTime.innerHTML;
  }
})

stopButton.addEventListener("click", () => {
  stopAll();
})

pauseButton.addEventListener("click", () => {
  pauseAll();
  oneCall = true;
})

playButton.addEventListener('click', () => {
  if (oneCall === true) {
    interval = window.setInterval(stopWatch, 1000);
    oneCall = false;
  }
})




function breakwatch() {
  if (minutesBreak !== 0 || secondsBreak !== 0) {

    if (secondsBreak / 60 === 0) {
      minutesBreak--
      secondsBreak = 59;
    } else {
      secondsBreak--
    }
    if (minutesBreak > 9 && secondsBreak > 9) {
      timeClock.innerHTML = minutesBreak + ":" + secondsBreak;
    } else if (minutesBreak < 10 && secondsBreak < 10) {
      timeClock.innerHTML = "0" + minutesBreak + ":" + "0" + secondsBreak;
    } else if (secondsBreak < 10) {
      timeClock.innerHTML = minutesBreak + ":" + "0" + secondsBreak;
    } else {
      timeClock.innerHTML = "0" + minutesBreak + ":" + secondsBreak;
    }

  } else {
    clearInterval(interval);
    audioEndSession.play();
    timeClock.innerHTML = studyTime.innerHTML + ":" + "00";

    oneCall = true;
    seconds = 0;
    minutes = studyTime.innerHTML;
    minutesBreak = breakTime.innerHTML;
    secondsBreak = 0;
    modeSetting = true;
  }
}

function stopAll() {
  studyTime.innerHTML = 45;
  breakTime.innerHTML = 5;
  timeClock.innerHTML = studyTime.innerHTML + ":" + "00";
  oneCall = true;
  seconds = 0;
  minutes = studyTime.innerHTML;
  minutesBreak = breakTime.innerHTML;
  secondsBreak = 0;
  clearInterval(interval);
  modeSetting = true;

}

function pauseAll() {
  clearInterval(interval);
}

function stopWatch() {
  // minutes e' la variabile che tiene conto 
  if (modeSetting) {
    minutes = studyTime.innerHTML;
    modeSetting = false;
  }
  // imposta la var minutes con il vlore scelto della sessione studio
  if (minutes !== 0 || seconds !== 0) {

    if (seconds / 60 === 0) {
      minutes--
      seconds = 59;
    } else {
      seconds--
    }

    if (seconds < 10 && minutes < 10) {
      timeClock.innerHTML = "0" + minutes + ":" + "0" + seconds;
    } else if (minutes > 9 && seconds > 9) {

      timeClock.innerHTML = +minutes + ":" + seconds;
    } else if (minutes > 10 && seconds < 10) {
      timeClock.innerHTML = minutes + ":" + "0" + seconds;
    } else {
      timeClock.innerHTML = "0" + minutes + ":" + seconds;
    }

  } else {
    clearInterval(interval);
    audioBreakEnd.play();

    gameTime += 15;
    localStorage.setItem('gameTime', gameTime);
    gameTime = +localStorage.getItem('gameTime');
    resetButton.innerHTML = `Gaming's hours gained: ${Math.floor((gameTime / 60))}.${gameTime % 60}`
    addHoursSpend(studyTime.innerHTML);

    interval = window.setInterval(breakwatch, 1000);
  }
  document.title = timeClock.innerHTML;
}