class Enemies {
    constructor(gameScreen, gameSize, positionLeft, positionTop) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.enemiesSize = {
            w: 40,
            h: 40

        }

        this.enemiesPos = {
            left: positionLeft,
            top: positionTop//gameSize.h - gameSize.h + 40,

        }

        this.enemiesVel = {
            left: 10,
            top: 0
        }

        this.init()

    }

    init() {

        this.enemiesElement = document.createElement('div')

        this.enemiesElement.style.position = 'absolute'
        this.enemiesElement.style.width = `${this.enemiesSize.w}px`
        this.enemiesElement.style.height = `${this.enemiesSize.h}px`
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
        this.enemiesElement.style.backgroundColor = `yellow`


        this.gameScreen.appendChild(this.enemiesElement)

    }

    move() {

        this.enemiesPos.left -= this.enemiesVel.left
        if (this.enemiesPos.left > this.gameSize.w / 2 - this.enemiesSize.w || this.enemiesPos.left < 0 - this.enemiesSize.w) {
            this.enemiesVel.left *= -1
            if (this.enemiesPos.left = this.gameSize.w / 2 - this.enemiesSize.w) {
                this.enemiesPos.top += this.enemiesSize.h
            }

        }
        this.updatePosition()
    }

    updatePosition() {
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
    }





}














