let mot = prompt("Veuillez saisir un mot");
console.log(mot);
alert(typeof(mot));

if(typeof(mot) != "string") {
    alert("Mauvaise saisie !")
}
mot = 3.0;
alert(typeof(mot));

if(typeof(mot) != "string") {
    alert("Mauvaise saisie !");
}