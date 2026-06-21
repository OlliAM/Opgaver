import express from 'express'
import session from 'express-session'
import { db } from './firebase.js'
import { collection, getDocs, addDoc, deleteDoc } from "firebase/firestore";

const app = express()
app.use(express.static('assets'))

app.set('view engine', 'pug')
app.use(express.json())

app.use(session({
    secret: 'MegetHemmeligSecret',
    saveUninitialized: true,
    resave: true
}))

const personer = []

const snapshot = await getDocs(collection(db, 'Personer'))
snapshot.forEach(person => personer.push(person.data()))

app.get('/', (request, response) => {
    if(!request.session.personer) {
        request.session.personer = personer
    }
    response.render('index', {personer})
})

app.post('/tilfojPerson', async (request, response) => {
    const person = request.body
    await addDoc(collection(db, 'Personer'), {
        navn: person.navn,
        adresse: person.adresse
    })
    request.session.personer.push(person)
    response.send(person)
})

app.listen(8000, () => {
  console.log('Server kører på http://localhost:8000')  //Hvis appen ikke vil køre, prøv at ændre port, eller tjek
                                                        //at main i din package.json er app.js
})