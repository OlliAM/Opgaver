const numbers = [
  -1000, -250, -42, -7, -1,
  0, 0.5, 1, 3.14, 7,
  15, 42, 99, 250, 1000,
  5000, 12345, 99999
];

console.log(max(numbers));
console.log(contains(numbers, 42));
console.log(contains(numbers, 43));
console.log(sum(numbers));


function max(array) {
    let max = -Infinity
    for(num of array) {
        if(num > max) max = num;
    }
    return max;
}

function contains(array, element) {
    return array.includes(element);
}

function sum(array) {
    let sum = 0;
    for(let num of array) sum += num;
    return sum;
}