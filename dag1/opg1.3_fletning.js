function bubbleSort(list) {
    for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (list[j] > list[j + 1]) {
                let temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }
}

function fletning(list1, list2) {
    bubbleSort(list1);
    bubbleSort(list2);

    let flettetList = [];
    let i1 = 0;
    let i2 = 0;

    while(i1 < list1.length && i2 < list2.length) {
        tal1 = list1[i1];
        tal2 = list2[i2];

        if(tal1 < tal2) {
            flettetList.push(tal1);
            i1++;
        }
        else {
            flettetList.push(tal2);
            i2++;
        }
    }
    
    for(i = i1; i < list1.length; i++) {
        flettetList.push(list1[i]);
    }

    for(i = i2; i < list2.length; i++) {
        flettetList.push(list2[i]);
    }
    
    
    console.log(flettetList)
}

let list1 = [7, 13, 9, 8, 4, 1, 2, 16, 0];
let list2 = [-1, 6, 2, 6, 5, 11, 12, 10];

fletning(list1, list2);