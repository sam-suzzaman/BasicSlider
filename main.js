// accessing controllers and display div
let display = document.querySelector('.display')
let prev = document.querySelector('.prev')
console.log(prev)
let next = document.querySelector('.next')
console.log(next)
let i = 0


// storing all images into an array
let images = [
    "1",
    "2",
    "3"
]


// addign events on controllers
prev.addEventListener('click', prevFun)
next.addEventListener('click', nextFun)


// controller function   $$$$$$$$$$$$$$$$$$$$$$

function prevFun() {
    i--
    if (i < 0) {
        i = images.length - 1
    }
    display.style.backgroundImage = `url('img/${images[i]}.jpg')`
}

function nextFun() {
    i++
    if (i > images.length - 1) {
        i = 0
    }
    display.style.backgroundImage = `url('img/${images[i]}.jpg')`
}