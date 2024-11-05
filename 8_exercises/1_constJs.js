// normal function
function doSomthing(){
   console.log("hello world")
}
// doSomthing()// call the function


//arrow function
const Doing = () => {
   console.log("hello abdelilah")
}
// Doing()



//map
const t = [2,5,-2,7,8]
const t2 = t.map(function (elt){
              return 2*elm
           })
for (let i=0;i<t.length;i++){
 t2.push[2*t[i]]
}
//map whith arrow function
const t3 = t.map((elm)=>2*elt)
// on peut as doubler le 3eme element
const t4 = t.map((elt,ind)=>{
       if(ind!=2){
        return 2*elt
       }else{
        return elt
       }
})
//ou
let t5 = t.map((elt,ind)=>ind!=2?2*elt:elt)