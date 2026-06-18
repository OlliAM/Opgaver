function getTalISyttenTabel() {
    return new Promise(function (resolve, reject) {
        const timeout = Math.trunc((Math.random() * 2001) + 1000)
        setTimeout(udregnTal, timeout)
        function udregnTal() {
            const rand = Math.trunc(Math.random() * 2000)
            if (rand % 17 === 1) resolve(`17 går op i ${rand}`)
            else reject(`17 går ikke op i ${rand}`)
        }
    })
}

getTalISyttenTabel()
    .then(resultat => console.log(resultat))
    .catch(fejl => console.log(fejl))

function prov3Gange() {
    Promise.all([getTalISyttenTabel(), getTalISyttenTabel(), getTalISyttenTabel()])
    .then(resultater => console.log(`17 gik op i alle tal! - ${resultater}`))
    .catch(fejl => console.log(`17 gik ikke op i alle tal :( - ${fejl}`))
}

function provxGange(x) {
    const array = []

    for (let i=0; i < x; i++) {
        array.push(getTalISyttenTabel())
    }

    Promise.all(array)
    .then(resultater => console.log(`17 gik op i alle tal! - ${resultater}`))
    .catch(fejl => console.log(`17 gik ikke op i alle tal :( - ${fejl}`))
}

provxGange(1)
provxGange(10)
