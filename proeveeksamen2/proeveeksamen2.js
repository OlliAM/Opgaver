const array = [{ name: 'jim', kast: [1, 2, 3] }, { name: 'clerk', kast: [1, 1, 1] }, { name: 'arthur', kast: [6, 6, 6] }, { name: 'arthur', kast: [1, 3, 5] }]

function kast(navn, array) {
    let object = array.filter((user) => user.name.toLowerCase() === navn.toLowerCase())
    return object[0].kast
}

function størst(array) {
    const results = array.map(user => {
        return user.kast.reduce((highest, current) =>
            current > highest ? current : highest
        );
    });
    return results
}

const json = JSON.stringify(array)

function terninger(json) {
    const result = JSON.parse(json)
    let terninger = []
    result.forEach(object => terninger.push(...object.kast))
    return terninger
}

function navne(json) {
    const result = JSON.parse(json)
    let navne = result.map((object) => object.name)
    return unique = navne.reduce((acc, current) => {
        if (acc.includes(current)) {
            return acc;
        }
        return [...acc, current];
    }, []);
}

console.log(kast("clerk", array))
console.log(størst(array))
console.log(terninger(json))
console.log(navne(json))

