/*
let mot = prompt("Veuillez saisir un mot");
console.log(mot);
alert(typeof(mot));
*/

/*
if(typeof(mot) != "string") {
    alert("Mauvaise saisie !")
}
mot = 3.0;
alert(typeof(mot));

if(typeof(mot) != "string") {
    alert("Mauvaise saisie !");
}

var array = new Array("voiture", 3, "Bonjour");
var array2 = ["toto", "lolo", 3.5];

array[3] = "33";
array2.push("lili");
array.push("lolo");

alert(array[1]);
alert(array2[3]);

array.shift();
alert(array);

array2.pop();
alert(array2);

var monchien3 = {
    nom: "minet",
    prenom: "jaune",
}
alert(monchien3.nom);
monchien3["age"] = 49;

for(let i = 0; i < array2.length; i++) {
    alert("Valeur de la case " + i + " : " + array2[i]);
}

for(let cle in monchien3) {
    alert(cle);
}
*/

function focusField(field) {
    if(field.value !== "") {
        field = "";
    }
    field.style.backgroundColor = "rgba(255, 255, 0, .9)";
}

function champBlur(field) {
    // field.style.backgroundColor = field.value !== "" ? "green" : "red";

    if(field.value !== "") {
        field.style.backgroundColor = "rgba(0, 255, 0, .7)";
    } else {
        field.style.backgroundColor = "rgba(255, 0, 0, .7)";
    }
}

function modifyText() {
    const text = document.getElementById("text");
    alert(text.innerText);
    text.innerText = "...";
}

function modifyColor() {
    const pTags = document.getElementsByTagName('p');
    for(let i = 0; i < pTags.length; i++) {
        pTags[i].style.color = "red";
    }
}