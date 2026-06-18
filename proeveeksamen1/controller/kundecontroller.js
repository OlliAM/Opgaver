import Kunde from "../model/kunde.js"

class KundeController {
    static kunder = [
        new Kunde("Mikkel", "Mewinggade"),
        new Kunde("Morten", "Noobgade"),
        new Kunde("Ionas", "Stræbergade (Marokko)"),
        new Kunde("Oliver", "Sejgade")]

    static getKunde(nr) {
        return KundeController.kunder.find(e => e.nr === nr)
    }
}

export default KundeController