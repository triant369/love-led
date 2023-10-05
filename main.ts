basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showLeds(`
        . # . . .
        # . # . .
        # . . . .
        . # . . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . . .
        # . # . .
        # . . . .
        . # . . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . # . #
        . . . . #
        . . . # .
        . . # . .
        `)
    basic.pause(100)
})
