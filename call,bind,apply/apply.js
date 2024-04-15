const obj={
    name:"dhiraj",
    surname:"kushwaha",
    age:45,
    print: function(s){
        console.log(this.name,s)
    },
}
const obj1={
    name:"suraj",
    age:27,

}
obj.print("hero");
obj.print.call(obj1,"sarlahi")
obj.print.apply(obj1 ,["sah"]);
const suraj=obj.print.bind(obj1,"harami");
suraj();