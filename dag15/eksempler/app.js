
import express from 'express'
import session from 'express-session'
import fs from 'node:fs/promises'
import { json } from 'node:stream/consumers'


class User {
    constructor(username, password) {
        this.username = username
        this.password = password
        this.id = User.id++
    }
    static id = 0
}


const app = express()

let data = await readFile('./data/users.json')
if(!data) {
    data = JSON.stringify([])
}
let users = JSON.parse(data)
User.id = users.reduce((maxId, user) => {
    return user.id > maxId ? user.id : maxId; }, 0) + 1;

app.set('view engine', 'pug')

// MIDDLEWARE
app.use(express.static('assets'))

// Normal POST formulardata gjort tilgængelig

// For at kunne modtage alm data i body skal express kunne læse dette
app.use(express.urlencoded())

//for at kunne modtage JSON i body skal express kunne læse dette
app.use(express.json())

app.use(session({
    secret: 'MikkelsCyndaquilErGigaLort',
    saveUninitialized: true,
    resave: true
}))

// ROUTES
app.get('/login', (request, response) => {
    response.render('login', {ok: request.session.ok})
})

app.post('/adduser', (request, response) => {
    const {username, password} = request.body
    //response.send(`${username} er et dårligt brugernavn`)
    let user = new User(username, password)
    users.push(user)
    writeFile('./data/users.json', JSON.stringify(users))
})

app.post('/login', (request, response) => {
    const { username, password } = request.body
    const isValidUser = validateUser(username, password)
    if (isValidUser.altErGodt) {
        request.session.ok = isValidUser
        response.render('login', {ok: isValidUser})
    }
    else {
        response.render('noAccess', {})
    }
})

app.get('/logout', (request, response) => {
    request.session.destroy(() => {
        response.redirect('/')
    }) 
})

app.get('/', (request, response) => {
    response.render('frontpage', {})
})

app.get('/noget/:id', (request, response) => {
    const id = request.params.id
    if (id === 'rickroll') {
        response.render('frontpage', {})
    }
    else {
        response.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=1s')
    }
})

// Middleware der fanger resterende endpoints
app.use((request, response, next) => {
    response.status(404).send('404 - Jim er asian')
})

app.listen(8000, () => {
    console.log("Arthur stjæler 🚲🚲")
})

function validateUser(username, password) {
    let altErGodt = false;
    let i = 0
    while(!altErGodt && i < users.length) {
        let user = users[i]
        if(user.username === username && user.password === password) {
            altErGodt = true
        }
        i++
    }
    return {altErGodt, username, password}
}

async function writeFile(file, content) {
    try {
        await fs.writeFile(file, content);
    } catch (err) {
        console.log(err);
    }
}

async function readFile(file) {
    let data
    if(await fileExists(file)) {
        data = await fs.readFile(file, {encoding: 'utf-8'})
    }
    return data
}

async function fileExists(file) {
    try {
        await fs.access(file)
        return true
    } catch {
        return false
    }
}

