import fs from 'fs/promises'

const array = {"noobs" : ["Søren", "Thomas", "Anders"], "farve" : "blå"}

await fs.writeFile('Noobs.json', JSON.stringify(array))
console.log("noobs er registreret")

const data = await fs.readFile('Noobs.json', 'utf-8')
const noobs = JSON.parse(data)
console.log(noobs)
