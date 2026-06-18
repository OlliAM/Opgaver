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
    if(!request.session.personer) {
        request.session.personer = []
    }
    response.render('index', {personer: request.session.personer})
})

app.post('/tilfojPerson', (request, response) => {
    const person = request.body
    request.session.personer.push(person)
    response.send(person)
})

app.listen(8000, () => {
  console.log('Server kører på http://localhost:8000')  //Hvis appen ikke vil køre, prøv at ændre port, eller tjek
                                                        //at main i din package.json er app.js
})