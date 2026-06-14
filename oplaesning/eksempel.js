let o = {navn: "mikkel", iq: 20}
let array = {0: o.navn, 1: 20}
let array2 = ["mikkel", 20]
array2[4] = "gay"
array2[99] = "not"
array2.push("not")

console.log(o.navn)
console.log(array[0])
console.log(array2[4])
console.log(array2)
console.log(array2.length)


let a = [1,2,3]
console.log(a)
console.log(...a)

