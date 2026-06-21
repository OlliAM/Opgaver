const array = [{ name: 'jim', kast: [1, 2, 3] }, { name: 'clerk', kast: [1, 1, 1] }, { name: 'arthur', kast: [6, 6, 6] }, { name: 'arthur', kast: [1, 3, 5] }]
const arrayString = '[{"name":"jim","kast":[1,2,3]},{"name":"clerk","kast":[1,1,1]},{"name":"arthur","kast":[6,6,6]},{"name":"arthur","kast":[1,3,5]}]'


function kast(navn, array) {
    return array.filter(kast => kast.name === navn)
}

console.log(kast('arthur', array))

function størst(array) {
    return array.map(element => element.kast.reduce((højest, terningeKast) => terningeKast > højest ? terningeKast : højest))
}

console.log(størst(array))


const jsonArray = JSON.stringify(array)
console.log(jsonArray)

function terning(json) {
    const array = JSON.parse(json)
    return array.reduce((acc, ele) => acc.concat(ele.kast), [])
}

console.log(terning(jsonArray))

function navne(json) {
    const array = JSON.parse(json)
    return array
        .map(ele => ele.name)
        .reduce((acc, ele) => {
        if (!acc.includes(ele)) acc.push(ele)
        return acc}
        ,[])
}

console.log(navne(jsonArray))