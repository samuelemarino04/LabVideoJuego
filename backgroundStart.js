



const backgroundElementStar = document.createElement('div')




backgroundElementStar.style.position = "absolute"
backgroundElementStar.style.display = 'block'
backgroundElementStar.style.width = `${window.innerWidth}px`
backgroundElementStar.style.height = `${window.innerHeight}px`
backgroundElementStar.style.backgroundImage = 'url(./img/IMG_9592.PNG)'
backgroundElementStar.style.backgroundSize = '100% 100%'


document.body.appendChild(backgroundElementStar)

addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'Enter':
            backgroundElementStar.style.display = 'none'
            Game.start()
            break;
    }
})





