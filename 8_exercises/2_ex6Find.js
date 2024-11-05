const amis = [
 {id:1,nom:"hassan",age:17},
 {id:2,nom:"ali",age:20},
 {id:3,nom:"abdelilah",age:18},
 {id:4,nom:"hooussam",age:21},
 {id:5,nom:"mouad",age:19},
 ];
 //----------------------------find()-----------------------------------
 // en utilisant find() pour trouver quelque element 
 const person = amis.find((elt)=> elt.id===2)
 console.log(person)
 // changer the age of the person with id =2
 person.age = 30
 console.log(amis)