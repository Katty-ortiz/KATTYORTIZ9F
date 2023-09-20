basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.StickFigure)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
})
