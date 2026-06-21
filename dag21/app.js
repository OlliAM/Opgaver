import express from 'express'
import { getUsers, createUser } from './firestore.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'pug')
app.use(express.static('assets'))
app.use(express.json())

// 1a. Vis form
app.get('/', (req, res) => {
  res.render('form')
})

// 1. Opret user
app.post('/user', async (req, res) => {
  const { username, type } = req.body

  await createUser(username, type)

  res.redirect('/users')
})

// 2. Vis alle brugere
app.get('/users', async (req, res) => {
  const users = await getUsers()
  res.render('users', { users })
})

// start server
app.listen(8000, () => {
  console.log('Server kører på http://localhost:8000')
})