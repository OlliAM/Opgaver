function primtal(grænse) {
    let primtal = [];
    let index = 1;
    for(i = index; i <= grænse; i++) {
        let j = 2;
        let isPrimtal = true;

        while(j < (i ** 0.5) && isPrimtal) {
            if(i % j == 0) {
                isPrimtal = false;
            }
            j++;
        }

        if(isPrimtal) {
            primtal.push(i);
        }
    }
    return primtal;
}

console.log(primtal(200));