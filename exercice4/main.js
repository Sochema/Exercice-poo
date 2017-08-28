

//REQUETE AJAX
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("body").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "main.json", true);
  xhttp.send();
}









//
// for (var i = 0; i < tableau.length; i++) {
//   tableau[i]
// }
