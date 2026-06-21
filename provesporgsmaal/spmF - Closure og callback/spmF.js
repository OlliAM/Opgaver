function lavGenerator(min, max) {
    return function() {
        return Math.trunc(Math.random() * (max - min + 1)) + min
    }
}

const tilfaeldigAlder = lavGenerator(15, 80)
const tilfaeldigHoejde = lavGenerator(150, 210)

class Person {
    constructor(alder, hoejde) {
        this.alder = alder
        this.hoejde = hoejde
    }
    toString() {return `Persom som er ${this.alder} år gammel og ${this.hoejde} cm høj`}
}

const personer = []

for(let i = 0; i < 30; i++) {
    personer.push(new Person(tilfaeldigAlder(), tilfaeldigHoejde()))
}

console.log(personer)