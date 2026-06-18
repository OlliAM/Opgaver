document.querySelector('button#btnCreateUser')
    .addEventListener('click', async (event) => {
        event.preventDefault()
        const navn = document.querySelector('input#navn').value
        const adresse = document.querySelector('input#adresse').value
        const respons = await fetch('/addPerson', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ navn, adresse})
        })
        const list = document.querySelector('ul')
        const person = document.createElement('li')
        person.textContent = `${navn} - ${adresse}`
        list.appendChild(person)
    })