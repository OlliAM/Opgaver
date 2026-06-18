class Bil {
    constructor(bilmaerke, pris) {
        this.bilmaerke = bilmaerke
        this.pris = pris
        if(!bilmaerke || typeof bilmaerke !== 'string') throw new Error("ugyldigt bilmaerke")
        if(!pris || typeof pris !== 'number') throw new Error("ugyldig pris")
        Bil.#antal++

    }
    #bilmaerke
    #pris
    static #antal = 0
    toString() {return `Bil - Bilmærke: ${this.#bilmaerke}, Pris: ${this.#pris}`}
    static getAntal() {return Bil.#antal}
    getBilmaerke() {return this.#bilmaerke}
    getPris() {return this.#pris}
}

class Varevogn extends Bil {
    constructor(bilmaerke, pris, lasteevne) {
        if(!lasteevne || typeof lasteevne !== 'number') throw new Error("ugyldig lasteevne")
        super(bilmaerke, pris)
        this.lasteevne = lasteevne

    }
    toString() {return `Varevogn - Bilmærke: ${this.getBilmaerke()}, Pris: ${this.getPris()}, Lasteevne: ${this.lasteevne}`}
}
const bil = new Varevogn("bil", 1, 1)

const biler = [new Bil('Toyota', 10), new Bil('Suzuki', 20), new Bil('Bitchbil', 50), new Varevogn('KIA', 35, 1000), new Varevogn('Stærkvogn', 100, 10000)]

console.log(biler)