// Dates

let myDate=new Date();
                       //out put 
// console.log(myDate);// 2024-09-19T03:16:41.089Z
// console.log(myDate.toString());//Thu Sep 19 2024 08:46:41 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString());//2024-09-19T03:16:41.089Z
// console.log(myDate.toUTCString());//Thu, 19 Sep 2024 03:23:25 GMT
// console.log(myDate.toLocaleString())//9/19/2024, 8:54:20 AM
// 

//let myCreatedDate =new Date(2023 ,0,23)
let myCreatedDate =new Date("2023-01-12")
//console.log(myCreatedDate.toDateString())

let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now());//1726717165217mili seconds
// console.log(Date.now()/1000);//1726717199.865
//console.log(Math.floor(Date.now()/1000))//1726717356

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
 newDate.toLocaleString('default',{
    weekday:"long",
    //timeZone:''
 })


