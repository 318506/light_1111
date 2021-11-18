input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    listt = [
    0,
    1,
    0,
    1,
    0
    ]
    for (let index = 0; index <= 4; index++) {
        if (listt[index] == 1) {
            led.plot(index, 0)
        } else {
            led.unplot(index, 0)
        }
    }
})
radio.onReceivedString(function (receivedString) {
    listtt = [
    [
    randint(0, 255),
    randint(0, 255),
    randint(0, 255),
    randint(0, 255),
    randint(0, 255)
    ],
    [
    randint(0, 255),
    randint(0, 255),
    randint(0, 255),
    randint(0, 255),
    randint(0, 255)
    ],
    [
    randint(0, 255),
    randint(0, 255),
    randint(0, 225),
    randint(0, 225),
    randint(0, 225)
    ],
    [
    randint(0, 255),
    randint(0, 255),
    randint(0, 255),
    randint(0, 255),
    randint(0, 255)
    ],
    [
    randint(0, 255),
    randint(0, 255),
    randint(0, 255),
    randint(0, 255),
    randint(0, 255)
    ]
    ]
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plotBrightness(x, y, list[y][x])
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    listtt = [
    [
    randint(0, 255),
    randint(0, 255),
    randint(0, 255),
    randint(0, 255),
    randint(0, 255)
    ],
    [
    randint(0, 255),
    randint(0, 255),
    randint(0, 255),
    randint(0, 255),
    randint(0, 255)
    ],
    [
    randint(0, 255),
    randint(0, 255),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1)
    ],
    [
    randint(0, 255),
    randint(0, 255),
    randint(0, 255),
    randint(0, 255),
    randint(0, 255)
    ],
    [
    randint(0, 255),
    randint(0, 255),
    randint(0, 255),
    randint(0, 255),
    randint(0, 255)
    ]
    ]
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plotBrightness(x, y, list[y][x])
        }
    }
    radio.sendString("嗯對")
})
let listtt: number[][] = []
let listt: number[] = []
let list: number[][] = []
list = [
[
randint(0, 1),
randint(0, 1),
randint(0, 1),
randint(0, 1),
randint(0, 1)
],
[
randint(0, 1),
randint(0, 1),
randint(0, 1),
randint(0, 1),
randint(0, 1)
],
[
randint(0, 1),
randint(0, 1),
randint(0, 1),
randint(0, 1),
randint(0, 1)
],
[
randint(0, 1),
randint(0, 1),
randint(0, 1),
randint(0, 1),
randint(0, 1)
],
[
randint(0, 1),
randint(0, 1),
randint(0, 1),
randint(0, 1),
randint(0, 1)
]
]
for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= 4; x++) {
        if (list[y][x] == 1) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
    }
}
basic.forever(function () {
	
})
