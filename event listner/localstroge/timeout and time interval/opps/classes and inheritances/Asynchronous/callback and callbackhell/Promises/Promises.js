const a=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("promises is fulffilled")
    }
    else{
    
        reject("some technical error")
    }
})

a.then((parameter)=>{

    console.log(parameter)
}).catch((error)=>{

    console.log(error)
})