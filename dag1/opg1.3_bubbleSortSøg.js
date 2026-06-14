let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j+1];
            list[j+1] = temp;
        }
    }
}
console.log(list.toString()); // => 0,1,2,4,7,8,9,13,16

function søgIList(target) {
    let index = -1;
    let left = 0;
    let right = list.length -1;
    let middle;

    while (index == -1 && left <= right) {
        middle = Math.trunc((left + right) / 2);
        let current = list[middle];

        if(current == target) {
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

console.log(`index for 2: ${søgIList(2)}`);
console.log(`index for 13: ${søgIList(13)}`);
console.log(`index for 5: ${søgIList(5)}`);