import express from 'express'
import session from 'express-session'

const app = express()
app.use(express.static('assets'))

app.set('view engine', 'pug') //Sætter din view engine til at anvende Pug
app.use(express.json()) //Sikrer at alle requests autmatisk bliver parset som JSON. Tjekker headeren på requests efter
                        //Content-Type': 'application/json

app.use(session({
    secret: 'MegetHemmeligSecret',
    saveUninitialized: true,
    resave: true
}))

app.get('/', (request, response) => {
    response.send() //HUSK AT GIVE RESPONS SÅ FETCH IKKE HÆNGER
})

app.listen(8000, () => {
  console.log('Server kører på http://localhost:8000')  //Hvis appen ikke vil køre, prøv at ændre port, eller tjek
                                                        //at main i din package.json er app.js
})