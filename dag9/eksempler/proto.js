// ES6 class
class Person {
    constructor(name) {
        this.name = name;
    }
    talk() {
        console.log("Hej jeg hedder " + this.name)
    }
}

mikkel = new Person("Mikkel")
mikkel.talk()

// Dinosaur metoden
//constructor funktion
function Dinosaur(name) {
    this.name = name
}

let triceratops = new Dinosaur("Triceratops")
triceratops.kill = function(person) {
    console.log(`${this.name} dræber ikke ${person.name}, og spiser i stedet blade`)
}
let trex = new Dinosaur("Tyrannosaurus Rex")
triceratops.kill(mikkel)

//Dinosaurs prototype er {}
//Men vi kan tilføje til denne prototype
Dinosaur.prototype.kill = function(person) {
    console.log(`${this.name} dræbte ${person.name}`)
}

trex.kill(mikkel)

Object.getPrototypeOf(triceratops).walk = function(person) {
    console.log(this.name + " går på " + person.name)
}

trex.walk(mikkel)