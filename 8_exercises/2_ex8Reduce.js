const amis = [
 {id:1,nom:"hassan",age:17},
 {id:2,nom:"ali",age:20},
 {id:3,nom:"abdelilah",age:18},
 {id:4,nom:"hooussam",age:21},
 {id:5,nom:"mouad",age:19},
 ];
 //----------------------reduce()-----------------------
 //je veux calculer
 let somme = amis.reduce((total,elt)=>total+elt.age,0)
// calculer la moyenne
let moyenne = somme/amis.length
console.log(moyenne)





// filter() : Crée un nouveau tableau qui exclut les valeurs -3 et -1.
// reduce() : Calcule la somme des éléments restants (2 + 5 + 5 + 4 = 16).
const tab = [2, -3, 5, 5, 4, -1];
let sum = tab.reduce((total, elt) => total + elt, 0) // `reduce()` renvoie un nombre
           .filter(valeur => valeur >= 0); // ERREUR : `.filter()` ne peut pas s'appliquer à un nombre

console.log(sum);


// let s = t.reduce((total,x)=>x>=0?total+x:total,0)
// console.log(s)