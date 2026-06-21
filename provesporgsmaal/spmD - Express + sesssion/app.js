import express from 'express'
import session from 'express-session'

const app = express()
app.use(express.static('assets'))

app.set('view engine', 'pug')
app.use(express.json())

app.use(session({
    secret: 'MegetHemmeligSecret',
    saveUninitialized: true,
    resave: true
}))

app.get('/', (request, response) => {
    if(!request.session.produkter) {
        request.session.produkter = []
    }
    response.render('index', {produkter: request.session.produkter})
})

app.post('/tilfojProdukt', (request, response) => {
    const navn = request.body.navn
    const pris = request.body.pris

    request.session.produkter.push({navn, pris})
    response.send()
})

app.listen(8000, () => {
  console.log('Server kører på http://localhost:8000')
})