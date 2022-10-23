import './style.css'

let buttons = document.querySelectorAll(".btnstyle");
let displayEl = document.getElementById("display");

// listening buttons click and display  
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        displayEl.innerText += e.target.innerText;
        instantcalculate()
    });
});

// listening clear button
let clearEl = document.getElementById("clearAll")
clearEl.addEventListener("click", clear);
function clear() {
    displayEl.innerText = "";
    answerEl.innerText = "";
}

// listening equal button and evaluate the answer and display it
let equal = document.getElementById("equalbtn")
let answerEl = document.getElementById("answer")
equal.addEventListener('click', calculate);
function calculate() {
    try {
        let result = eval(displayEl.innerText);
        answerEl.innerText = result;
    }
    catch {
        answerEl.innerText = "invalid";
    }
}
// for live changes
function instantcalculate() {
    let result = eval(displayEl.innerText);
    answerEl.innerText = result;
}

// through buttons click
// console.log(buttons[0].click());
// buttons[0].addEventListener("click", alert("okay"));
document.addEventListener("keypress", (e) => {
    switch (e.key) {
        case 'c':
            clear();
            break;
        case '(':
            displayEl.innerText += "("
            break;
        case ')':
            displayEl.innerText += ")"
            break;
        case '/':
            displayEl.innerText += "/"
            instantcalculate()
            break;
        case '*':
            displayEl.innerText += "*"
            instantcalculate()
            break;
        case '-':
            displayEl.innerText += "-"
            instantcalculate()
            break;
        case '+':
            displayEl.innerText += "+"
            instantcalculate()
            break;
        case "Enter":
            calculate()
            break;
        case '=':
            calculate()
            break;
        case '.':
            displayEl.innerText += "."
            instantcalculate()
            break;
        case '0':
            displayEl.innerText += "0"
            instantcalculate()
            break;
        case '1':
            displayEl.innerText += "1"
            instantcalculate()
            break;
        case '2':
            displayEl.innerText += "2"
            instantcalculate()
            break;
        case '3':
            displayEl.innerText += "3"
            instantcalculate()
            break;
        case '4':
            displayEl.innerText += "4"
            instantcalculate()
            break;
        case '5':
            displayEl.innerText += "5"
            instantcalculate()
            break;
        case '6':
            displayEl.innerText += "6"
            instantcalculate()
            break;
        case '7':
            displayEl.innerText += "7"
            instantcalculate()
            break;
        case '8':
            displayEl.innerText += "8"
            instantcalculate()
            break;
        case '9':
            displayEl.innerText += "9"
            instantcalculate()
            break;
        case 'b':
            slice()
            break;
    }
});

// backspace button
let backbtn = document.getElementById("back")
function slice(params) {
    let temp = displayEl.innerText.slice(0, -1);
    displayEl.innerHTML = temp;
    instantcalculate()
    if (temp.length == 0) {
        answerEl.innerText = "";
    }
}
backbtn.addEventListener("click", slice);

// short keys toogle
let tooglekey = document.querySelector(".keysbtn");
let keyblock = document.getElementById("keyboard");
let mainblock = document.getElementById("card-body")

tooglekey.addEventListener("click", () => {
    if (keyblock.style.display === "none") {
        keyblock.style.display = "block";
        mainblock.style.display = "none";
    }
    else {
        keyblock.style.display = "none";
        mainblock.style.display = "block";
    }
})