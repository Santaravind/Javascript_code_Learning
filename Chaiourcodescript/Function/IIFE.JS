//Immediately Invoke FUNCTION Expressions(IIFE)
//

//named iife
(function chai(){
    console.log(`DB VCONNECTED`);
})();

//unnamed iife
( () =>{
    console.log(`db connected `)
})();

//parameter iife 
( (name) =>{
    console.log(`db connected ${name} `)
})(`sant`);

