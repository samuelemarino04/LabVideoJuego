class Life {
    constructor(bodyScreen, gameScreen, gameSize, lifeLeft) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.bodyScreen = bodyScreen

        this.lifeSize = {
            w: 30,
            h: 30

        }

        this.lifePos = {
            left: lifeLeft,
            top: 0,

        }
        this.init()

    }

    init() {

        this.lifeElement = document.createElement('img')


        this.lifeElement.style.position = 'absolute'
        this.lifeElement.style.width = `${this.lifeSize.w}px`
        this.lifeElement.style.height = `${this.lifeSize.h}px`
        this.lifeElement.style.left = `${this.lifePos.left}px`
        this.lifeElement.style.top = `${this.lifePos.top}px`
        this.lifeElement.src = 'img/download.jpg'

        this.bodyScreen.appendChild(this.lifeElement)



    }
}