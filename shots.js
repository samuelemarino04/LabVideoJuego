class Shots {


    constructor(gameScreen, squarePos, squareSize) {

        this.gameScreen = gameScreen;
        this.squarePos = squarePos;
        this.squareSize = squareSize;


        //Posicion qu inicia la bala

        this.shotPos = {
            left: this.squarePos.left + this.squareSize.w / 2,
            top: this.squarePos.top - this.squareSize.h
        }

        //Velocidad en la que sube la bala
        this.shotVel = {
            top: 8,
            gravity: 0
        }

        //Tamaño de la bala
        this.shotSize = {
            w: 8,
            h: 20
        }

        //invocador que conecta el juego
        this.init()

    }


    //style del shot
    init() {
        this.shotElement = document.createElement('div')

        this.shotElement.style.position = "absolute"
        this.shotElement.style.backgroundColor = `red`
        this.shotElement.style.width = `${this.shotSize.w}px`
        this.shotElement.style.height = `${this.shotSize.h}px`
        this.shotElement.style.left = `${this.shotPos.left}px`
        this.shotElement.style.top = `${this.shotPos.top}px`

        this.gameScreen.appendChild(this.shotElement)
    }


    //Direccion de la bala
    shotMove() {
        this.shotPos.top -= this.shotVel.top;//el top es 0 en la parte superior de la pantalla
        this.shotPos.top += this.shotVel.gravity;
        this.updatePosition()
    }


    //donde comienza a disparar la bala(en el centro de la plataforma)
    updatePosition() {
        this.shotElement.style.top = `${this.shotPos.top}px`
    }





}