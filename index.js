// Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}

function positiveNegativeNumber(input) {
    if(display.value > 0) {
        let x = display.value;
        clearDisplay();
        appendToDisplay(input += x);
    }
    else {
        let x = display.value;
        clearDisplay();
        appendToDisplay(x * -1);
    }  
}

function squareNumber() {
    let x = display.value;
    clearDisplay();
    appendToDisplay(x * x);
}

function squareRoot() {
    let x = display.value;
    clearDisplay();
    appendToDisplay(Math.sqrt(x));
}