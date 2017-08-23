//EXERCICE 1

var user = {

  prenom: "John",
  nom: "Rachid",
  age: 55,
  pays: "Italie".toUpperCase(),
  paiement: ["mastercard", "visa", "electron"],
  getPropriete: function() {
    alert(this.prenom);
    alert(this.nom);
    //alert(this.paiement[0].toUpperCase());
  },
  getAnnee: function() {
    alert(2017 - this.age);
  }
}

user.getPropriete();
user.getAnnee();

//EXERCICE 1.2

var listes = {
  paysAutorise: ["FRANCE", "CAMBODGE", "MARTINIQUE"],
  moyenPaiement: ["MASTERCARD", "VISA"],
  minAge: 34,

  getAge: function() {
    if (user.age <= listes.minAge) {
      alert("Vous n\'avez pas l'âge minimun de" + " " + this.minAge);
    } else {
      alert("Bienvenue");
    }
  },

  getPays: function() {
    if (listes.paysAutorise.includes(user.pays)) {
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
  },

  getPaymentmethod: function() {
    var x;
    for (i = 0; i < user.paiement.length; i++) {
      user.paiement[i].toUpperCase();
      if (user.paiement.includes(listes.moyenPaiement[i])) {
        alert("Votre moyen de paiement" + " " + user.paiement + " " + "est pas autorisé");
        alert("Les seuls moyens de paiement autorisés sont" + " " + liste.moyenPaiement[i]);
      } else {
        alert("Votre moyen de paiement" + " " + user.paiement + " " + "n'est pas autorisé");
        alert("Les seuls moyens de paiement autorisés sont" + " " + liste.moyenPaiPayement[i]);
      }
    }
  }
}

listes.getAge();
listes.getPays();
listes.getPaymentmethod();


//EXERCICE 2

function Combattant(name, attaque, defense, sante) {
  this.name = name;
  this.attaque = attaque;
  this.defense = defense;
  this.sante = sante;
  this.bataille = function(cible) {
    console.log(cible.name + " est en train d'attaquer")
    console.log(this.name + " se fait attaquer")
    this.sante -= cible.attaque;
    this.sante += this.defense;
    console.log(this.name + " sante : " + this.sante);
  }
}

var Guerrier1 = new Combattant("Robocop", 30, 10, 100);
var Guerrier2 = new Combattant("YounesMan", 55, 1, 100);

function Magic(name, attaque, defense, sante, mana) {
  this.name = name;
  this.attaque = attaque;
  this.defense = defense;
  this.sante = sante;
  this.mana = mana;
  this.bataille = function(cible) {
    console.log(cible.name + " est en train d'attaquer")
    console.log(this.name + " se fait attaquer")
    this.sante -= cible.attaque;
    this.sante += this.defense;
    console.log(this.name + " sante : " + this.sante);
  };
  this.soin = function() {
    if (this.mana > 10) {
      this.mana -= 10;
      this.sante += 10;
      console.log(this.name + " mana :" + this.mana);
      console.log(this.name + " sante : " + this.sante);
    } else {
      console.log("error");
    }
  }
}

var Magicien = new Magic("Sylvain", 25, 1, 100, 50);

setInterval(function() {
  while(Magicien.sante !== 0 && Guerrier1.sante !== 0 && Guerrier2.sante !== 0) {
    Magicien.bataille(Guerrier1);
    Magicien.bataille(Guerrier2);
    Guerrier1.bataille(Magicien);
    Guerrier2.bataille(Magicien);
  }
  //alert();
}, 500);

Magicien.soin();



//EXERCICE3
