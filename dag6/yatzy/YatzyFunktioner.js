let holds = new Array(5).fill(false)
let values = new Array(5).fill(0);
let throwCount = 0;
let frequency;

throwDice(holds)
console.log(values)
console.log(frequency)
console.log(`1: ${sameValuePoints(1)}, 2: ${sameValuePoints(2)}, 3: ${sameValuePoints(3)}, 4: ${sameValuePoints(4)}, 5: ${sameValuePoints(5)}, 6: ${sameValuePoints(6)}`)
console.log(`Highest pair: ${onePairPoints()}`)
console.log(`Highest two pairs: ${twoPairPoints()}`)
console.log(`Highest three alike: ${threeSamePoints()}`)
console.log(`Highest four alike: ${fourSamePoints()}`)
console.log(`Full house: ${fullHousePoints()}`)
console.log(`Small straight: ${smallStraightPoints()}`)
console.log(`Large straight: ${largeStraightPoints()}`)
console.log(`Chance: ${chancePoints()}`)
console.log(`Yatzy: ${yatzyPoints()}`)

//_____________________________________________FUNKTIONER____________________________________________________________________

function throwDice(holds) {
    let roll;
    for (let i = 0; i < values.length; i++) {
        if (!holds[i]) {
            roll = Math.floor(Math.random() * 6) + 1;
            values[i] = roll
        }
    }
    throwCount++;
    frequency = frequencyFunc();
}



function frequencyFunc() {
    let frequency = new Array(7).fill(0);
    for (val of values) {
        frequency[val]++;
    }
    return frequency;
}

function sameValuePoints(value) {
    return value * frequency[value];
}

function onePairPoints() {
    let highest = 0;
    for (let i = 1; i < frequency.length; i++) {
        if (frequency[i] >= 2) {
            highest = i * 2
        }
    }
    return highest
}

function twoPairPoints() {
    let lowestPair = 0;
    let highestPair = 0;

    for (let i = 1; i < frequency.length; i++) {
        if (frequency[i] >= 2) {
            lowest = highestPair;
            highestPair = i * 2;
        }
    }
    return highestPair + lowestPair;
}


function threeSamePoints() {
    let highest = 0;
    for (let i = 1; i < frequency.length; i++) {
        if (frequency[i] >= 3) {
            highest = i * 3
        }
    }
    return highest;
}

function fourSamePoints() {
    let highest = 0;
    for (let i = 1; i < frequency.length; i++) {
        if (frequency[i] >= 4) {
            highest = i * 4
        }
    }
    return highest;
}

function fullHousePoints() {
    const freqCopy = [...frequency];
    let maxThreeSame = threeSamePoints()
    frequency[maxThreeSame / 3] = 0
    let maxPair = onePairPoints()
    frequency = frequencyFunc()
    return (maxThreeSame === 0 || maxPair === 0) ? 0 : (maxThreeSame + maxPair)
}


function smallStraightPoints() {
    let i = 1
    let isStraight = true
    while (i < 6 && isStraight) {
        if (frequency[i] == 0) {
            isStraight = false;
        }
        i++
    }
    return isStraight ? 15 : 0
}

function largeStraightPoints() {
    let i = 2
    let isStraight = true
    while (i < 7 && isStraight) {
        if (frequency[i] == 0) {
            isStraight = false;
        }
        i++
    }
    return isStraight ? 20 : 0
}

function chancePoints() {
    let sum = 0;
    for (val of values) {
        sum += val
    }
    return sum
}

function yatzyPoints() {
    let i = 1
    let yatzy = false
    while (i < frequency.length && !yatzy) {
        if (frequency[i] === 5) {
            yatzy = true
        }
        i++
    }
    return yatzy ? 50 : 0
}

