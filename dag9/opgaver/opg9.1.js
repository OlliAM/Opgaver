// specialisering.js
class Person {
    constructor(navn) {
        this.navn = navn;
    }
    static antal = 0;
    toString() { return this.navn; }
    equals(p) {
        return this.constructor === p.constructor && this.navn === p.navn
    }
    static compare(p1, p2) {
        return p1.navn.localeCompare(p2.navn, "da")
    }
}
class Studerende extends Person {
    constructor(navn, id) {
        super(navn);
        this.id = id;
    }
    toString() { return super.toString() + ": " + this.id; };
    equals(s) {
        return super.equals(s) && this.id === s.id
    }
}

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
}

let person = new Person("Viggo");
let studerende = new Studerende("Ida", 123);
let studerende2 = new Studerende("Ida", 123)
let studerende3 = new Studerende("Mewkel", 123)
console.log(person instanceof Person); // => true
console.log(person instanceof Studerende); // => false
console.log(studerende instanceof Person); // => true
console.log(studerende instanceof Studerende); // => true
console.log(Person.antal)
console.log(person.equals(person))
console.log(person.equals(studerende))
console.log(studerende.equals(studerende2))
console.log(studerende.equals(studerende3))

let p1 = new Person("Mikkel")
let p2 = new Person("Anders")
let p3 = new Person("Åge")

let s1 = new Studerende("Camilla", 101)
let s2 = new Studerende("Bo", 102)
let s3 = new Studerende("Øyvind", 103)

let k1 = new Kat("Bella")
let k2 = new Kat("Luna")
let k3 = new Kat("Simba")
let k4 = new Kat("Milo")
let k5 = new Kat("Oliver")
let k6 = new Kat("Nala")
let k7 = new Kat("Åse")
let k8 = new Kat("Ørjan")
let k9 = new Kat("Ægir")

let array = [p1, p2, p3, s1, s2, s3, k1, k2, k3, k4, k5, k6, k7, k8, k9]
console.log('\nUsorteret liste: \n')
array.forEach(p => console.log(p.navn))
array.sort(Person.compare)
console.log('\nSorteret liste: \n')
array.forEach(p => console.log(p.navn))