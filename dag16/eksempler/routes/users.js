import express from 'express'
import UserController from '../controller/userController.js'

const userRouter = express.Router()

userRouter.post('/adduser', async (request, response) => {
    const {username, password} = request.body
    await UserController.addUser(username, password)
})

userRouter.get('/login', (request, response) => {
    response.render('login', {ok: request.session.ok})
})

userRouter.post('/login', (request, response) => {
    const { username, password } = request.body
    const isValidUser = UserController.validateUser(username, password)
    if (isValidUser.altErGodt) {
        request.session.ok = isValidUser
        response.render('login', {ok: isValidUser})
    }
    else {
        response.render('noAccess', {})
    }
})

userRouter.get('/logout', (request, response) => {
    request.session.destroy(() => {
        response.redirect('/')
    }) 
})

export default userRouter