//EXERCICE 1

var user = {

  prenom : "John",
  nom : "Rachid" ,
  age : 55,
  pays : "Italie",
  paiement : ["mastercard", "visa", "electron"],
  getPropriete : function (){
    alert(this.prenom);
    alert(this.nom);
    //alert(this.paiement[0].toUpperCase());
  },
 getAnnee : function(){
    alert(2017-this.age);
 }
}

user.getPropriete();
user.getAnnee();

//EXERCICE 1.2

var listes = {
  paysAutorise : ["FRANCE", "CAMBODGE", "MARTINIQUE"],
  moyenPaiement : ["MASTERCARD", "VISA"],
  minAge : 34,

  getAge : function (){
    if(user.age <= listes.minAge){
      alert("Vous n\'avez pas l'âge minimun de" + " " + this.minAge);
    } else {
      alert("Bienvenue");
    }
  },

  getPays : function(){
    user.pays.toUpperCase();
    if (listes.paysAutorise.includes(user.pays)){
      alert("Votre pays" + " " + user.pays + " " + "est dans la liste des pays autorisés.");
    } else {
      alert("Votre pays n'est pas dans la liste des pays autorisés");
    }
    // var x;
    // for (x in listes){
    //   user.pays.toUpperCase();
    //
    //   if (user.pays === listes.paysAutorise[x]){
    //     alert("Votre pays" + " " + user + " " + "est dans la liste des pays autorisés.");
    //   } else {
    //     alert("Votre pays n'est pas dans la liste des pays autorisés");
    //   }
  }
}



listes.getAge();
listes.getPays();
