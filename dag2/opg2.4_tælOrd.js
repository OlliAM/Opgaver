let string = "Morten og Morten og Mikkel og Ionas er gay og Morten er ikke sej";
console.log(tælOrd(string));

function tælOrd(string) {
    let ordArray = string.split(' ');
    ordCount = {};
    for(ord of ordArray) {
        if(!ordCount[ord]) ordCount[ord] = 0;
        ordCount[ord]++;
    }
    return ordCount;
}