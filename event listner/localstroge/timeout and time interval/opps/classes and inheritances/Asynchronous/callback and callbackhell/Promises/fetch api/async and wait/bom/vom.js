// navigator.geolocation.getCurrentPosition((e)=>{
//     console.log(e)

// },
// (d)=>console.log(d)
// )

console.log(location.host);
console.log(location.pathname);
console.log(location.hostname);
console.log(location.port);
console.log(location.href)

const myfunc=()=>location.assign("https://youtube.com")
const myfunc1=()=>location.reload(myfunc);