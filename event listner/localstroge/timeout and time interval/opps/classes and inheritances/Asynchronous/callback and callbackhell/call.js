// function callback(a,b,c){
//    const result = a + b;

//     c(result);
// }

// function callyou(result){
//     const h1=document.querySelector("h1");
//     h1.innerText = result;
// }
// callback(10,15,callyou);
// callback(50,15,alert);


// const arr=[1,2,3,4,5];
// function calculator(arr=[],callback){
//     const call=[];

//     for(let i=0; i<arr.length;i++){
//         const ans =callback(arr[i]);
//         call.push(ans)
//     }
//     console.log(call);
// }
// // function multiply(a){
// //     return a*10;
// // }

// // function divide(b){
// //    return b/10;
// // }
// calculator(arr,(a)=>(a*10));
// calculator(arr,(a)=>(a/10));


const gamelist=[];
const game={};

const fetchdata=(callback)=>{
    setTimeout((callback) => {
        gamelist.push({
            name:"game1",
            id:"hhhdhdh",
        },
        {
            name:"game2",
            id:"hhfhf",
        },
        {
            name:"game3",
            id:"yueydy",
        }
    );
    console.log("fatchinf gamelist is completed");
    setTimeout((callback) => {
        game.id="hjfhhf",
        game.name="game 5",
        callback();
        // console.log(game);
    }, 2000,callback);
    
        
    }, 4000,callback);
}


// console.log(gamelist);

const gamedisplay=()=>{
    setTimeout(() => {
        
        for (let index = 0; index < gamelist.length; index++) {
            // const element = gamelist[index];

            const p=document.createElement("p");
            p.innerText=gamelist[index].name;
            document.body.append(p);
            
        }
        console.log("fetching data after displaying");
    }, 1000);
}
fetchdata(gamedisplay)
