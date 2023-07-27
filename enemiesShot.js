class Enemieshot {
    constructor(gameScreen, enemiesPos, enemiesSize) {

        this.gameScreen = gameScreen;
        this.enemiesPos = enemiesPos;
        this.enemiesSize = enemiesSize;



        //Posicion que inicia la bala

        this.shotPos = {
            left: this.enemiesPos.left + this.enemiesSize.w / 2,
            top: this.enemiesPos.top + this.enemiesSize.h
        }

        //Velocidad en la que baja la bala
        this.shotVel = {
            top: 2,


        }

        //Tamaño de la bala
        this.shotSize = {
            w: 15,
            h: 40
        }

        //invocador que conecta el juego
        this.init()

    }


    //style del shot
    init() {
        this.enemiesShotElement = document.createElement('img')

        this.enemiesShotElement.style.position = "absolute"
        this.enemiesShotElement.src = 'img/8c8b1d81151796e.png'
        this.enemiesShotElement.style.width = `${this.shotSize.w}px`
        this.enemiesShotElement.style.height = `${this.shotSize.h}px`
        this.enemiesShotElement.style.left = `${this.shotPos.left}px`
        this.enemiesShotElement.style.top = `${this.shotPos.top}px`

        this.gameScreen.appendChild(this.enemiesShotElement)
    }


    //Direccion de la bala
    shotMove() {
        this.shotPos.top += this.shotVel.top;//el top es 0 en la parte superior de la pantalla
        this.updatePosition()
    }


    //donde comienza a disparar la bala(en el centro de la plataforma)
    updatePosition() {
        this.enemiesShotElement.style.top = `${this.shotPos.top}px`
        this.enemiesShotElement.style.left = `${this.shotPos.left}px`

    }
}

