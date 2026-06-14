function Gay(navn) {
    this.navn = navn
}

Gay.prototype.kysDrenge = function () {
    console.log(`${this.navn} kysser drenge`)
};

class Person {
    constructor(navn, alder) {
        this.navn = navn
        this.alder = alder
    }

    introducer() {
        console.log(`Mit navn er ${this.navn} og jeg er ${this.alder} år gammel`)
    }
}

let p1 = {navn : "Morten", alder : 12, introducer() {console.log(`Mit navn er ${this.navn} og jeg er ${this.alder} år gammel`)}}

const p2 = new Person("Morten", 12)

p2.introducer()
p1.introducer()

const g1 = new Gay("Morten")
g1.kysDrenge()