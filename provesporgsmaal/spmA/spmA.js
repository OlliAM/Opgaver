const studerendeArray = [
    { navn: "Anders", alder: 25, studieretning: "Datamatiker", karaktergennemsnit: 10 },
    { navn: "Jim", alder: 25, studieretning: "Datamatiker", karaktergennemsnit: 7 },
    { navn: "Oliver", alder: 29, studieretning: "Datalogi", karaktergennemsnit: 12 },
    { navn: "Santiago", alder: 67, studieretning: "Hjemmestuderende", karaktergennemsnit: 0 },
    { navn: "Peter", alder: 52, studieretning: "Matematik", karaktergennemsnit: 13 },
    { navn: "Average Joe", alder: 23, studieretning: "Dansk", karaktergennemsnit: 4 }
]

const datamatiker = studerendeArray.filter(studerende => studerende.studieretning === "Datamatiker")
console.log(datamatiker)

function gennemsnit(array) {
    const total = array
        .map(ele => ele.karaktergennemsnit)
        .reduce((acc, ele) => acc += ele)

    return total / array.length
}

console.log(gennemsnit(studerendeArray))

const top5 = studerendeArray
    .sort((a, b) => b.karaktergennemsnit - a.karaktergennemsnit)
    .slice(0, 5)

console.log(top5)

const storeBogstaver = studerendeArray.map(element => element.navn.toUpperCase())
console.log(storeBogstaver)

const studerendePrStudieretning = studerendeArray
    .map(studerende => studerende.studieretning)
    .reduce((acc, studieretning) => {
        if (!acc[studieretning]) acc[studieretning] = 0
        acc[studieretning]++
        return acc
    }, {})

console.log(studerendePrStudieretning)

