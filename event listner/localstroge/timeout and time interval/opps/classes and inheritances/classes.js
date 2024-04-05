// class myclass{
//     a=20;
//     b=30;
//     hello(){
//         console.log("welcome to my page");
//     }
// }
// const obj=new myclass();
// obj.hello();
// console.log(obj)


//private class
class myclass{
    #a=20;
    #b=30;
    constructor(value1,value2){
        this.#a=value1;
        this.#b=value2;
        // this.defult="defult";
    }
    hello(){
        console.log("welcome to my page",this.#a);
    }
}
const obj=new myclass(220,"dhiraj");
obj.hello();
console.log(obj)