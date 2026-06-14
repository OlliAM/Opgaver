// Asynkron programmering i JS
// Eksempel 1: Promises


fetch('https://randomuser.me/api/?results=2&nat=dk')
.then(response => {
    if (response.status == 200){
        return response.json()
    }
})
.then(data => {
    //console.log(data)
    const results = data.results
    for (let user of results) {
        console.log(`Navn: ${user.name.first} ${user.name.last}`);
    }
})
console.info('Nu går vi i gang. Dette er sidste linie i koden')







// Eksempel 2: async/await


async function fetchData() {
    const response =  await fetch('https://randomuser.me/api/?results=2&nat=dk')
    const data = await response.json()
    const results = data.results
    for (let user of results) {
        console.log(`location: ${user.location.street.name} ${user.location.street.number}`);
    }
}

fetchData()
console.info('Here we go again🧑🏻‍💻')












async function f() {
    return 1
}
// det samme som:
/*
function f() {
    return new Promise.resolve(1)
}

// det her må jeg godt da f() returnerer et Promise
f()
    .then(()=>{console.log("Hurra")})

// men sådan her gør man:
const resultat = await f()
console.log(resultat)

async function f() {
    throw new Error("Woops!")
}

try {
    f()
} catch(error){
    console.log(error)
}
*/
// Terninger:






async function throwDice(){
    return Math.floor(Math.random()*6) + 1
}

const dice = await throwDice()
console.log(dice)

// kast 5 terninger "SAMTIDIG"
const yatzyThrow = await Promise.all([throwDice(), throwDice(), throwDice(), throwDice(), throwDice()])

console.log(yatzyThrow)
