class Life {
    constructor(bodyScreen, gameScreen, gameSize, lifeLeft, lifeTop) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.bodyScreen = bodyScreen

        this.lifeSize = {
            w: 50,
            h: 50

        }

        this.lifePos = {
            left: lifeLeft + 40,
            top: lifeTop,

        }
        this.init()

    }

    init() {

        this.lifeElement = document.createElement('img')


        this.lifeElement.style.position = 'fixed'
        this.lifeElement.style.display = 'flex'



        this.lifeElement.style.width = `${this.lifeSize.w}px`
        this.lifeElement.style.height = `${this.lifeSize.h}px`
        this.lifeElement.style.left = `${this.lifePos.left}px`
        this.lifeElement.style.top = `${this.lifePos.top}px`
        this.lifeElement.style.marginLeft = '25px'

        this.lifeElement.src = 'img/IMG_9596.PNG'

        this.bodyScreen.appendChild(this.lifeElement)



    }
}