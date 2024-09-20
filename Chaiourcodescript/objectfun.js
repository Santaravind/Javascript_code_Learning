
// // const mySym=Symbol("key1");

// // const Jsuser={
// //     name:"sant",
// //     "isFull":"Aravind sant",
// //     [mySym]:"mykey1",//for refering the symbol
// //     age:13,
// //     email:"user@gmail.com",
// //     password:"45353"
// //  }

// // //  console.log(Jsuser.email);
// // //  console.log(Jsuser["email"]);
// // //  console.log(Jsuser["isFull"]);
// // //  console.log(Jsuser[mySym]);

// //  Jsuser.email="hites@google.com"
// //  console.log(Jsuser.email);
// //  //Object.freeze(Jsuser)
// //  Jsuser.email="hites@microsft.com"
// //  console.log(Jsuser);
 


// //  //function 



// //  Jsuser.greeting=function(){
// //     console.log("Hello JS user");
// //  }
// //  Jsuser.greetingTwo=function(){
// //     console.log(`Hello JS user,${this.name}`);
// //  }

// //  console.log(Jsuser.greeting()); 
// //  console.log(Jsuser.greetingTwo()); 
 
//  const tinderUser=new Object();

//  //console.log(tinderUser);

//  const tinderuser={};

//  tinderuser.id="12avs"
//  tinderuser.name="summy"
//  tinderuser.isLoggedIn=false;

//  //console.log(tinderuser)

//  const regularUser={
//     email:"sant@google.com",
//     fullname:{
//         userfullname:{
//             firstname:"Sant",
//             lastname:"Singh"
//         }
//     }
//  }

//  //console.log(regularUser.fullname)
//  //console.log(regularUser.fullname.userfullname.firstname)

//  const obj1={
//     1:"a",
//     2:"b"
//  }
//  const obj2={
//     4:"a",
//     22:"b"
//  }

//  const obj3={obj1,obj2}
//  const obj4=Object.assign({},obj1,obj2)
//  console.log(obj4);

const course={
   coursename:"js in hindi",
   price:"999",
   courseInstructor:"hitesh"
}

// /const{courseInstructor}=course
// /console.log(courseInstructor)

const {courseInstructor: instructor}=course;
console.log(instructor);


 
 
