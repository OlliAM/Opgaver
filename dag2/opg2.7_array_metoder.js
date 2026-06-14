let array = [-1000, -250, -42, -7, -1,
  0, 0.5, 1, 3.14, 7,
  15, 42, 99, 250, 1000,
  5000, 12345, 99999];

array.max = function () {
    let max = -Infinity
    for(num of this) {
        if(num > max) max = num;
    }
    return max;
}

array.contains = function (element) {
    let i = 0;
    let found = false;
    while(!found && i < this.length) {
        found = this[i] === element;
        i++;
    }
    return found;
}

array.sum = function () {
    let sum = 0;
    for(num of this) sum += num;
    return sum;
}

  console.log(array.max());
  console.log(array.sum());
  console.log(array.contains(42));