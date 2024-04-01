const input=document.getElementById("wordtype");
const container=document.querySelector(".container");

const generate=(n)=>{
    const letters="abcdefghijklmnop";
    let text="";

    for(let i=0;i<n;++i){
        const random =(Math.random()*15).toFixed(0);
        text += letters[random];
        console.log(random);
    }
    return text;
    // return (Math.random()*10).toFixed(0);
}
console.log(generate(9));

const generatepara = () => {
     const wordtype = Number(input.value);

    const para = document.createElement("p");

    para.setAttribute("class", "paras");

    container.prepend("para");
    para.innerText = "sample para";
}