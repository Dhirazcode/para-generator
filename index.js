const input=document.getElementById("wordtype");
const container=document.querySelector(".container");

let numofwords;
const generatepara = () => {
     numofwords = Number(input.value);

    const para = document.createElement("p");

    para.setAttribute("class","paras");
    para.innerText = ("sample para");

    container.prepend("para");
}