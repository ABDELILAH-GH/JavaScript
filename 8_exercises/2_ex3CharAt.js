// on a une chaine contenu une phrase.cree un tableau qui contient le 1ere 
// caractere de chaque mot de cette chaine.
//Ex: ch "AVIS TRES IMPORTANT" -> t:["A","T","I"]
const ch = "AVIS TRES IMPORTANT";

// Diviser la chaîne en mots et créer un tableau avec le premier caractère de chaque mot


// const t = ch.split(' ').map(mot => mot[0]);
const t = ch.split(' ').map(mot => mot.charAt(0))
console.log(t);

// charAt(0) renvoie le premier caractère d'une chaîne.
// Les index commencent à 0, donc charAt(1) donnerait le deuxième caractère.
// Si l'index est invalide, une chaîne vide est retournée.

