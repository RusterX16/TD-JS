conditions = [false, false, false, false];

function focusField(field) {
    /*    if(field.value !== "") {
            field.value = "";
        }*/
    field.style.backgroundColor = "rgba(255, 255, 0, .9)";
    field.style.transitionDuration = "1s";
}

function blurField(field) {
    if(field.value !== "") {
        field.style.backgroundColor = "rgba(0, 255, 0, .7)";
    } else {
        field.style.backgroundColor = "rgba(255, 0, 0, .7)";
    }
    field.style.transitionDuration = "1s";
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
        showIssue(index, 40);
        conditions[index] = false;
    } else {
        hideIssue(index);
        conditions[index] = true;
    }
}

function matchPassword() {
    let index = 2;

    if(document.getElementById("mdp").value !== document.getElementById("confirm-mdp").value) {
        showIssue(index, 40);
        conditions[index - 1] = false;
    } else {
        hideIssue(index);
        conditions[index - 1] = true;
    }
}

function isValidEmail() {
    let field = document.getElementById("email").value;
    let array = field.split('');
    let index = 4;
    let count = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i].includes("@")) {
            count++;
        }
    }

    if(count !== 1) {
        showIssue(index, 20);
        conditions[index - 2] = false;
    } else {
        hideIssue(index);
        conditions[index - 2] = true;
    }
}

function isValidPhoneNumber() {
    let index = 5;

    if(document.getElementById("telephone").value.length !== 10) {
        showIssue(index, 40);
        conditions[index - 2] = false;
    } else {
        hideIssue(index);
        conditions[index - 2] = true;
    }
}

function showIssue(index, height) {
    const array = document.getElementsByClassName("feedback");
    array[index].style.visibility = "visible";
    array[index].style.height = height + 5 + "px";
    array[index].style.transitionDuration = "1s";
}

function hideIssue(index) {
    const array = document.getElementsByClassName("feedback");
    array[index].style.visibility = "hidden";
    array[index].style.height = "0";
    array[index].style.transitionDuration = "1s";
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

function allCorrect() {
    let array = [false, false, false, false];

    for(let i = 0; i < conditions.length; i++) {
        if(conditions[i]) {
            array[i] = true;
        }
    }
    return !array.includes(false);
}