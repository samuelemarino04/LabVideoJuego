class Square {

    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.shots = []

        //Tamaño del player
        this.squareSize = {
            w: 100,
            h: 100
        }
        //Posiciòn inicial del player
        this.squarePos = {
            left: gameSize.w / 5,
            top: gameSize.h - this.squareSize.h

        }
        //Velocidad del player
        this.squareVel = {
            left: 30,
        }



        // Creacion del metodo init
        this.init()

    }


    //Damos forma a la figura y la metemos en un div que creamos dentro del init

    init() {

        this.squareElement = document.createElement('gif')

        this.squareElement.style.position = "absolute"
        this.squareElement.style.width = `${this.squareSize.w}px`
        this.squareElement.style.height = `${this.squareSize.h}px`
        this.squareElement.style.left = `${this.squarePos.left}px`
        this.squareElement.style.backgroundImage = 'url(img/propeller-pepe.gif)';
        this.squareElement.style.backgroundSize = 'cover'



        this.gameScreen.appendChild(this.squareElement)
    }

    //Invocamos dentro de el metodo move la updatePosition
    move() {

        this.updatePosition()
        this.shots.forEach(shot => shot.shotMove())
        this.clearShoot()


    }

    //Es el metodo para mover a la izquierda 
    moveLeft() {
        this.squarePos.left -= this.squareVel.left
    }

    //el metodo para mover a la derecha(pero restando a la proiedad de la izquierda ya que solo usa una propiedad  )
    moveRight() {
        this.squarePos.left += this.squareVel.left
    }

    updatePosition() {
        this.squareElement.style.top = `${this.squarePos.top}px`
        this.squareElement.style.left = `${this.squarePos.left}px`
    }



    shoot() {
        this.shots.push(new Shots(this.gameScreen, this.squarePos, this.squareSize));


    }




    clearShoot() {


        this.shots.forEach((shoot, idx) => {


            if (shoot.shotPos.top < 0) {

                shoot.shotElement.remove()
                this.shots.splice(idx, 1)

            }


        })
    }
}

