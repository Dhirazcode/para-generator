const url ="https://catfact.ninja/fact";
const h1 = document.querySelector("h1");

const fetchdata = async ()=>{
   try {
    // throw Error("meri marzi");
    const response = await fetch(url);
//    console.log(response)
   const data= await response.json();
//    console.log(data);
   h1.innerText=data.fact;
   

   } catch (error) {
    console.log(error)
   }
}
fetchdata();