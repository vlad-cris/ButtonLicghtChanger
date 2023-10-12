// get the element
let buttonElement = document.getElementById("button");

// change the color
function changeButtonColor() {
    if (buttonElement.classList.contains("btn-danger")) {
        buttonElement.classList.remove("btn-danger");
        buttonElement.classList.add("btn-warning");
    } else if (buttonElement.classList.contains("btn-warning")) {
        buttonElement.classList.remove("btn-warning");
        buttonElement.classList.add("btn-success");
    } else { 
        buttonElement.classList.remove("btn-success");
        buttonElement.classList.add("btn-danger");
    }
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