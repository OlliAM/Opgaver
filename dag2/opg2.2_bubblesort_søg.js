let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

bubbleSort(list)
console.log(list.toString()); // => 0,1,2,4,7,8,9,13,16
console.log(`index for 2: ${søgIList(list, 2)}`);
console.log(`index for 13: ${søgIList(list, 13)}`);
console.log(`index for 5: ${søgIList(list, 5)}`);

function bubbleSort(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(j,j+1);
            }
        }
    }

    function swap(i,j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function søgIList(array, target) {
    
    let index = -1;
    let left = 0;
    let right = array.length - 1;
    let middle;

    while (index == -1 && left <= right) {
        middle = Math.trunc((left + right) / 2);
        let current = array[middle];

        if (current == target) {
            index = middle;
        }

        else if (current > target) {
            right = middle - 1;
        }

        else {
            left = middle + 1;
        }
    }
    return index;
}