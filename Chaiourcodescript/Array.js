// const dc_heros=["thor", "batman","superman"]
// const mr_heros=["iranman","loki","captan"]

// const new_heros=dc_heros.concat(mr_heros);
// console.log(new_heros);


// const heros=[...dc_heros,...mr_heros]
// console.log(heros);

const another_arr=[1,2,3,[3,5,4],5,[45,5,[34,5,6]]];
 const real_another_arr=another_arr.flat(Infinity );
 console.log(real_another_arr);

 console.log(Array.isArray("Aravind"));
 console.log(Array.from("Aravnd"));

 console.log(Array.from({name:"Aravind"}));//interesting

 const score1=200;
 const score4=200;
 const score13=200;
 const score2=200;
 console.log(Array.of(score1,score13,score2,score4));
 
 
 