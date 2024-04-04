const btn=document.querySelector("button")

const printme=(name , gender) => {
    const income=Math.floor(Math.random()*10000);
    // console.log(`welcome ${name} .your income is ${income} and your gender is${gender}`);
    console.log(new Date(Date.now()));
};
// const print=(name ,gender) => {
//     const income=Math.floor(Math.random()*10000);
//     console.log(`welcome ${name} .your income is ${income} and your gender is${gender}`);
// };
//timout
// const timeout= setTimeout(printme,1000,"dhiraj","female");

//timeinterval
const timeinterval= setInterval(printme,1000,"dhiraj","male");


// btn.addEventListener("click",()=>{
//     clearTimeout(timeout);
// });

btn.addEventListener("click",()=>{
    clearTimeout(timeinterval);
})