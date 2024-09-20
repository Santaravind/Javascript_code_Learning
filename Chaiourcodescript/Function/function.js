

function sayMyName(){
    console.log("h")
    console.log("a")
    console.log("r")
    console.log("i")
    console.log("hr")

}

//sayMyName();

function addTwoNumbers(number1,number2){
    console.log(number1+number2)
}
function addTwoNumbers(number1,number2){
    //    let reuslt=number1+number2
    //    return reuslt 
    return number1+number2;   
}


const reuslt=addTwoNumbers(2,4);
console.log(reuslt);

function loginuserMassage(username){
    return`${username} just logged in`
}

console.log(loginuserMassage("sant"));
console.log(loginuserMassage());

function calculatCardPrise(valu1,valu2, ...num1){
    return num1;
}

//console.log(calculatCardPrise(200,300,400,500));

const user={
    username:"sant",
    price:155
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and prie is ${anyobject.price}`);
}

// handleobject(user);

handleobject({
    username:"sayam",
    price:344
})

const myNewarray=[23,400,244,600];

function arrayUser(getarray){
   return getarray[0];
}

//console.log(arrayUser(myNewarray));
console.log(arrayUser([23 ,45,56,78]));
