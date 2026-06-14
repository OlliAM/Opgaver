document.querySelector('button#btnCreateUser')
.addEventListener('click', async (event) => {
    //Stopper eventet fra at propogere opad
    event.preventDefault()
    const username = document.querySelector('input#username').value
    const password = document.querySelector('input#password').value
    const respons = await fetch('/users/adduser', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: username, password: password})
    })
    const data = await respons.json()
    window.alert(data.message)
})