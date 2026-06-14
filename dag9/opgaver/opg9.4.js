class Person {
    constructor(name) {
        this.name = name
        this.gruppe = null
    }

    setGruppe(gruppe) {
        if (gruppe === null) {
            if(this.gruppe) {
                this.gruppe.remove(this)
            }
            this.gruppe = null
        }
        else if(this.gruppe !== gruppe) {
            this.gruppe = gruppe
            gruppe.add(this)
        }
    }
}

class Gruppe {
    constructor() {
        this.personArray = []
    }
    add(person) {
        if(!this.personArray.includes(person)) {
            this.personArray.push(person)
            person.setGruppe(this)
        }
    }

    remove(person) {
        const indexOfPerson = this.personArray.indexOf(person)
        if(indexOfPerson !== -1) {
            this.personArray.splice(indexOfPerson, 1)
            person.setGruppe(null)
        }
    }
}

let p1 = new Person("Mikkel")
let p2 = new Person("Anders")
let p3 = new Person("Camilla")

// Opret en gruppe
let gruppe1 = new Gruppe()

// Tilføj personer til gruppen
gruppe1.add(p1)
gruppe1.add(p2)

// Brug setGruppe på en person
p3.setGruppe(gruppe1)

// Tjek resultatet
console.log(gruppe1.personArray.map(p => p.name)) // ["Mikkel", "Anders", "Camilla"]

// Fjern en person
gruppe1.remove(p2)
console.log(gruppe1.personArray.map(p => p.name)) // ["Mikkel", "Camilla"]