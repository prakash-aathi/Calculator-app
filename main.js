import './style.css'

let buttons = document.querySelectorAll(".btnstyle");
let displayEl = document.getElementById("display");

// listening buttons click and display  
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        displayEl.innerText += e.target.innerText;
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
        console.log("invalid expresssion");
        answerEl.innerText = "invalid";
    }
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
            displayEl.innerText+="("
            break;
        case ')':
            displayEl.innerText+=")"
            break;
        case '/':
            displayEl.innerText+="/"
            break;
        case '*':
            displayEl.innerText+="*"
            break;
        case '-':
            displayEl.innerText+="-"
            break;
        case '+':
            displayEl.innerText+="+"
            break;
        case "Enter":
            calculate()
            break;
        case '=':
            calculate()
            break;
        case '.':
            displayEl.innerText+="."
            break;
        case '0':
            displayEl.innerText+="0"
            break;
        case '1':
            displayEl.innerText+="1"
            break;
        case '2':
            displayEl.innerText+="2"
            break;
        case '3':
            displayEl.innerText+="3"
            break;
        case '4':
            displayEl.innerText+="4"
            break;
        case '5':
            displayEl.innerText+="5"
            break;
        case '6':
            displayEl.innerText+="6"
            break;
        case '7':
            displayEl.innerText+="7"
            break;
        case '8':
            displayEl.innerText+="8"
            break;
        case '9':
            displayEl.innerText+="9"
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
    

    if (temp.length == 0) {
        answerEl.innerText = "";
    }
}
backbtn.addEventListener("click", slice);