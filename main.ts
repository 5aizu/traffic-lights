let item = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.forever(function () {
    item.showColor(neopixel.colors(NeoPixelColors.Green))
    for (let index = 0; index <= 20; index++) {
        whaleysans.showNumber(Math.map(index, 1, 20, 20, 1))
        basic.pause(1000)
    }
    item.showColor(neopixel.colors(NeoPixelColors.Yellow))
    for (let index = 0; index <= 3; index++) {
        whaleysans.showNumber(Math.map(index, 1, 3, 3, 1))
        basic.pause(1000)
    }
    item.showColor(neopixel.colors(NeoPixelColors.Red))
    for (let index = 0; index <= 20; index++) {
        whaleysans.showNumber(Math.map(index, 1, 20, 20, 1))
        basic.pause(1000)
    }
})
