const input=document.getElementById("wordtype");
const container=document.querySelector(".container");

const generate=(n)=>{
    const letters="abcdefghijklmnop";
    let text="";

    for(let i=0;i<n;++i){
        const ran =(Math.random()*15).toFixed(0);
        text += letters[ran];
        console.log(ran);
    }
    return text;
    // return (Math.random()*10).toFixed(0);
}
console.log(generate(9));

let wordtype;
const generatepara = () => {
      wordtype = Number(input.value);

     
     const para = document.createElement("p");
     let eord="";
     for(let i=0 ; i<wordtype; ++i){
        const random =(Math.random()*15).toFixed(0);
        eord += generate(random);
        eord +=" ";

     }
    console.log(eord)

    para.setAttribute("class", "paras");
    para.innerText = eord;
    container.prepend(para);
    
}