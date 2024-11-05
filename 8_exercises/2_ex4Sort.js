// ---------------------------sort()----------------------------
t = [2,5,10000001,8]
t.sort((a,b)=>a-b)
console.log(t)
// va tier de plus petite a le plus grande



const amis = [
             {id:1,nom:"hassan",age:17},
             {id:2,nom:"ali",age:20},
             {id:3,nom:"abdelilah",age:18},
             {id:4,nom:"hooussam",age:21},
             {id:5,nom:"mouad",age:19},
             ];
let trier = amis.sort((a,b)=>a.age - b.age)
console.log(trier)
// aussi de plus petite a la plus grande