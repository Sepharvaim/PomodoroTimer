let divOfLastWeeks = document.getElementById('divOfLastWeeks');
var lastWeeks = JSON.parse(localStorage.getItem('weeks'));

// for ()


// for every obj create a table 

// for (let i = 0; i <= lastWeeks.length; i++) {
//     let 
// }


if (lastWeeks) {

    for (let j = 0; j < lastWeeks.length; j++) {



        let aDiv = document.createElement('div'); //
        divOfLastWeeks.appendChild(aDiv);

        aDiv.setAttribute('style', 'border: 1px solid black; padding: 2px; padding-left: 15px; width: 100%; background-color: white; display:flex; font-size: 30px; justify-content: center; align-items: center;color: black; flex-wrap: wrap');
        let arrayData = Object.entries(lastWeeks[j]);

        for (let i = 0; i < arrayData.length; i++) {
            let allNumbers = document.createElement('div');
            allNumbers.setAttribute('style', ('flex-grow: 1;flex-basis: 55px;'))
            let expression = Math.floor(arrayData[i][1] / 60) + "." + Math.floor((arrayData[i][1] % 60) / 10);
            allNumbers.innerHTML = expression == 0.0 ? 0 : expression;
            aDiv.appendChild(allNumbers);
        }
        for (let i = 0; i < arrayData.length; i++) {
            let allLetters = document.createElement('div');
            allLetters.setAttribute('style', ('flex-grow: 1;flex-basis: 50px;'))
            allLetters.innerHTML = arrayData[i][0];

            aDiv.appendChild(allLetters);
        }
    }
}



