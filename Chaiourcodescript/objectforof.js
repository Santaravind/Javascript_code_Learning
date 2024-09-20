// const myObj={
//     'game1':'NFS',
//     'game2' :'Spiderman'
// }
// // for (const [key,value] of myObj) {
// //     console.log(key,':-', value)
// // }

// const myObj1={
//     js:'jacascript',
//     cpp:'C++',
//     swift:"ruby",
//     rd:"rudy"
// }
// for (const key in myObj1) {
//     //console.log(key);
//     console.log(`${key} shortcut is for ${myObj1[key]} `)
// }

// const pro=["js","py","rd","java","cpp"];

// for (const key in pro ) {
//    console.log(pro[key]);
// }
// const map =new Map();
// map.set('in',"India")
// map.set('US',"united stated of america")
// map.set('Fr',"France")

// for (const key in map) {
//     console.log(key);
// }

const coding=["js","py","rb","cpp"];

// coding.forEach(function (val){
// console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme);

coding.forEach((item,index,arr)=> {
 console.log(item,index ,arr);
})

const code=[
    {
     lang:"java",
     langfile:"java"
    },
    {  
        lang:"python",
        langfile:"py"
    },
    {
        lang:"javascript",
        langfile:"js"
    }
];

code.forEach((item)=>{
     
    console.log(item.lang);
})



