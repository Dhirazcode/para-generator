const btn=document.querySelector("button")

const printme=(name , income , gender) => {
    console.log(`welcome ${name} .your income is ${income} and your gender is${gender}`);
};
const print=(name , income , gender) => {
    console.log(`welcome ${name} .your income is ${income} and your gender is${gender}`);
};
//timout
const timeout= setTimeout(printme,1000,"dhiraj",2000,"male");

//timeinterval
const timeinterval= setInterval(print,1000,"dhiraj",2000,"male");


btn.addEventListener("click",()=>{
    clearTimeout(timeout);
});

btn.addEventListener("click",()=>{
    clearTimeout(timeinterval);
})