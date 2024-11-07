class Person {
   constructor(nom, prenom, age, city) {
      this.nom = nom;
      this.prenom = prenom;
      this.age = age;
      this.city = city;
   }
   afficher(){
      return `Bonjour, je suis ${this.nom} ${this.prenom}, j'ai ${this.age} ans et j'habite à ${this.city}.`;
   }
}

class Etudiant extends Person {
   constructor(nom, prenom, age, city, groupe) {
      super(nom, prenom, age, city);
      this.groupe = groupe;
   }
   afficher() {
      return `${super.afficher()} Je suis dans le groupe ${this.groupe}.`;
   }
}

let etu1 = new Etudiant("el alami", "mouhammed", 19, "casablanca", "A1");
console.log(etu1.afficher());

