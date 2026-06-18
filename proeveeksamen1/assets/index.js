document.querySelectorAll('.kunde').forEach(kunde => kunde.addEventListener('click', async (event) => {
    event.stopPropagation()
    const nr = event.currentTarget.id
    const result = await fetch(`/${nr}`)
    const person = await result.json()

    const valgteKunde = document.querySelector('#valgteKunde')
    valgteKunde.textContent = `Navn: ${person.navn} - Adresse: ${person.adresse}`
}))