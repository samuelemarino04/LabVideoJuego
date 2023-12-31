class Enemies {
    constructor(gameScreen, gameSize, positionLeft, positionTop) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.enemiesSize = {
            w: 60,
            h: 60

        }

        this.enemiesPos = {
            left: positionLeft,
            top: positionTop//gameSize.h - gameSize.h + 40,

        }

        this.enemiesVel = {
            left: 2,
            top: 0
        }

        this.init()

    }

    init() {

        this.enemiesElement = document.createElement('img')

        this.enemiesElement.style.position = 'absolute'
        this.enemiesElement.style.width = `${this.enemiesSize.w}px`
        this.enemiesElement.style.height = `${this.enemiesSize.h}px`
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
        this.enemiesElement.src = 'img/edbcf795e1d1c28408b3a386db91db9c.png'


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














