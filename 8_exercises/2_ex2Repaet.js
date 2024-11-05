// on a une chane ch doubler chaque caractere ch = "DEV" ->"DDEEVV"
const mot = "ABDELILAH";

// Doubler chaque caractère
const doubledCh = mot.split('').map(char => char.repeat(2)).join('');

// Afficher le résultat
console.log(doubledCh);


//  Diviser la chaîne en caractères:
// ------------------------------Méthode: ch.split('')-----------------------------
//Divise la chaîne ch en un tableau de caractères individuels. En utilisant une 
// chaîne vide comme argument, chaque caractère devient un élément du tableau.
// Exemple:
// Si ch est "DEV", alors ch.split('') renvoie ['D', 'E', 'V'].

// 2. Doubler chaque caractère:
// ----------------------Méthode: .map(char => char.repeat(2))-----------------------
// Description: Crée un nouveau tableau en appliquant une fonction à chaque caractère du tableau d'origine. La fonction fléchée utilise repeat(2) pour doubler chaque caractère.
// Exemple:
// Pour le tableau ['D', 'E', 'V'], cette fonction produira ['DD', 'EE', 'VV'].

// 3. Combiner les caractères doublés en une chaîne:
// ----------------------------------Méthode: .join('')----------------------------
// Description: Combine tous les éléments du tableau en une seule chaîne. En passant une chaîne vide comme argument, il n'y a pas d'espace ou de caractère ajouté entre les éléments.
// Exemple:
// Pour le tableau ['DD', 'EE', 'VV'], join('') renvoie la chaîne "DDEEVV".











