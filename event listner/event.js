const welcome=document.getElementById("welcome");
const box1=document.getElementById("box1");
const clickme=document.getElementById("clickme");

clickme.addEventListener("click",()=>{
    
    welcome.classList.add("hello");
});

clickme.addEventListener("contextmenu",(e)=>{
    clickme.style.backgroundColor="purple";
    e.preventDefault(); 
})

box1.addEventListener("mouseover",()=>{
    // welcome.remove();
    box1.style.backgroundColor="cyan";
})

welcome.addEventListener("mousemove",()=>{
   box1.style.backgroundColor="white";
})

addEventListener("contextmenu",(e)=>{
    e.preventDefault();
});