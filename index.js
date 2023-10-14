//classes list and selector
let buttonClassList = ["btn-danger", "btn-warning", "btn-success"];

let buttonClassSelector = 0;

// get the element
let buttonElement = document.getElementById("button");

// change the color
function changeButtonColor() {
    buttonElement.classList.remove(buttonClassList[buttonClassSelector]);
    buttonClassSelector = ++buttonClassSelector % buttonClassList.length;// next index number from buttonClassList
    buttonElement.classList.add(buttonClassList[buttonClassSelector]);
};

// add a continue change to element at 10 seconds
let repeatIntervalBtColor = window.setInterval(function () { 
    changeButtonColor();
},  10000);

// add a change to the element at click and at every 10 seconds
buttonElement.onclick = function() {
    window.clearInterval(repeatIntervalBtColor); // clear the last repetitive interval
    changeButtonColor();
    repeatIntervalBtColor = window.setInterval(function () { 
        changeButtonColor();
    },  10000);
};