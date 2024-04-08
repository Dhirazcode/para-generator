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
// class myclass{
//     #a=20;
//     #b=30;
//     constructor(value1,value2){
//         this.#a=value1;
//         this.#b=value2;
//         // this.defult="defult";~
//     }
//     get getdataB(){
//      return this.#b;  
//     //  return this.#a; 
//     }
//     get getdataA(){
//         // return this.#b;  
//         return this.#a; 
//        }
//      SetdataA(a){
//         this.#a=a;
//     }
//      SetdataB(b){
//         this.#b=b;
//     }
//     hello(){
//         console.log("welcome to my page",this.#a);
//     };
// };
// const obj=new myclass(220,500);
// // obj.hello();


// obj.SetdataA("dhi");
// console.log(obj.getdataA);

// obj.SetdataB("dhiraj");

// console.log(obj.getdataB);

// const seta=obj.SetdataA = 100;
// console.log(seta)

// const setb=obj.SetdataB = 1000;
// console.log(setb);

// const calender=new Date();
// console.log(calender);



class mobile{
    #input;
    #output;
    #name;
    
    constructor(input,output,name){
        this.#input=input;
        this.#output=output;
        this.#name=name;   
    }
    print(){
        console.log(this.#input)
        console.log(this.#output);
        console.log(this.#name);
        // console.log(this.charger);

    }
}

class charger extends mobile{
    #charger
    constructor(input,output,name,charger){
        super(input,output,name);
        this.#charger=charger;
    }
    hello(){
        console.log(this.#charger);
    }
}

class price extends mobile{
    #price;
    constructor(input,output,name,charger,price){
        super(input,output,name,charger,price)
        this.#price=price;
    }
    amount(){
        console.log(this.#price);
    }
}

const samrtphone=new mobile(1500,6000,"nokia");
const mobilecharger=new charger(500,200,"android","ctype charger");
const totalcost=new price(500,200,"android","ctype charger",32000);
totalcost.amount();

mobilecharger.hello();
samrtphone.print();





