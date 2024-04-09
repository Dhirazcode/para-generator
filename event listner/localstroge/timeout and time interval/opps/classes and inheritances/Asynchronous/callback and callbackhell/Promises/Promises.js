// const a=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("promises is fulffilled")
//     }
//     else{
    
//         reject("some technical error")
//     }
// })

// a.then((parameter)=>{

//     console.log(parameter)
// }).catch((error)=>{

//     console.log(error)
// })

const arr=[];

const fetchdata=(arr=[])=>{
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            arr.push({
                name:"dhiraj",
                id:100,
            });
            if(arr.length>0){
                resolve("data is fetched")
            }
            else{
                reject("Due to some technical error")
            }
        }, 4000);
    })
}
fetchdata()
.then((message)=>console.log(message))
.then(()=>console.log("dhiraj"))
.catch((message)=>console.log(message))
.finally(()=>console.log("find another way to completed"))