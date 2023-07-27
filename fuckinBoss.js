class EnemiesBoss {
    constructor(gameScreen, gameSize, positionLeft, positionTop) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.enemiesShot = [];

        this.enemiesSize = {
            w: 400,
            h: 400

        }

        this.enemiesPos = {
            left: gameSize.w / 9,
            top: -1800,  //gameSize.h - gameSize.h + 40,

        }

        this.enemiesVel = {
            left: 0,
            top: 1
        }
        this.counter = 0
        this.init()

    }

    init() {

        this.enemiesElement = document.createElement('img')

        this.enemiesElement.style.position = 'absolute'
        this.enemiesElement.style.width = `${this.enemiesSize.w}px`
        this.enemiesElement.style.height = `${this.enemiesSize.h}px`
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
        this.enemiesElement.src = 'img/IMG_9576 (1).png'



        this.gameScreen.appendChild(this.enemiesElement)

    }

    move() {

        this.enemiesPos.top += this.enemiesVel.top



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