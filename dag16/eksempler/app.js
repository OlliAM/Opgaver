
import express from 'express'
import session from 'express-session'
import UserController from './controller/userController.js'
import userRouter from './routes/users.js'

const app = express()

await UserController.startup()

app.set('view engine', 'pug')

// MIDDLEWARE
app.use(express.static('assets'))

// Normal POST formulardata gjort tilgængelig

// For at kunne modtage alm data i body skal express kunne læse dette
app.use(express.urlencoded())

//for at kunne modtage JSON i body skal express kunne læse dette
app.use(express.json())

app.use(session({
    secret: 'MikkelsCyndaquilErGigaLort',
    saveUninitialized: true,
    resave: true
}))

// ROUTES
app.use('/users', userRouter)

app.get('/', (request, response) => {
    response.render('frontpage', {})
})

app.get('/noget/:id', (request, response) => {
    const id = request.params.id
    if (id === 'rickroll') {
        response.render('frontpage', {})
    }
    else {
        response.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=1s')
    }
})

// Middleware der fanger resterende endpoints
app.use((request, response, next) => {
    response.status(404).send('404 - Jim er asian')
})

app.listen(8000, () => {
    console.log("Arthur stjæler 🚲🚲")
})