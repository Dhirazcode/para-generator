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
        // this.defult="defult";~
    }
    get getdata(){
     return this.#b;   
    }
    set SetdataA(a){
        this.#a=a;
    }
    set SetdataB(b){
        this.#b=b;
    }
    hello(){
        console.log("welcome to my page",this.#a);
    };
};
const obj=new myclass(220,500);
// obj.hello();



console.log(obj.getdata);

const seta=obj.SetdataA = 100;
console.log(seta)

const setb=obj.SetdataB = 1000;
console.log(setb);







