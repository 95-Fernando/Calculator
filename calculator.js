window.addEventListener("load", () => {
    const display = document.querySelector(".calculator--display")
    const calculatorButtons = document.getElementsByClassName("button")

    calculatorButtonsCollection = Array.from(calculatorButtons)

    calculatorButtonsCollection.forEach((button) => {
        button.addEventListener("click", () =>{
             calculate(display, button)
        })
    })
    
    const keyEvent = window.addEventListener("keydown", (ev) => {
            calculateKey(display, ev)
        })

     const calculateKey = (display, ev) => {
        switch(ev.key){
            case "Enter":
                iqualKey(display, ev)
                break;
            case "Backspace":
                delateKey(display, ev)
                break;
            case "0": 
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":   
            case "9":
                numbersKey(display, ev)
                break;
            case "+": 
            case "-":
            case "*":
            case "/":
            case "%":
            case ".":
                symbolsKey(display, ev)
                break;
            }
        }

    const delateKey = (display, ev) =>{
        if (ev.key == "Backspace") 
        display.innerHTML = 0
    }

    const numbersKey = (display, ev) =>{
        if(display.innerHTML == 0){
           display.innerHTML = ""
           } display.innerHTML += ev.key 
    }

    const symbolsKey = (display, ev) => {
        if(display.innerHTML == 0){
           display.innerHTML = "" 
           } display.innerHTML += ev.key
    }

        const iqualKey = (display, ev) =>{
            if(ev.key == "Enter") display.innerHTML = eval(display.innerHTML)
        }
    })  

const calculate = (display, button) =>{
    switch(button.innerHTML){
        case "C":
            delate(display)
            break;
        case "=":
            iqual(display)
            break;
        default:
            upgrade(display, button)
            break;
    }
}

const delate = (display) => {
    display.innerHTML = 0
}

const iqual = (display) => {
    display.innerHTML = eval(display.innerHTML)
}

const upgrade = (display, button) => {
    if(display.innerHTML == 0){
        display.innerHTML = ""
    }
    display.innerHTML += button.innerHTML
}