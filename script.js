const btns = document.querySelectorAll("button")
const display = document.getElementById("display")


let firstNum = null;
let operator = null;


function extract_num(word) {
    const match = word.match(/\d+/);
    return match ? parseInt(match[0]) : null;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

btns.forEach(button => {
    button.addEventListener("click", (event) => {
        let id = event.target.id;
        let number = extract_num(id)

        

        if (numbers.includes(number)) {
            display.value += number
        }

        if (id === "all-clear") {
            display.value = ""
        }

        if (id === "zero-zero") {
            display.value += "00"
        }

        if (id === "dot" && !display.value.includes(".")) {
            display.value += "." 
        }

        if (id === "add") {
            firstNum = parseFloat(display.value);
            operator = "add"
            display.value = ""
        }

        if (id === "subtract") {
            firstNum = parseFloat(display.value);
            operator = "subtract"
            display.value = ""
        }

        if (id === "divide") {
            firstNum = parseFloat(display.value);
            operator = "divide"
            display.value = ""
        }
        if (id === "percentage") {
            firstNum = parseFloat(display.value);
            display.value = firstNum / 100
        }

        if (id === "multiply") {
            firstNum = parseFloat(display.value);
            operator = "multiply"
            display.value = ""
        }

        if ((id === "equals") && (operator === "add")) {
            const secondNum = parseFloat(display.value)
            display.value = firstNum + secondNum

            firstNum = null;
            operator = null;
        }

        if ((id === "equals") && (operator === "subtract")) {
            const secondNum = parseFloat(display.value)
            display.value = firstNum - secondNum

            firstNum = null;
            operator = null;
        }

        if ((id === "equals") && (operator === "multiply")) {
            const secondNum = parseFloat(display.value)
            display.value = firstNum * secondNum

            firstNum = null;
            operator = null;
        }

        if ((id === "equals") && (operator === "divide")) {
            const secondNum = parseFloat(display.value)
            display.value = firstNum / secondNum

            firstNum = null;
            operator = null;
        }

        if (id === "delete") {
            display.value = display.value.slice(0, -1)
        }

    })    
})

