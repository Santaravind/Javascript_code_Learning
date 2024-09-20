//for of
const myArray=[3423,34,3,2,567,7,5,756,78,54,];

for (const s of myArray) {
    console.log(s);
}

const greeting ="hellow world!"

for (const greet of greeting) {
    console.log(`Each char is ${greet}`)
}

//Maps 

const map =new Map();
map.set('in',"India")
map.set('US',"united stated of america")
map.set('Fr',"France")

console.log(map);

for (const [key, value] of map) {
    console.log(key,':-' ,value)
}



