//creamos la clase Game 
const Game = {

    gameScreen: document.querySelector("#game-screen"),
    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight,
    },
    square: undefined,
    boss: undefined,
    enemyNum3: [1],
    enemyNum2: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    enemyNum1: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    enemyNum: [2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2],
    enemyTotal: [],


    enemiesArray3: [],
    enemiesArray2: [],
    enemiesArray1: [],
    enemiesArray: [],
    framesCounter: 0,
    bossLife: 20,
    playerLifes: 3,
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


    //dibujamos el enemigo y el movimiento en pantalla,
    drawAll() {
        this.boss.move()
        this.bossCollition()
        this.clearenemyR()
        this.square.move()
        this.playerCollision()
        this.enemiesArray.forEach(enemy => enemy.move())
        this.enemiesArray1.forEach(enemy => enemy.move())
        this.enemiesArray2.forEach(enemy => enemy.move())
        this.enemiesArray3.forEach(enemy => enemy.move())

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
                    console.log('-------->', this.enemyTotal)
                    this.square.shoot()

                    break;
            }
        }
    },

    playerDie() {
        if (playerLifes <= 0) {
            this.gameOver()
        } else if (this.bossLife <= 0) {
            this.gameWon()
        }
    },

    // creacion de enemigo desde un array vacio
    createElements() {

        this.boss = new EnemiesBoss(this.gameScreen, this.gameSize, this.positionLeft, this.positionTop)
        this.square = new Square(this.gameScreen, this.gameSize, this.keys, this.squareSize)

        for (let i = 0; i < this.enemyNum.length; i++) {

            if (this.enemyNum[i] === 1) {
                this.positionLeft = i * 50
                this.positionTop = 0

                this.enemiesArray.push(new Enemies(this.gameScreen, this.gameSize, this.positionLeft, this.positionTop))

            } else if (this.enemyNum[i] === 2) {

                this.positionLeft = i * 50
                this.positionTop = 0

                this.enemiesArray.push(new Enemies2(this.gameScreen, this.gameSize, this.positionLeft, this.positionTop))
            }
        }

        for (let i = 0; i < this.enemyNum1.length; i++) {
            if (this.enemyNum1[i] === 1) {
                this.positionLeft = i * 50
                this.positionTop = this.spaceEnemy

                this.enemiesArray1.push(new Enemies(this.gameScreen, this.gameSize, this.positionLeft, this.positionTop))

            } else if (this.enemyNum1[i] === 2) {

                this.positionLeft = i * 50
                this.positionTop = this.spaceEnemy

                this.enemiesArray1.push(new Enemies2(this.gameScreen, this.gameSize, this.positionLeft, this.positionTop))
            }
        }

        for (let i = 0; i < this.enemyNum2.length; i++) {
            if (this.enemyNum2[i] === 1) {
                this.positionLeft = i * 50
                this.positionTop = this.spaceEnemy + this.spaceEnemy

                this.enemiesArray2.push(new Enemies(this.gameScreen, this.gameSize, this.positionLeft, this.positionTop))

            } else if (this.enemyNum2[i] === 2) {

                this.positionLeft = i * 50
                this.positionTop = this.spaceEnemy + this.spaceEnemy

                this.enemiesArray2.push(new Enemies2(this.gameScreen, this.gameSize, this.positionLeft, this.positionTop))
            }
        }

        for (let i = 0; i < this.enemyNum3; i++) {
            if (this.enemyNum3[i] === 1) {
                this.positionLeft = i
                this.positionTop = this.spaceEnemy + this.spaceEnemy

                this.enemiesArray3.push(new EnemiesR(this.gameScreen, this.gameSize, this.positionLeft, this.positionTop))
            }
        }

        this.enemyTotal = [...this.enemiesArray1, ...this.enemiesArray2, ...this.enemiesArray]


    },


    isEnemyCollision() {
        //collision balas con enemigos

        this.square.shots.forEach((eachShot, index) => {

            this.enemyTotal.forEach((eachEnemy, idx) => {

                if (eachEnemy.enemiesPos.left < eachShot.shotPos.left + eachShot.shotSize.w &&
                    eachEnemy.enemiesPos.left + eachEnemy.enemiesSize.w > eachShot.shotPos.left &&
                    eachEnemy.enemiesPos.top < eachShot.shotPos.top + eachShot.shotSize.h &&
                    eachEnemy.enemiesSize.h + eachEnemy.enemiesPos.top > eachShot.shotPos.top
                ) {

                    eachEnemy.enemyLive = false

                    eachEnemy.enemiesElement.remove()
                    this.enemyTotal.splice(idx, 1)

                    eachShot.shotElement.remove()
                    this.square.shots.splice(index, 1)
                }
            })
        })
    },



    bossCollition() {
        //collision balas con enemigos

        this.square.shots.forEach((eachShot, index) => {

            if (this.boss.enemiesPos.left < eachShot.shotPos.left + eachShot.shotSize.w &&
                this.boss.enemiesPos.left + this.boss.enemiesSize.w > eachShot.shotPos.left &&
                this.boss.enemiesPos.top < eachShot.shotPos.top + eachShot.shotSize.h &&
                this.boss.enemiesSize.h + this.boss.enemiesPos.top > eachShot.shotPos.top
            ) {

                this.bossLife -= 1
                if (this.bossLife === 0) {
                    this.boss.enemiesElement.remove()
                    this.gameWon()
                }


                eachShot.shotElement.remove()
                this.square.shots.splice(index, 1)
            }
        })

    },


    // clearBalas(){

    // }

    playerCollision() {
        //Collision con los enemigos
        this.enemyTotal.forEach((eachEnemy) => {

            if (eachEnemy.enemiesPos.top >= this.square.squarePos.top - this.square.squareSize.h &&
                eachEnemy.enemiesPos.left <= this.square.squarePos.left + this.square.squareSize.w) {
                this.gameOver()
            }
        })
    },

    //Collision con las balas
    gameoverBullet() {

        this.enemiesArray.forEach((eachEnemy) => {

            eachEnemy.enemiesShot.forEach((eachShot, idx) => {
                //console.log("balas de enemigo", eachEnemy.enemiesShot)

                if (this.square.squarePos.left < eachShot.shotPos.left + eachShot.shotSize.w &&
                    this.square.squarePos.left + this.square.squareSize.w > eachShot.shotPos.left &&
                    this.square.squarePos.top < eachShot.shotPos.top - eachShot.shotSize.h &&
                    this.square.squareSize.h - this.square.squarePos.top < eachShot.shotPos.top
                ) {


                    this.playerLifes = this.playerLifes - 1
                    eachShot.enemiesShotElement.remove()

                    eachEnemy.enemiesShot.splice(idx, 1)
                    if (this.playerLifes === 0) {
                        this.gameOver()
                    }
                }


            })

        })

    },

    gameoverBulletGerman() {

        this.enemiesArray3.forEach((eachEnemy) => {

            eachEnemy.enemiesShot.forEach((eachShot, idx) => {
                //console.log("balas de enemigo", eachEnemy.enemiesShot)

                if (this.square.squarePos.left < eachShot.shotPos.left + eachShot.shotSize.w &&
                    this.square.squarePos.left + this.square.squareSize.w > eachShot.shotPos.left &&
                    this.square.squarePos.top < eachShot.shotPos.top - eachShot.shotSize.h &&
                    this.square.squareSize.h - this.square.squarePos.top < eachShot.shotPos.top
                ) {


                    this.playerLifes = this.playerLifes - 1
                    eachShot.enemiesShotElement.remove()

                    eachEnemy.enemiesShot.splice(idx, 1)
                    if (this.playerLifes === 0) {
                        this.gameOver()
                    }
                }


            })

        })

    },




    gameLoop() {

        this.gameoverBulletGerman()
        this.gameoverBullet()
        this.isEnemyCollision()
        this.drawAll()
        window.requestAnimationFrame(() => this.gameLoop())
    },

    gameoverBulletBoos() {

        this.enemiesArray.forEach((eachEnemy) => {

            eachEnemy.enemiesShot.forEach((eachShot, idx) => {
                //console.log("balas de enemigo", eachEnemy.enemiesShot)

                if (this.square.squarePos.left < eachShot.shotPos.left + eachShot.shotSize.w &&
                    this.square.squarePos.left + this.square.squareSize.w > eachShot.shotPos.left &&
                    this.square.squarePos.top < eachShot.shotPos.top - eachShot.shotSize.h &&
                    this.square.squareSize.h - this.square.squarePos.top < eachShot.shotPos.top
                ) {


                    this.playerLifes = this.playerLifes - 1
                    eachShot.enemiesShotElement.remove()

                    eachEnemy.enemiesShot.splice(idx, 1)
                    if (this.playerLifes === 0) {
                        this.gameOver()
                    }
                }


            })

        })

    },

    clearenemyR() {

        this.enemiesArray3.forEach((eachEnemy) => {

            if (eachEnemy.enemiesPos.left > this.gameSize.w) {

                eachEnemy.enemiesElement.remove()
                this.enemiesArray3.pop()
            }
        })
    },

    //alerta de la derrota

    gameOver() {

        console.log('ooooooh sooo sad!!')
    },

    gameWon() {
        console.log('congrants,i am soo happy!!')
    },






}


