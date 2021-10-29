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
        field.value = "";
    }
    field.style.backgroundColor = "rgba(255, 255, 0, .9)";
    field.style.transitionDuration = ".5s";
}

function blurField(field) {
    if(field.value !== "") {
        field.style.backgroundColor = "rgba(0, 255, 0, .7)";
    } else {
        field.style.backgroundColor = "rgba(255, 0, 0, .7)";
    }
    field.style.transitionDuration = ".5s";
}

function modifyText() {
    let text = document.getElementById("text");
    alert(text.innerText);
    text.innerText = "...";
}

function modifyColor() {
    let pTags = document.getElementsByTagName('p');

    for(let i = 0; i < pTags.length; i++) {
        pTags[i].style.color = "red";
    }
}

function isQuitLong() {
    let index = 0;

    if(document.getElementById("identifiant").value.length < 6) {
        showIssue(index);
    } else {
        hideIssue(index);
    }
}

function matchPassword() {
    let index = 2;

    if(document.getElementById("mdp").value !== document.getElementById("confirm-mdp").value) {
        showIssue(index);
    } else {
        hideIssue(index);
    }
}

function isValidEmail() {
    let index = 4;

    if(!document.getElementById("email").value.includes("@")) {
        showIssue(index);
    } else {
        hideIssue(index);
    }
}

function isValidPhoneNumber() {
    let field = document.getElementById("telephone").value;
    let valid = true;
    let index = 5;

    for(let i = 0; i < 10; i++) {
        if(field.includes(i)) {
            valid = false;
        }
    }

    if(!valid && field.length !== 10) {
        showIssue(index);
    } else {
        hideIssue(index);
    }
}

function showIssue(index) {
    const array = document.getElementsByClassName("feedback");
    array[index].style.visibility = "visible";
    array[index].style.height = "30px";
    array[index].style.transitionDuration = ".75s";

    /*
    for(let i = 0; i < array.length; i++) {
        array[i].style.visibility = "visible";
        array[i].style.height = "20px";
    }
    */
}

function hideIssue(index) {
    const array = document.getElementsByClassName("feedback");
    array[index].style.visibility = "hidden";
    array[index].style.height = "0";
    array[index].style.transitionDuration = ".75s";
}

function missingInput() {
    let array = document.getElementsByClassName("input");

    for(let i = 0; i < array.length; i++) {
        if(array[i].value === "") {
            return true;
        }
    }
    return false;
}