class Person {
    constructor(navn, telefon) {
        this.navn = navn
        this.telefon = telefon
        this.id = Person.id++
    }
    static id = 1
}

export default Person