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


const arr=[1,2,3,4,5];
function calculator(arr=[],callback){
    const call=[];

    for(let i=0; i<arr.length;i++){
        const ans =callback(arr[i]);
        call.push(ans)
    }
    console.log(call);
}
// function multiply(a){
//     return a*10;
// }

// function divide(b){
//    return b/10;
// }
calculator(arr,(a)=>(a*10));
calculator(arr,(a)=>(a/10));


