class Enemies2 {
    constructor(gameScreen, gameSize, positionLeft, positionTop) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.enemiesShot = [];

        this.enemiesSize = {
            w: 40,
            h: 40

        }

        this.enemiesPos = {
            left: positionLeft,
            top: positionTop//gameSize.h - gameSize.h + 40,

        }

        this.enemiesVel = {
            left: 3,
            top: 0
        }
        this.counter = 0
        this.init()

    }

    init() {

        this.enemiesElement = document.createElement('div')

        this.enemiesElement.style.position = 'absolute'
        this.enemiesElement.style.width = `${this.enemiesSize.w}px`
        this.enemiesElement.style.height = `${this.enemiesSize.h}px`
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
        this.enemiesElement.style.backgroundColor = `green`


        this.gameScreen.appendChild(this.enemiesElement)

    }

    move() {

        this.enemiesPos.left -= this.enemiesVel.left
        if (this.enemiesPos.left > this.gameSize.w / 2 - this.enemiesSize.w || this.enemiesPos.left < 0) {
            this.enemiesVel.left *= -1
            if (this.enemiesPos.left = this.gameSize.w / 2 - this.enemiesSize.w) {
                this.enemiesPos.top += this.enemiesSize.h
            }

        }

        this.shootMove()
        if (this.counter % 200 === 0) {
            this.shoot()

        }
        if (this.counter > 210) {
            this.counter = 0
        }
        this.counter++


        this.updatePosition()
    }

    updatePosition() {
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
    }

    shootMove() {
        this.updatePosition()
        this.enemiesShot.forEach(shot => shot.shotMove())
        this.clearShoot()

    }

    shoot() {


        this.enemiesShot.push(new Enemieshot(this.gameScreen, this.enemiesPos, this.enemiesSize));



    }



    clearShoot() {


        this.enemiesShot.forEach((shoot, idx) => {

            if (shoot.shotPos.top > this.gameSize.h) {
                shoot.enemiesShotElement.remove()
                this.enemiesShot.splice(idx, 1)
            }

        })

    }




}













