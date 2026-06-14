const personer = [
    "mikkel Hansen",

    "Sofie Nielsen",

    "Jonas Larsen",

    "Emma Pedersen"
];
let fakeArray = 154

function compareSort(compare) {
    return function (array) {
        
        return (array != null && typeof array[Symbol.iterator] === 'function') ? [...array].sort(compare) : 
        "Funktion parameter er ikke iterable";
    };
}

function compare(s1, s2) {
    if (s1 < s2) return -1;
    if (s1 > s2) return 1;
    return 0;
}

function compareLen(s1, s2) {
    return compare(s1.length, s2.length);
}

function compareIgnoreCase(s1, s2) {
    return compare(s1.toLowerCase(), s2.toLowerCase());
}

console.log("Liste af personer")
personer.forEach((person) => console.log(person))

console.log("\nSorteret efter navn")
const sortString = compareSort(compare)
sortString(personer).forEach((person) => console.log(person))

console.log("\nSoreteret efter navnlængde")
const sortLen = compareSort(compareLen)
sortLen(personer).forEach((person) => console.log(person))

console.log("\nSorteret med ignoreCase")
const sortIgnoreCase = compareSort(compareIgnoreCase)
sortIgnoreCase(personer).forEach((person) => console.log(person))

console.log("\nFake array")
console.log(compareSort(compare)(fakeArray))