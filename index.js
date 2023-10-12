// get the element
let my_element = document.getElementById("button");

// change the color
function changeButtonColor() {
    if (my_element.classList.contains("btn-danger")) {
        my_element.classList.remove("btn-danger");
        my_element.classList.add("btn-warning");
    } else if (my_element.classList.contains("btn-warning")) {
        my_element.classList.remove("btn-warning");
        my_element.classList.add("btn-success");
    } else { 
        my_element.classList.remove("btn-success");
        my_element.classList.add("btn-danger");
    }
};

// add a continue change to element at 10 seconds
let id = window.setInterval(function () { 
    changeButtonColor();
},  10000);

// add a change to the element at click and at every 10 seconds
my_element.addEventListener("click", function() {
    window.clearInterval(id); // clear the last repetitive interval
    changeButtonColor();
    id = window.setInterval(function () { 
        changeButtonColor();
    },  10000);
});