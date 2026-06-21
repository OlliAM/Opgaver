let biler = [
    {nummerplade: 12345671, vægt: 1000, mærke: "Toyota", antalHjul: 4},
    {nummerplade: 12345672, vægt: 1100, mærke: "Suzuki", antalHjul: 3},
    {nummerplade: 12345673, vægt: 1200, mærke: "Prius", antalHjul: 9},
    {nummerplade: 12345674, vægt: 1300, mærke: "Honda", antalHjul: 8},
    {nummerplade: 12345675, vægt: 1400, mærke: "KIA", antalHjul: 9  },
    {nummerplade: 12345676, vægt: 1500, mærke: "Opel", antalHjul: 8}
]

let biler8hjul = biler.filter(bil => bil.antalHjul === 8)
console.log(biler8hjul)

let nummerplader = biler.map(bil => bil.nummerplade)
console.log(nummerplader)

let mindstevægt = biler
    .map(bil => bil.vægt)
    .reduce((mindste, vægt) => mindste > vægt ? vægt : mindste)

console.log(mindstevægt)

let flestHjul = biler
    .map(bil => bil.antalHjul)
    .reduce((flest, antalHjul) => flest > antalHjul ? flest : antalHjul)

let bilerMedFlestHjul = biler.filter(bil => bil.antalHjul === flestHjul)
console.log(bilerMedFlestHjul)

const bilerPrAntalHjul = biler.reduce((acc, bil) => {
    const hjul = bil.antalHjul

    if(!acc[hjul]) {
        acc[hjul] = 0
    }

    acc[hjul]++
    return acc
}, {})

console.log(bilerPrAntalHjul)