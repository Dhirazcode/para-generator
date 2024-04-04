// const mobilelegendheros={
//     name:"zilong",
//     dialogue:"heros never fate",
//     quote:()=>{
//         console.log("legends never give up");
//     }
// }
// console.log(mobilelegendheros)
// mobilelegendheros.quote();

// factory function
// function hero(a,b,price){
//     const temp = {
//         name: a,
//         language: b,
//         amount: ()=> {
//             console.log(price);
//         },
//         // price:price,        
//     };
//     return temp;
// }
// const mobilelegends=hero("zilog","nepali",32000);
// const mobilelegend=hero("alfa","hindi",32000);

// console.log(mobilelegends);
// console.log(mobilelegend);



//constructor finction
const star=function(name,gender,type) {
    this.username = name;
    this.sex= gender;
    this.role=type;
}
const herosofmlbb = new star("zilong","male","fighter");
const mlbb=new star("darroth","male","fighter");
console.log(mlbb)
console.log(herosofmlbb);