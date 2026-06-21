import express from 'express'
import Person from './model/person.js'

const app = express()
app.set('view engine', 'pug')
app.use(express.json())
app.use(express.static('assets'))

const personer = [new Person("Person1", 12345671), new Person("Person1", 12345671), new Person("Person1", 12345671)]

app.get('/', (request, response) => {
    response.render('index', {personer : personer})
})

app.post('/opdaterTelefon', (request, response) => {
    const nytelefon = request.body.nytelefon
    const id = Number.parseInt(request.body.id)
    const person = personer.find(person => person.id === id)
    person.telefon = nytelefon
    response.send(person)
})

app.listen(8000, () => {
  console.log('Server kører på http://localhost:8000')
})