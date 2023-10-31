const usernameEl = document.querySelector('#username');
const prenomEl = document.getElementById("prenom");
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const pseudoEl = document.getElementById("pseudo");

const form = document.querySelector('#signup');

// constante pour vérifier si le champ est vide ou non 
const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ?
    false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#\+-\^\[\])(?=.{8,})");
    return re.test(password);
};

const noDigit = (username) => {
    let re = /^([a-zA-Zéè]){3,}$/i;
    return re.test(username);
};

//fonction afficher/cacher mdp
let showMdp = document.getElementById("showMdp");
let hideMdp = document.getElementById("hideMdp");
let mdp = document.getElementById("password");

showMdp.addEventListener("mousedown", function (e) {
    e.preventDefault();
    mdp.setAttribute("type", "text");
    showMdp.classList.toggle("off");
    hideMdp.classList.toggle("off");
});

hideMdp.addEventListener("mousedown", function (e) {
    e.preventDefault();
    mdp.setAttribute("type", "password");
    showMdp.classList.toggle("off");
    hideMdp.classList.toggle("off");
});

let showMdp2 = document.getElementById("showMdp2");
let hideMdp2 = document.getElementById("hideMdp2");
let confirmMdp = document.getElementById("confirm-password");

showMdp2.addEventListener("click", function (e) {
    e.preventDefault();
    confirmMdp.setAttribute("type", "text");
    showMdp2.classList.toggle("off");
    hideMdp2.classList.toggle("off");
});

hideMdp2.addEventListener("click", function (e) {
    e.preventDefault();
    confirmMdp.setAttribute("type", "password");
    showMdp2.classList.toggle("off");
    hideMdp2.classList.toggle("off");
});

const showError = (input, message) => { 
    // reprendre le form-field element 
    const formField = input.parentElement;
    // ajouter la class error et supprimer la class success 
    formField.classList.remove('success');
    formField.classList.add('error');
    // afficher le message d'erreur 
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // reprendre le form-field element 
    const formField = input.parentElement;
    // ajouter la class success et supprimer la class error 
    formField.classList.remove('error');
    formField.classList.add('success');
    // cacher le message d'erreur 
    const error = formField.querySelector('small');
    error.textContent = '';
};

const checkUsername = () => {
    let valid = false;
    const min = 3,
        max = 25;
    const username = usernameEl.value.trim();   
    if (!isRequired(username)) {
        showError(usernameEl, 'Le champ ne peut être vide');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Le nom doit avoir au moins ${min} caractères.`)
    } else if (!noDigit(username)) {
        showError(usernameEl, `Le nom ne doit pas contenir de chiffre.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
}

const checkPrenom = () => {
    let valid = false;
    const min = 3,
        max = 25;

    const prenom = prenomEl.value.trim();

    if (!isRequired(prenom)) {
        showError(prenomEl, 'Le champ ne peut être vide');
    } else if (!isBetween(prenom.length, min, max)) {
        showError(prenomEl, `Le prénom doit avoir au moins ${min} caractères.`)
    } else if (!noDigit(prenom)) {
        showError(prenomEl, `Le prénom ne doit pas contenir de chiffre.`)
    } else {
        showSuccess(prenomEl);
        valid = true;
    }
    return valid;
}

const checkPseudo = () => {
    let valid = false;

    const pseudo = pseudoEl.value.trim();

    if (!isRequired(pseudo)) {
        showError(pseudoEl, 'Le champ ne peut être vide');
    } else if (pseudo == localStorage.getItem("pseudo")) {
        showError(pseudoEl, `Le pseudo est déjà utilisé.`)
    } else {
        showSuccess(pseudoEl);
        valid = true;
    }
    return valid;
}

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Le champ ne peut être vide');
    } else if (!isEmailValid(email)) {
        showError(emailEl, "L'adresse mail ne peut être valide")
    } else if (email == localStorage.getItem("identifiant")) {
        showError(emailEl, "Cette adresse mail est déjà utilisée");
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

//validation du mot de passe 
const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();
    if (!isRequired(password)) {
        showError(passwordEl, 'Le mot de passe ne peut être vide');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Le mot de passe ne remplit pas les conditions ci-dessous');
    } else {
        showSuccess(passwordEl);
        valid = true;
    } return valid;
};

//validation de la confirmation du mot de passe 
const checkConfirmPassword = () => {
    let valid = false;
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();
    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Entrez votre mot de passe');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, "Votre mot de passe et la confirmation ne sont pas identiques");
    } else {
        showSuccess(confirmPasswordEl); valid = true;
    } return valid;
};

form.addEventListener('submit', function (e) {

    // utilisation du prevent
    e.preventDefault();
    //validation des champs 
    let isUsernameValid = checkUsername();
    let isEmailValid = checkEmail();
    let isPasswordValid = checkPassword();
    let isConfirmPasswordValid = checkConfirmPassword();
    let isPrenomValid = checkPrenom();
    let isPseudoValid = checkPseudo();
    let isFormValid = 
        isUsernameValid &&
        isPrenomValid &&
        isPseudoValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;
    // Soumettre le formulaire 
    if (isFormValid == false) {
        e.preventDefault();
        alert("L'envoie a échoué")
    } else {
        alert("Bravo l'envoie du formulaire a été effectué");
        localStorage.setItem("identifiant",emailEl.value);
        localStorage.setItem("mdp",passwordEl.value);
        localStorage.setItem("username",usernameEl.value);
        localStorage.setItem("prenom", prenomEl.value);
        localStorage.setItem("pseudo", pseudoEl.value)
        window.location.href="login.html";
    }
});