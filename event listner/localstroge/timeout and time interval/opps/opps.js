// const mobilelegendheros={
//     name:"zilong",
//     dialogue:"heros never fate",
//     quote:()=>{
//         console.log("legends never give up");
//     }
// }
// console.log(mobilelegendheros)
// mobilelegendheros.quote();


function hero(a,b,price){
    const temp = {
        name: a,
        language: b,
        price: ()=> {
            console.log(price);
        },        
    };
    return temp;
}
const mobilelegends=hero("zilog","nepali",32000);
console.log(mobilelegends);