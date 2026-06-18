document.querySelector('#btnTilfoj').addEventListener('click', async (event) => {
    event.preventDefault()
    const navn = document.querySelector('#navn').value
    const adresse = document.querySelector('#adresse').value

    const response = await fetch('/tilfojPerson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ navn, adresse })
    })
    
    const data = await response.json()
    const liste = document.querySelector('#personListe')
    const person = document.createElement('li')
    person.textContent = `${data.navn} - ${data.adresse}`
    liste.appendChild(person)
})