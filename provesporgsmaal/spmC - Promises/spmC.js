function hentTemperatur() {
    return new Promise(function (resolve, reject) {
        const randTid = Math.trunc((Math.random() * 1001) + 1000)
        setTimeout(returnerTemperatur, randTid)
        function returnerTemperatur() {
            const randTemp = Math.trunc((Math.random() * 56) - 20)
            resolve(randTemp)
        }
    })
}

function tjekTemperatur(maxForsøg = 5) {
    return new Promise(function (resolve, reject) {
        function tjek(antalForsøg) {
            hentTemperatur()
                .then(temp => {
                    if (temp > 25) resolve({temp, antalForsøg});
                    else if (antalForsøg == maxForsøg) reject(`Ingen temperatur over 25 grader efter ${maxForsøg} forsøg`)
                    else tjek(antalForsøg + 1)
                })
        }
        tjek(1)
    })
}

tjekTemperatur(20)
    .then(result => console.log("Temperatur: " + result.temp + ", antal forsøg: " + result.antalForsøg))
    .catch(error => console.log(error))