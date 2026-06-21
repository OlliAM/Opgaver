document.querySelectorAll('button#btnOpdaterTelefon').forEach(button => {
    button.addEventListener('click', async (event) => {
        event.preventDefault()
        const li = button.parentElement
        const id = li.id
        const nytelefon = li.querySelector('input').value
        const respons = await fetch('/opdaterTelefon', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nytelefon, id })
        })
        const data = await respons.json()
        console.log(data)
        let telefon = li.querySelector('#telefon')
        console.log(telefon.textContent)
        telefon.textContent = data.telefon

    })
})