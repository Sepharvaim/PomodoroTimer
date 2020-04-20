


let studyTime = document.querySelector(".item4");
let breakTime = document.querySelector(".item7");
let item3 = document.querySelector(".item3");
let item5 = document.querySelector(".item5");
let item6 = document.querySelector(".item6");
let item8 = document.querySelector(".item8");
let timeClock = document.querySelector(".time");
let playButton = document.querySelector(".play");




item3.addEventListener("click", () => {
  if (studyTime.innerHTML === "10") {
    return studyTime.innerHTML;
  } else {
    studyTime.innerHTML = reduceNumber(studyTime.innerHTML);
    minutes = studyTime.innerHTML;
    timeClock.innerHTML = studyTime.innerHTML +":"+ "00";
  }
})
item6.addEventListener("click", () => {
  if (breakTime.innerHTML === "2") {
    return breakTime.innerHTML;
  } else {
    breakTime.innerHTML = reduceNumber(breakTime.innerHTML);
    minutesBreak = breakTime.innerHTML;
  }
})

item5.addEventListener("click", () => {
  studyTime.innerHTML = addNumber(studyTime.innerHTML);
  minutes = studyTime.innerHTML;
  timeClock.innerHTML = studyTime.innerHTML + ":" + "00";
  
})
item8.addEventListener("click", () => {
  breakTime.innerHTML = addNumber(breakTime.innerHTML);
  minutesBreak = breakTime.innerHTML;
})

function reduceNumber(tempo) {
  tempo = Number(tempo);
  return tempo - 1;
  }

function addNumber(tempo) {
  tempo = Number(tempo);
  return tempo + 1;
}


let seconds = 0;
let minutes = studyTime.innerHTML;
let minutesBreak = breakTime.innerHTML;
let secondsBreak = 0;

function breakwatch() {
        
      
        if (minutesBreak !== 0 || secondsBreak !== 0) {
          


          if (secondsBreak / 60 === 0) {
            minutesBreak--
            secondsBreak = 59;
          } else {
               secondsBreak--
            }   
          if (minutesBreak > 9 && secondsBreak > 9 ) {
            timeClock.innerHTML =  minutesBreak+":"+secondsBreak;
          } else if (minutesBreak < 10 && secondsBreak < 10) {
            timeClock.innerHTML = "0"+minutesBreak+":"+"0"+secondsBreak;
          } else if (secondsBreak < 10 ) {
              timeClock.innerHTML = minutesBreak+":"+"0"+secondsBreak;
          } else {
            timeClock.innerHTML = "0"+minutesBreak+":"+secondsBreak;
          }



        } else {
          clearInterval(interval);
          
          var audio = new Audio('sound/break.mp3');
          audio.play();
          timeClock.innerHTML = studyTime.innerHTML+":"+"00";
          oneCall = true;
          seconds = 0;
          minutes = studyTime.innerHTML;
          minutesBreak = breakTime.innerHTML;
          secondsBreak = 0;
        }
        

}

let oneCall = true;
let interval = false;

    
    
    playButton.addEventListener('click', () =>{
      if (oneCall === true) {
        interval = window.setInterval(stopWatch,100);  
        oneCall = false;
      } 
    })
 


function stopAll() {

}

function stopWatch() {
      // if (minutes === 0 && seconds === 0) {}
  
   if (minutes !== 0 || seconds !== 0) {

    if (seconds / 60 === 0) {
      minutes--
      seconds = 59; 
    } else { 
          seconds-- 
        }
       
        if (seconds < 10 && minutes < 10) {
            timeClock.innerHTML = "0"+minutes+":"+"0"+seconds;
          } else if (minutes > 9 && seconds > 9) {
            
            timeClock.innerHTML = +minutes + ":" + seconds;
          } else if (minutes > 9 && seconds < 9) {
            timeClock.innerHTML =  minutes +":"+"0"+ seconds; 
          } else {
            timeClock.innerHTML = "0"+minutes +":"+ seconds;
          }
  } else { 
    clearInterval(interval);
    
    var audio = new Audio('sound/session.mp3');
    audio.play();
    interval = window.setInterval(breakwatch, 100);
  }
  
}