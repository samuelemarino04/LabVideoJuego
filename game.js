//creamos la clase Game 
const Game = {

    gameScreen: document.querySelector("#game-screen"),

    //Dimensiones de la pantalla(actualmente ocupa toda la pantalla al usar window)
    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight,

    },
    square: [],
    enemyNum2: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,],
    enemyNum1: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,],
    enemyNum: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,],

    enemiesArray: [],
    enemiesArray1: [],
    enemiesArray2: [],

    spaceEnemy: 55,
    positionLeft: undefined,
    positionTop: undefined,
    keys: { LEFT: 'ArrowLeft', RIGHT: 'ArrowRight', SPACE: 'Space' },

    //Metermos el fondo de juego por ahora solo es un color 
    changeBackground() {
        this.gameScreen.style.backgroundColor = 'black'
    },

    //Llama las funciones implementadas
    init() {
        this.setDimensions()
        this.start()
        this.changeBackground()
    },

    //aplica las dimensiones del juego
    setDimensions() {
        this.gameScreen.style.width = `${this.gameSize.w / 2}px`
        this.gameScreen.style.height = `${this.gameSize.h}px`
    },

    //llama las funciones que aparecen dentro
    start() {
        this.createElements()
        this.setEventListeners()
        this.gameLoop()
        this.setEventListeners1()
    },

    //funcion del movimiento
    setEventListeners() {
        document.onkeydown = event => {
            switch (event.code) {
                case this.keys.LEFT:

                    if (this.square.squarePos.left > window.innerWidth - window.innerWidth) {
                        this.square.moveLeft()

                    }
                    break;

                case this.keys.RIGHT:
                    if (this.square.squarePos.left < window.innerWidth / 2 - this.square.squareSize.w) {
                        this.square.moveRight()
                    }
                    break;
            }
        }
    },
    //invocamos las balas con el evento onkeyup en vez de onkeydwon para que sea mas controlado los disparos
    setEventListeners1() {
        document.onkeyup = event => {
            switch (event.code) {
                case this.keys.SPACE:
                    this.square.shoot()
                    break;
            }
        }
    },

    createElements() {
        this.square = new Square(this.gameScreen, this.gameSize, this.keys, this.squareSize)
        this.enemiesArray = []
        this.enemiesArray1 = []

        for (let i = 0; i < this.enemyNum.length; i++) {
            if (this.enemyNum[i] === 1) {
                this.positionLeft = i * 50
                this.positionTop = 0

                this.enemiesArray.push(new Enemies(this.gameScreen, this.gameSize, this.positionLeft, this.positionTop))

            }

        }


        for (let i = 0; i < this.enemyNum.length; i++) {
            if (this.enemyNum1[i] === 1) {
                this.positionLeft = i * 50
                this.positionTop = this.spaceEnemy

                this.enemiesArray1.push(new Enemies(this.gameScreen, this.gameSize, this.positionLeft, this.positionTop))

            }

        }


        for (let i = 0; i < this.enemyNum.length; i++) {
            if (this.enemyNum2[i] === 1) {
                this.positionLeft = i * 50
                this.positionTop = this.spaceEnemy + this.spaceEnemy

                this.enemiesArray2.push(new Enemies(this.gameScreen, this.gameSize, this.positionLeft, this.positionTop))

            }

        }

    },





    gameLoop() {
        this.drawAll()
        window.requestAnimationFrame(() => this.gameLoop())
    },

    drawAll() {
        this.square.move()
        this.enemiesArray.forEach(enemy => enemy.move())
        this.enemiesArray1.forEach(enemy => enemy.move())
        this.enemiesArray2.forEach(enemy => enemy.move())
    }
}


