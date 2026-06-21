class Bog {
    constructor(titel, forfatter) {
        if(!titel || !forfatter) throw new Error("Der er ikke givet både titel og forfatter");

        this.titel = titel
        this.forfatter = forfatter
        Bog.antal++
    }

    toString() {return `${this.titel} skrevet af ${this.forfatter}`}
    static antal = 0
}

class Ebog extends Bog {
    constructor(titel, forfatter, filstoerrelse) {
        if(!filstoerrelse) throw new Error("Der er ikke givet nogen filstørrelse");
        super(titel, forfatter)
        this.filstoerrelse = filstoerrelse;
    }

    toString() {return `${super.toString()} med filstørrelse ${this.filstoerrelse}`}
}

const boeger = [new Bog("Ringenes Herre", "JRR Tolkien"), new Bog("Hobitten", "JRR Tolkien"), 
    new Ebog("Fifty shades", "idk", 56), new Bog("Gummitarzan", "Ole Lund Kirkegaard"),
    new Ebog("Wu zhing zhang", "Ji Xing Ping", 1000)]

console.log(boeger)
console.log(Bog.antal)
console.log(Ebog.antal)