input.onButtonPressed(Button.A, function () {
    kitolt()
})
input.onButtonPressed(Button.AB, function () {
	
})
function sor (num: number) {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, num)
    }
}
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        for (let index2 = 0; index2 <= 4; index2++) {
            led.plot(index2, index)
            basic.pause(100)
        }
    }
})
function oszlop (num: number) {
    for (let index = 0; index <= 4; index++) {
        led.plot(num, index)
    }
}
function kitolt () {
    for (let index = 0; index <= 5; index++) {
        sor(index)
    }
}
basic.forever(function () {
	
})
