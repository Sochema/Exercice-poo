//EXERCICE 1

var user = {
  prenom : "John",
  nom : "Rachid" ,
  age : 15,
  pays : "France",
  paiement : ["mastercard", "visa", "electron"],
  getPropriete : function (){
    alert(this.prenom);
    alert(this.nom);
    //alert(this.paiement[0].toUpperCase());
  },
 getAnnee : function(){
    alert(2017-this.age);
  }
  alert(user.paiement.toUpperCase());
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
  }

}

listes.getAge();







//for(x in listes) {
//  listes[x].toUpperCase();
//}
