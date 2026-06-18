import express from 'express'
import Kunde from './model/kunde.js'
import KundeController from './controller/kundecontroller.js'

const app = express()
app.use(express.static('assets'))

app.set('view engine', 'pug')
app.use(express.json())

app.get('/', (request, response) => {
    response.render('index', {kunder: KundeController.kunder})
})

app.get('/:nr', (request, response) => {
    const nr = Number.parseInt(request.params.nr)
    const kunde = KundeController.getKunde(nr)
    response.json(kunde)
})

app.listen(8000, () => {
  console.log('Server kører på http://localhost:8000') 
})