//Use Spread Operator with Array
let mountains = ['Everest', 'Fish Tail ', 'Annapurne']
let japanMountains = ['Fuji'];

var allMountains = [...mountains, ...japanMountains];
console.log(allMountains)

//Use Spread Operator with Object
var day = {

    breakfast: 'toast ',
    lunch:'chicken' ,
}

var night = {
    dinner : 'Soup'
}

var picnic = {...day, ...night}

console.log(picnic)

//rest side of the three dots 
 
var rivers = ['Nile' ,'Sea' ,'red Sea']
var [first, ...rest] = rivers ;
console.log(rest)

