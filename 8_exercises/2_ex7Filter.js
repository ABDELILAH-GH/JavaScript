const amis = [
 {id:1,nom:"hassan",age:17},
 {id:2,nom:"ali",age:20},
 {id:3,nom:"abdelilah",age:18},
 {id:4,nom:"hooussam",age:21},
 {id:5,nom:"mouad",age:19},
 ];
 const new_table = amis.filter((elt)=>elt.id>=19)
 console.log(new_table)