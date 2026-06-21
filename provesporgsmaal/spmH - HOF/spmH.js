/*
Lav en index.html og en index.js.
Lav et array af musiknumre, hvor hvert nummer har titel, kunstner, genre og varighed i sekunder.
Løs følgende med højere ordens funktioner:
    • Lav et array med alle numre der er kortere end 4 minutter
    • Find den samlede spilletid for alle numre i en given genre
    • Lav et objekt der grupperer numre efter genre
    • Find det længste nummer i arrayet
    • Lav et array med alle unikke kunstnernavne
Redegør for højere ordens funktioner i JavaScript
*/

const musiknumre = [
    { titel: "Bohemian Rhapsody", kunstner: "Queen", genre: "Rock", varighed: 354 },
    { titel: "Blinding Lights", kunstner: "The Weeknd", genre: "Pop", varighed: 200 },
    { titel: "Lose Yourself", kunstner: "Eminem", genre: "Hip-hop", varighed: 326 },
    { titel: "Shape of You", kunstner: "Ed Sheeran", genre: "Pop", varighed: 234 },
    { titel: "Smells Like Teen Spirit", kunstner: "Nirvana", genre: "Rock", varighed: 301 },
    { titel: "God's Plan", kunstner: "Drake", genre: "Hip-hop", varighed: 198 },
    { titel: "Rolling in the Deep", kunstner: "Adele", genre: "Soul", varighed: 228 },
    { titel: "Superstition", kunstner: "Stevie Wonder", genre: "Soul", varighed: 245 },
    { titel: "Bad Guy", kunstner: "Billie Eilish", genre: "Pop", varighed: 194 },
    { titel: "Enter Sandman", kunstner: "Metallica", genre: "Rock", varighed: 332 },
    { titel: "Don't stop me now", kunstner: "Queen", genre: "Rock", varighed: 340}
]

const under4Minutter = musiknumre.filter(e => e.varighed < 240)
console.log('\nSange under 4 minutter:')
console.log(under4Minutter)

const samletVarighedRock = musiknumre
    .filter(e => e.genre == "Rock")
    .reduce((acc, e) => acc + e.varighed, 0)
console.log('\nSamlet varighed af rocknumre:')
console.log(samletVarighedRock)


const numreEfterGenre = musiknumre.reduce((acc, e) => {
    if(!acc[e.genre]) acc[e.genre] = []
    acc[e.genre].push(e)
    return acc
}, {})
console.log('\nNumre efter genre:')
console.log(numreEfterGenre)


const længsteNummer = musiknumre.reduce((acc, e) => e.varighed > acc ? e : acc)
console.log("\nLængste nummer:")
console.log(længsteNummer)

const unikkeArtister = musiknumre.map(e => e.kunstner).reduce((acc, e) => {
    if(!acc.includes(e)) acc.push(e)
    return acc
}, [])
console.log('\nUnikke navne på artister:')
console.log(unikkeArtister)

