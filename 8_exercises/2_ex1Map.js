// on a tableau in javaScript t= [agile,laravel,react,php,js] reliser le code js
// pour obtenir le tableau t2:[{id:1,nom:"agile"},{id:2,nom:"react"},......]
// Définir le tableau t
const t = ["agile", "laravel", "react", "php", "js","mySql"];

// Utiliser map() pour créer le tableau t2
const t2 = t.map((elt, index) => ({
    id: index + 1, 
    nom:elt
}));
// on peut aussi just ecrire nom sans :nom car on a deja declarer le nom comme para
console.log(t2);











