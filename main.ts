input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showIcon(IconNames.Angry)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(180000)
    basic.showString("voce zerou o jogo")
})
basic.showLeds(`
    # # # # #
    . . . . .
    # # # # #
    # # # # #
    . . . . .
    `)
basic.forever(function () {
	
})
