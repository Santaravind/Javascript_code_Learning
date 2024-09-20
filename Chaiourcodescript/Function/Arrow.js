
 const user={
   username:"sant",
   price:99,
 
 welcomeMessage:function(){
    console.log(`${this.username},welcome to welcome to webside`)
 }
 }

//  user.welcomeMessage();
//  user.username="sayam"
//  user.welcomeMessage();

// console.log(this)

//  function chai(){
//     let name="sant";
//     console.log(this.name);
//  }

// chai();

// const chai =function(){
    
//     let name="sant";
//    console.log(this.name);
// }

const chai =() =>{
    let name="sant";
    console.log(this.name);

}

//chai()

// const addTwo = (num1, num2)=> {
  
//      return num1+num2;
// }


const addTwo = (num1, num2)=>(num1+num2);
console.log(addTwo(2,4));