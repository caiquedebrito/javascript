// const greenBtn = document.querySelector("#green-btn")
// const yellowBtn = document.querySelector("#yellow-btn")
// const redBtn = document.querySelector("#red-btn")
const autoBtn = document.querySelector("#auto")

const yellowLight = document.querySelector("#yellow")
const greenLight = document.querySelector("#green")
const redLight = document.querySelector("#red")

let key = 0, next = false

function greenLightOn() {
    greenLight.style.backgroundColor = 'green'
    greenLight.style.boxShadow = '1px -7px 24px 5px #02b907, 1px 7px 24px 5px #02b907'
    key = 2
    next = true
}

function greenLightOff() {
    greenLight.style.backgroundColor = 'rgb(54, 92, 54)'
    greenLight.style.boxShadow = '1px -7px 10px gray, 1px 7px 10px gray'
}

function yellowLightOn() {
    yellowLight.style.backgroundColor = 'yellow'
    yellowLight.style.boxShadow = '1px -7px 24px 5px #ffec13, 1px 7px 24px 5px #ffec13'
    if (next) {
        key = 3
    } else {
        key = 1
    }
}

function yellowLightOff() {
    yellowLight.style.backgroundColor = 'rgb(77, 77, 50)'
    yellowLight.style.boxShadow = '1px -7px 10px gray, 1px 7px 10px gray'
}

function redLightOn() {
    redLight.style.backgroundColor = 'red'
    redLight.style.boxShadow = '1px -7px 24px 5px #ff1313, 1px 7px 24px 5px #ff1313'
    key = 2
    next = false
}

function redLightOff() {
    redLight.style.backgroundColor = 'rgb(90, 57, 57)'
    redLight.style.boxShadow = '1px -7px 10px gray, 1px 7px 10px gray'
}

let onOf = true, trafficLightKey;


function startTrafficLight() {
    greenLightOn()
    trafficLightKey = setInterval(() => {
        switch (key) {
            case 0: 
                greenLightOn()
                break
            case 1:
                yellowLightOff()
                greenLightOn()
                break;
            case 2:
                greenLightOff()
                redLightOff()
                yellowLightOn()
                break;
            case 3:
                yellowLightOff()
                redLightOn()
                break;
        }
    }, 5000);
}

function stopTrafficLight() {
    clearInterval(trafficLightKey)
    greenLightOff()
    yellowLightOff()
    redLightOff()
}

autoBtn.addEventListener("click", () => {
    if (onOf) {
        onOf = false
        startTrafficLight()
    } else {
        stopTrafficLight()
        onOf = true
    }
})

// yellowBtn.addEventListener("click", function(){
//     yellowLight.style.backgroundColor = 'yellow'
// })

// greenBtn.addEventListener("click", function(){
//     greenLight.style.backgroundColor = 'green'
// })

// redBtn.addEventListener("click", function(){
//     redLight.style.backgroundColor = 'red'
// })

// yellowBtn.addEventListener("mouseleave", function(){
//     yellowLight.style.backgroundColor = '#4d4d32'
// })

// greenBtn.addEventListener("mouseleave", function(){
//     greenLight.style.backgroundColor = '#1d2e1d'
// })

// redBtn.addEventListener("mouseleave", function(){
//     redLight.style.backgroundColor = '#5a3939'
// })

