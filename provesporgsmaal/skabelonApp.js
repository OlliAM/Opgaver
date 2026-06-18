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
    response.send() //HUSK AT SENDE SÅ FETCH IKKE HÆNGER
})

app.listen(8000, () => {
  console.log('Server kører på http://localhost:8000')
})