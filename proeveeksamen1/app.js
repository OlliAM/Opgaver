import express from 'express'
import User from './model/user.js';

const users = []

const response = await fetch('https://randomuser.me/api/?results=5');
const data = await response.json();
data.results.forEach(user => {
  let name = `${user.name.first} ${user.name.last}`
  let address = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}`
  users.push(new User(name, address))
})
const app = express()
app.set('view engine', 'pug')

app.get('/', (request, response) => {
    response.render('index', {users})
})

app.get('/user/:nr', (request, response) => {
    const user = users[request.params.address];
    response.render('user', { user });
})

app.listen(8000, () => {
  console.log('Server kører på http://localhost:8000')
})