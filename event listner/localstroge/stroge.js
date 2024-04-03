const myinput=document.getElementById("myinput");
const btn =document.getElementById("mybtn");


// const mybtn=()=>{
//     alert(myinput.value);
// }

// btn.addEventListener("click",mybtn);



//session stroge
const stroge=()=>{
    sessionStorage.setItem("key1",myinput.value);
}
btn.addEventListener("click",stroge);
alert(sessionStorage.getItem("key1"));
