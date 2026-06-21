const vejrObservationer = [
    {
        navn: 'aarhus',
        temperatur: 60,
        luftfugtighed: 5,
        vindstyrke: 200
    },
    {
        navn: 'kobenhavn',
        temperatur: 20,
        luftfugtighed: 1,
        vindstyrke: 1
    },
    {
        navn: 'aalborg',
        temperatur: -5,
        luftfugtighed: 20,
        vindstyrke: 10
    }]

document.querySelector('#knapper').querySelectorAll('button').forEach(button => tilfojEventListener(button))

document.querySelector('#alle').addEventListener('click', (event) => {
    const liste = document.querySelector('ul')
    liste.replaceChildren()
    for(vejrObservation of vejrObservationer) {
        const listeElement = document.createElement('li')
        listeElement.textContent = lavString(vejrObservation)
        liste.appendChild(listeElement)
    }
})

function tilfojEventListener(button) {
    const by = button.classList[0]
    const vejrObservation = vejrObservationer.find(e => e.navn === by)
    button.addEventListener('click', (event) => {
        console.log(event.target)
        const liste = document.querySelector('ul')
        const listeElement = document.createElement('li')
        listeElement.textContent = lavString(vejrObservation)
        liste.replaceChildren(listeElement)
    })
}

function konverterNavn(navn) {
    if(navn === 'aarhus') return 'Aarhus'
    if(navn === 'kobenhavn') return 'Sverige'
    if(navn === 'aalborg') return 'Aalborg'
}

function lavString(vejrObservation) {
    return `
            By: ${konverterNavn(vejrObservation.navn)},
            Temperatur: ${vejrObservation.temperatur}°C, 
            Luftfugtighed: ${vejrObservation.luftfugtighed}%, 
            Vindstyrke: ${vejrObservation.vindstyrke} m/s`
}