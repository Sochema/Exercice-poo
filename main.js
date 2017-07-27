var user = {
  prenom : "John",
  nom : "Rachid" ,
  age : 45,
  pays : "France",
  paiement : ["mastercard", "visa", "electron"],
  getPropriete : function (){
    alert(this.prenom);
    alert(this.nom);
  },
 getAnnee : function(){
    alert(2017-this.age);
  }
}


user.getPropriete();
user.getAnnee();
