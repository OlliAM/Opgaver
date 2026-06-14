import express from 'express'
const app = express()

// MIDDLEWARE
app.use(express.static('assets'))

// Normal POST formulardata gjort tilgængelig

// For at kunne modtage alm data i body skal express kunne læse dette
//app.use(express.urlencoded())

//for at kunne modtage JSON i body skal express kunne læse dette
app.use(express.json())

// ROUTES
app.get('/', (request, response) => {
    response.redirect('/frontpage.html')
})

app.post('/api/user/:id', (request, response) => {
    const username = request.body.name
    //response.send(`${username} er et dårligt brugernavn`)
    if (username === 'Jim') {
        response.json({ message: `Hej ${username}`, status: 200 })
    }
    else {
        response.json({message: 'Dit navn er ikke Jim', status: 200})
    }
})

// Middleware der fanger resterende endpoints
app.use((request, response, next) => {
    response.status(404).send('404 - Jim er asian')
    next()
})

app.listen(8000, () => {
    console.log("Arthur stjæler 🚲🚲")
})