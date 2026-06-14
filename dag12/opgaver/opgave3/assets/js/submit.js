document.querySelector('button#btnCreateUser')
.addEventListener('click', async (event) => {
    //Stopper eventet fra at propogere opad
    event.preventDefault()
    const username = document.querySelector('input#username').value
    const respons = await fetch('/api/user/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: username, name: 'Ole Olsen', email: 'oo@speedway.dk'})
    })
    const data = await respons.json()
    window.alert(data.message)
})