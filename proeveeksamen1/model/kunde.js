class Kunde {
    constructor(navn, adresse) {
        this.navn = navn
        this.adresse = adresse
        this.nr = Kunde.nr++
    }
    static nr = 1
}

export default Kunde