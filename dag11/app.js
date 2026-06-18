import express from "express"
import figlet from "figlet"

const app = express()

//endpoint -> routes
app.get('/:figletText', (request, response) => {
    let figletText = request.params.figletText
    figletText = figletText.replaceAll('_', ' ')
    figlet.text(figletText, (error, data) => {
        if(error) throw error
        response.write(data)
        response.end()
    })
})

app.get('/', (request, response) => {
    response.redirect('/Mikkel_Er_Gay')
})

app.listen(8000, () => {
    console.log("Jim er asian, Clerk har tism, Mikkel er gay")
})