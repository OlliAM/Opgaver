const personListe = document.querySelector('ul')
let valgteElement

const opretPerson = document.querySelector('#opretPerson')
opretPerson.querySelector('#btnOpretPerson').addEventListener('click', (event) => {
    event.preventDefault()
    const fornavn = opretPerson.querySelector('input#fornavn').value
    const efternavn = opretPerson.querySelector('input#efternavn').value
    const person = document.createElement('li')
    person.textContent = `${fornavn} ${efternavn}`
    person.addEventListener('click', goerElementRoed)
    personListe.appendChild(person)
})

function goerElementRoed(event) {
    event.preventDefault()
    const current = event.currentTarget
    if(valgteElement) {
        valgteElement.style.backgroundColor = ''
    }
    current.style.backgroundColor = 'red'
    valgteElement = current
}