



const backgroundElementStar = document.createElement('div')




backgroundElementStar.style.position = "absolute"
backgroundElementStar.style.display = 'block'
backgroundElementStar.style.width = `${window.innerWidth}px`
backgroundElementStar.style.height = `${window.innerHeight}px`
backgroundElementStar.style.backgroundImage = 'url(img/Loquetuquiera.PNG)'
backgroundElementStar.style.backgroundSize = '100% 100%'


document.body.appendChild(backgroundElementStar)

addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'Enter':
            document.querySelector('#laVaca').pause()
            backgroundElementStar.style.display = 'none'
            Game.start()
            break;

        case 'KeyV':
            document.querySelector('#laVaca').play()
            break;

    }
})





