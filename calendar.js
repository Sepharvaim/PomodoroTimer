
let today = new Date();
let hours = [];

(function () {
    let storeHoursSpent = localStorage.getItem('hours'); // se il dato esiste e non e' nullo 
    if (storeHoursSpent) {
        let nodeListTime = document.querySelectorAll('.week');
        storeHoursSpent = storeHoursSpent.split(',').map(elem => +elem); // risolvere NaN
        hours = storeHoursSpent;
        for (let i = 0; i < storeHoursSpent.length; i++) {
            nodeListTime[i].innerHTML = storeHoursSpent[i];
        }
    } else {
        hours = [0, 0, 0, 0, 0, 0, 0];
        localStorage.setItem('hours', hours)
    }
})();

let checkWeekStorage = localStorage.getItem('starter');
let timeStarter = new Date(checkWeekStorage); // secondi 
let currentDayMilliSeconds = today.valueOf();
let timePassed = (currentDayMilliSeconds - timeStarter) / 1000 / 60 / 60 / 24;  // tempo trascorso ogni volta che entro o faccio un ciclo 

let checkTimePassed = (function () {

    if (timePassed > 7) {
        setMonday();
        let obj = {
            D: hours[0],
            L: hours[1],
            M: hours[2],
            Me: hours[3],
            G: hours[4],
            V: hours[5],
            S: hours[6]
        }

        var arrayOfWeek = JSON.parse(localStorage.getItem('weeks')) || [];
        console.log('array of week', arrayOfWeek);
        arrayOfWeek.push(obj)
        localStorage.setItem('weeks', JSON.stringify(arrayOfWeek));
        localStorage.setItem('hours', [0, 0, 0, 0, 0, 0, 0])


        let storeHoursSpent = localStorage.getItem('hours'); // se il dato esiste e non e' nullo 
        let nodeListTime = document.querySelectorAll('.week');
        storeHoursSpent = storeHoursSpent.split(',').map(elem => +elem); // risolvere NaN
        hours = storeHoursSpent;
        for (let i = 0; i < storeHoursSpent.length; i++) {
            nodeListTime[i].innerHTML = storeHoursSpent[i];

        }
    }
})();  // controlla se e' passata la settimana 


if (!checkWeekStorage) { // se non ce il dato ovvero se e' la prima volta che entriamo in un browser
    setMonday();
}

function setMonday() {
    let starterDay = new Date();
    let dayName = starterDay.getDay();
    let dayNumber = starterDay.getDate();
    starterDay.setHours(6);
    starterDay.setMinutes(0);


    switch (true) {
        case dayName == 0:
            starterDay.setDate(dayNumber - 6);
            break;
        case dayName == 2:
            starterDay.setDate(dayNumber - 1);
            break;
        case dayName == 3:
            starterDay.setDate(dayNumber - 2);
            break;
        case dayName == 4:
            starterDay.setDate(dayNumber - 3);
            break;
        case dayName == 5:
            starterDay.setDate(dayNumber - 4);
            break;
        case dayName == 6:
            starterDay.setDate(dayNumber - 5);
    }

    localStorage.setItem('starter', starterDay);
}




// let studyHour = 0;

let weekDay = today.getDay();


function addHoursSpend(tempo) {
    let todayDiv = document.querySelector('.weekHours').children[weekDay]
    let addInHour = Number(tempo); // inner html di minuti 
 todayDiv.innerHTML = +todayDiv.innerHTML + +addInHour

    // hours[today.getDay()] = (+hours[today.getDay()] + +addInHour) > 60 ? (+hours[today.getDay()] + +addInHour) / 60 : (+hours[today.getDay()] + +addInHour);
    hours[today.getDay()] = +hours[today.getDay()] + +addInHour
    localStorage.setItem('hours', hours);
    console.log(localStorage.getItem('hours')[weekDay])
    todayDiv.innerHTML = (localStorage.getItem('hours').split(',')[weekDay]) / 60;
}
