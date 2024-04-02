const hello=document.getElementById("hello");
const tagcontainer=document.querySelector(".tags")



const helloworld=()=>{
    if(hello.value===""){
        return null;
    }
    // console.log(hello.value);
    const tag =document.createElement("div");
    tag.innerText=`hello my name is ${hello.value}`;
    tag.setAttribute("class","tag");
    tagcontainer.append(tag);

}