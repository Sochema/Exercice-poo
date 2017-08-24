
//CONSTRUCTEUR
function formulaire(titre, phrase, description) {
  this.titre = titre;
  this.phrase = phrase;
  this.description = description;
};

//RECUPERER VALEUR INPUT
var texte = [];
var valeur = document.getElementsByClassName("form-control");

function recuperer() {
  for (i = 0; i < valeur.length; i++) {
    texte[i] = valeur[i].value;
  }
  var x = new formulaire(texte[0], texte[1], texte[2]);
  console.log(x);
  create();
};

function create(){
  var textbox = document.getElementById("carte");
  var box = document.createElement("div");
  box.setAttribute("class", "boite");
  textbox.appendChild(box);
  for (i=0; i<texte.length; i++){
    var paragraphe = document.createElement("p");
    box.appendChild(paragraphe);
    paragraphe.innerHTML = texte[i];
    }
}

function reset(){
  texte = [];
}

console.log(texte);
