const btns = document.querySelectorAll("button")
const display = document.getElementById("display")


let firstNum = null;
let operator = null;


function extract_num(word) {
    let number_part = word.slice(3);
    return parseInt(number_part);
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
            display.value += 0
            display.value += 0
        }

        if (id === "dot" && !display.value.includes(".")) {
            display.value += "." 
        }

        if (id === "add") {
            firstNum = parseFloat(display.value);
            operator = "add"
            display.value = ""
        }

        if ((id === "equals") && (operator === "add")) {
            const secondNum = parseFloat(display.value)
            display.value = firstNum + secondNum

            firstNum = null;
            operator = null;
        }

    })    
})

