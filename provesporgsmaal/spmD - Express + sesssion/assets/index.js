const submit = document.querySelector('#btnSubmit')
submit.addEventListener('click', async (event) => {
    event.preventDefault()
    const navn = document.querySelector('#produktNavn').value
    const pris = document.querySelector('#produktPris').value
    console.log(navn)
    const result = await fetch('/tilfojProdukt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({navn, pris})
    })
    const produktListe = document.querySelector('ul')
    const produkt = document.createElement('li')
    produkt.textContent = `${navn} - ${pris} kr`
    produktListe.appendChild(produkt)
})