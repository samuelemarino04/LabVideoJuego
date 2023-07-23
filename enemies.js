class Enemies {
    constructor(gameScreen, gameSize, positionLeft) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.enemyRows = 3
        this.enemyColumn = 3

        this.enemiesSize = {
            w: 40,
            h: 40

        }

        this.enemiesPos = {
            left: positionLeft,
            top: gameSize.h - gameSize.h + 40,

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

        this.updatePosition()




    }

}














