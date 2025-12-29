const btns = document.querySelectorAll("button")
const display = document.getElementById("display")

let currentValue = 0;
let currentOperator = null;
let newInput = true;

function operate(operator, a, b) {
    switch(operator) {
        case "add" : return a + b;
        case "subtract" : return a - b;
        case "multiply" : return a * b;
        case "divide" : return a / b;
    }
}

let firstNum = null;
let operator = null;


function extract_num(word) {
    const match = word.match(/\d+/);
    return match ? parseInt(match[0]) : null;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

btns.forEach(button => {
    button.addEventListener("click", (event) => {
        let id = event.currentTarget.id;
        let number = extract_num(id)

        if (id.startsWith("num")) {
            if (newInput) {
                display.value = number
                newInput = false;
            } else {
                display.value += number
            }
            return;
        }

        if (id === "zero-zero") {
            if (newInput) {
                display.value = "00"
                newInput = false;
            } else {
                display.value += "00"
            }
            return;
        }

        if (id === "dot" && !display.value.includes(".")) {
            display.value += "."
            newInput = false
            return;
        }

        if (id === "all-clear") {
            display.value = ""
            currentValue = 0;
            currentOperator = null;
            newInput = true;
            return;
        }

        if (id === "delete") {
            display.value = display.value.slice(0, -1);
            return;
        }

        if (id === "percentage") {
            if (display.value === "") return;
            display.value = (parseFloat(display.value) / 100)
        }

        if (["add", "subtract", "divide", "multiply"].includes(id)) {
            if (!newInput) {
                if (currentOperator !== null) {
                    currentValue = operate(currentOperator, currentValue, parseFloat(display.value))
                } else {
                    currentValue = parseFloat(display.value)
                }
            }
            currentOperator = id;
            display.value = currentValue;
            newInput = true;
            return;
        }


        if (id === "equals") {
            if (currentOperator === null || display.value === "") return;
            currentValue = operate(currentOperator, currentValue, parseFloat(display.value));
            display.value = currentValue;
            currentOperator = null;
            newInput = true;
            return;
        }   
    })    
})

