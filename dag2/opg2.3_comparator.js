let list = ["m", "o", "r", "t", "e", "n", "Er", "gay"];
bubbleSort(list, compare);
console.log(list);
bubbleSort(list, compareLen);
console.log(list);
bubbleSort(list, compareIgnoreCase);
console.log(list);

function bubbleSort(array, sortFunc) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (sortFunc(array[j], array[j+1]) > 0) {
                swap(i,j);
            }
        }
    }

    function swap(i,j) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
    }
}

function compare(s1, s2) {
    if(s1 < s2) return -1;
    if(s1 > s2) return 1;
    return 0;
}

function compareLen(s1, s2) {
    return compare(s1.length, s2.length);
}

function compareIgnoreCase(s1, s2) {
    return compare(s1.toLowerCase(), s2.toLowerCase());
}