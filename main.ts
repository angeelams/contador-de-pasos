let pasos = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(pasos * 0.68)
})
input.onButtonPressed(Button.A, function () {
    pasos = 0
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    pasos = 0
    basic.showNumber(0)
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 1300) {
        pasos += 1
    }
})
