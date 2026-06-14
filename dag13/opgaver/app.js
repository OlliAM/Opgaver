import express from "express"
const app = express()

let cars = []

//setup
app.set('view engine', 'pug')

//middleware
app.use(express.static('assets'))
app.use(express.urlencoded())

//routes
app.get('/', (request, response) => {
    response.render('index', { title: 'Mikkels Cyndaquil er røv', cars})
})

app.post('/addcar', (request, response) => {
    const { brand, model } = request.body
    const newCar = new Car(brand, model)
    cars.push(newCar)
    response.redirect('/')
})

app.get('/addcar/:id', (request, response) => {
    const id = parseInt(request.params.id)
    response.render('car', {title: 'Bil ' + id, car: cars[id-1]})
})

//Start
app.listen(8000, () => console.log("Pug opgave er i gang"))

class Car {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
        this.id = Car.id++
    }
    static id = 1
}
