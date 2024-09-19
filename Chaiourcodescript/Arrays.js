//array

const myarr=[3,4,5,3,4,5,3];
const myHeros=["shaktiman","narrager"];
const myNewarr= new Array(1,2,3,4,5)
//console.log(myNewarr[0]);

//Array methods

myNewarr.push(6);
myNewarr.pop();
//console.log(myNewarr);

//myNewarr.unshift(9);
//myNewarr.shift()

// console.log(myNewarr.includes(9))
// console.log(myNewarr.indexOf(3))

// console.log(myNewarr);
// const newarry=myNewarr.join();

// // 
// //slice , splice

// console.log("A",myarr);
// const myn1=myarr.slice(1,3);

const n1=[11,12,13,14,15,16];

const n2=n1.slice(2,6);
console.log( n1);
//console.log( "A",n2);

const n3=n1.splice(1,2);
console.log("B",n3);

