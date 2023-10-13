//classes list and selector
let buttonClassList = ["btn btn-danger position-absolute top-50 start-50 translate-middle",
                    "btn btn-warning position-absolute top-50 start-50 translate-middle",
                    "btn btn-success position-absolute top-50 start-50 translate-middle"];

let buttonClassSelector = 0;

// get the element
let buttonElement = document.getElementById("button");

// change the color
function changeButtonColor() {
    buttonClassSelector = ++buttonClassSelector % buttonClassList.length;// next index number from buttonClassList
    buttonElement.className = buttonClassList[buttonClassSelector];
};

// add a continue change to element at 10 seconds
let repeatIntervalBtColor = window.setInterval(function () { 
    changeButtonColor();
},  10000);

// add a change to the element at click and at every 10 seconds
buttonElement.addEventListener("click", function() {
    window.clearInterval(repeatIntervalBtColor); // clear the last repetitive interval
    changeButtonColor();
    repeatIntervalBtColor = window.setInterval(function () { 
        changeButtonColor();
    },  10000);
});