const HIGH_COORDINATE: number = 4

// 1. Keep picking points until they lie on a vertical or horizontal line 

let pointsPicked: boolean = false

let x1: number
let x2: number
let y1: number
let y2: number

let horizontal: boolean = true
let vertical: boolean = false

while (!pointsPicked) {
    let x1: number = randint(0, HIGH_COORDINATE)
    let y1: number = randint(0, HIGH_COORDINATE)
    let x2: number = randint(0, HIGH_COORDINATE)
    let y2: number = randint(0, HIGH_COORDINATE)

    if (x1 == x2 && y1 != y2) {
        vertical = true
        pointsPicked = true

    } else if (y1 == y2 && x1 != x2) {
        horizontal = true
        pointsPicked = true // or, alternatively, juse use while(true) and break
    }

}

led.plotBrightness(x1, y1, 255)
led.plotBrightness(x2, y2, 255)

/* 
        2. Keep generating random points to fill half of the screen divided by the line
            - if the line is horizontal, the bottom region 
            - if the line is vertical, the right region 
*/

const NUM_LOOPS: number = 100

basic.pause(2000)

for (let i = 0; i < NUM_LOOPS; i++) {
    let x3: number = randint(0, HIGH_COORDINATE)
    let y3: number = randint(0, HIGH_COORDINATE)

    if ((vertical && x3 > x1) || (horizontal && y3 > y1)) {
        led.plotBrightness(x3, y3, 50)
        basic.pause(100)
    }
}