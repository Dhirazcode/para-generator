const myinput=document.getElementById("myinput");
const btn =document.getElementById("mybtn");
const deleteb =document.getElementById("deletebtn");



// const mybtn=()=>{
//     alert(myinput.value);
// }

// btn.addEventListener("click",mybtn);



//session stroge
// const stroge=()=>{
//     sessionStorage.setItem("key1",myinput.value);
//     // sessionStorage.removeItem("key1")
// }
// btn.addEventListener("click",stroge);
// alert(sessionStorage.getItem("key1"));
// deleteb.addEventListener("click",()=>{
//     // sessionStorage.removeItem("key1")
//     sessionStorage.clear();
// })

//local stroge
const stroge=()=>{
    localStorage.setItem(
        "key1", 
        JSON.stringify({name:"dhiraj",surname:"kushwaha"})
        );
    // sessionStorage.removeItem("key1")
};
btn.addEventListener("click",stroge);
// alert(localStorage.getItem("key1"));



deleteb.addEventListener("click",()=>{
    localStorage.removeItem("key1");
    // localStorage.clear();
})


if (localStorage.getItem("key1")){
    console.log(JSON.parse(localStorage.getItem("key1")));
}
