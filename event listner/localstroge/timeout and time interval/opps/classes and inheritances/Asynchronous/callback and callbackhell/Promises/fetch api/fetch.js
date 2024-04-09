const url ="https://catfact.ninja/fact";
const h1 = document.querySelector("h1");
console.log(url)
const fetchdata = ()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>(h1.innerText = data.fact))
    .catch((e)=>console.log(e))
    .finally(()=>console.log("all done"))

};
fetchdata();