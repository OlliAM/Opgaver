import express from 'express'
const app = express()

// MIDDLEWARE
app.use(express.static('assets'))


app.listen(8000, () => {
    console.log("Arthur stjæler 🚲🚲")
})