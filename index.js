function changeButtonColor() {
    let my_element = document.getElementById("button");
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
}

let id = window.setInterval(function () { 
    changeButtonColor();
},  10000);

window.addEventListener("click", function(element) {
    this.clearInterval(id);
    if (element.target.tagName == "BUTTON") {
       changeButtonColor();
    }
    id = this.setInterval(function () { 
        changeButtonColor();
    },  10000);
})