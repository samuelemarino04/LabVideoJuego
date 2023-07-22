class Enemies {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize


        this.enemiesSize = {
            w: 80,
            h: 20
        }

        this.enemiesPos = {
            left: 50,
            top: 100
        }

        this.init()
    }

    init() {
        this.enemiesElement = document.createElement('div')

        this.enemiesElement.style.position = "absolute"
        this.enemiesElement.style.width = `${this.enemiesSize.w}px`
        this.enemiesElement.style.height = `${this.enemiesSize.h}px`
        this.enemiesElement.style.left = `${this.enemiesPos.left}px`
        this.enemiesElement.style.top = `${this.enemiesPos.top}px`
        this.enemiesElement.style.backgroundColor = `yellow`

        this.gameScreen.appendChild(this.enemiesElement)
    }
}