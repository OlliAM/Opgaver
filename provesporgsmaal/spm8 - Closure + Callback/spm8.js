/* Lav en funktion randomTal, der tager et tal som parameter og returnerer en funktion, der returnerer et 
tilfældigt tal mellem 0 og parameteren.
Lav en anden funktion tilfaeldigAlder som en variabel ved at kalde randomTal med en passende parameter
og gemme resultat-funktionen i variablen.
Lav en klasse Person med attributter Alder og Hoejde.
Lav en funktion LavTilfaeldigePersoner(), der tager to parametre: en funktion, der genererer tilfældige aldre 
og en funktion, der genererer tilfældige højder. Funktionen skal returnere et array med 20 tilfældige
personer ved brug af de to funktioner, der kommer med som parametre.
Test løbende det hele.
Redegør for closure */

function randomTal(tal) {
    return Math.trunc(Math.random() * tal)
}

const tilfaeldigAlder = function tilfaeldigAlder() {
    return randomTal(100)
}

class Person {
    constructor(alder, hoejde) {
        this.alder = alder
        this.hoejde = hoejde
    }
}

function lavTilfaeldigePersoner(alderFunc, hoejdeFunc) {
    const personer = []
    for (let i = 0; i<20; i++) {
        personer.push(new Person(alderFunc(), hoejdeFunc(210)))
    }
    return personer
}

console.log(lavTilfaeldigePersoner(tilfaeldigAlder, randomTal))