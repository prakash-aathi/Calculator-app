import './style.css'

let buttons = document.querySelectorAll(".btnstyle");
let displayEl = document.getElementById("display");
displayEl.blur();

// listening buttons click and display  
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        displayEl.value += e.target.innerText;
    });
});

// listening clear button
let clearEl = document.getElementById("clearAll")
clearEl.addEventListener("click", clear);
function clear() {
    displayEl.value = "";
    answerEl.innerText = "";
}

// listening equal button and evaluate the answer and display it
let equal = document.getElementById("equalbtn")
let answerEl = document.getElementById("answer")
equal.addEventListener('click', calculate);
function calculate() {
    try {
        let result = eval(displayEl.value);
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
    console.log("helo");
    switch (e.key) {
        case 'c':
            clear();
            break;
        case '(':
            displayEl.value+="("
            break;
        case ')':
            displayEl.value+=")"
            break;
        case '/':
            displayEl.value+="/"
            break;
        case '*':
            displayEl.value+="*"
            break;
        case '-':
            displayEl.value+="-"
            break;
        case '+':
            displayEl.value+="+"
            break;
        case "Enter":
            calculate()
            break;
        case '=':
            calculate()
            break;
        case '.':
            displayEl.value+="."
            break;
        case '0':
            displayEl.value+="0"
            break;
        case '1':
            displayEl.value+="1"
            break;
        case '2':
            displayEl.value+="2"
            break;
        case '3':
            displayEl.value+="3"
            break;
        case '4':
            displayEl.value+="4"
            break;
        case '5':
            displayEl.value+="5"
            break;
        case '6':
            displayEl.value+="6"
            break;
        case '7':
            displayEl.value+="7"
            break;
        case '8':
            displayEl.value+="8"
            break;
        case '9':
            displayEl.value+="9"
            break;     	
    }
});
