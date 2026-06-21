const joke = document.querySelector('#joke')
getJoke('Random', 'https://v2.jokeapi.dev/joke/Any')

document.querySelector('#any').addEventListener('click', async (event) => {
    event.preventDefault()
    getJoke('Random', 'https://v2.jokeapi.dev/joke/Any')
})

document.querySelector('#programming').addEventListener('click', async (event) => {
    event.preventDefault()
    getJoke('Programming', 'https://v2.jokeapi.dev/joke/Programming')
})

document.querySelector('#misc').addEventListener('click', async (event) => {
    event.preventDefault()
    getJoke('Misc', 'https://v2.jokeapi.dev/joke/Misc')
})

document.querySelector('#dark').addEventListener('click', async (event) => {
    event.preventDefault()
    getJoke('Dark', 'https://v2.jokeapi.dev/joke/Dark')
})

document.querySelector('#pun').addEventListener('click', async (event) => {
    event.preventDefault()
    getJoke('Pun', 'https://v2.jokeapi.dev/joke/Pun')
})

async function getJoke(type, url) {
    const response = await fetch(url)
    const data = await response.json()

    let randomJoke
    if(data.type === 'single') {
        randomJoke = data.joke
    }
    else {
        randomJoke = `${data.setup} - ${data.delivery}`
    }

    console.log(randomJoke)

    joke.querySelector('h1').textContent = `${type} joke`
    joke.querySelector('p').textContent = randomJoke
}
