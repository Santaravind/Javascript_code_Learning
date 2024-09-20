// // const coding=["js","py","rb","cpp"];

// // const value=coding.forEach((item)=>{
// // console.log(item)
// // return item;
// // })

// // console.log(value);

// const myNums=[2,3,4,3,4,3,5,6,0];

// //const newnum=myNums.filter((num)=> num>4)
// const newnum=myNums.filter((num)=>{
//     return num>2
// })
// console.log(newnum);

// const newnum=[8,5,4,3,5,3];
// const val1=newnum.map((num)=> num+10);
// console.log(val1);

// const nen1=[4,5,4,3,2,5,4];
// const val1=nen1
//              .map((num)=> num*10)
//              .map((num)=> num+10)
//              .map((num)=> num*10)
//              .filter((num)=> num>500)

// console.log(val1);

const nem2=[3,4,2];
const value=nem2.reduce((arr,curr)=> arr+curr ,0)

console.log(value);

const shoping=[
    {
        itemname:"mobile",
        price : 456
    },
    {
        itemname:"java course",
        price : 456
    },
    {
        itemname:"data science",
        price : 499
    }
];

const priceTopay= shoping.reduce((acc,item)=> acc+item.price ,0)

console.log(priceTopay);





