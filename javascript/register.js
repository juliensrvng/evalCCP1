const usernameEl = document.querySelector('#username');
const prenomEl = document.getElementById("prenom");
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

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
    let re = /^([a-zA-Z]){3,}$/i;
    return re.test(username);
};


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

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'le champ ne peut être vide');
    } else if (!isEmailValid(email)) {
        showError(emailEl, "L'adresse mail ne peut être valide")
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
        showError(passwordEl, 'le mot de passe ne peut être vide');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Le mot de passe doit avoir au moins 8 caractères, il doit comporter une minuscule,une majuscule, un chiffre et un caractère spécial parmi les suivants #+-^[]');
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
        showError(confirmPasswordEl, "Votre mot de passe et la confirmation n'est pas bonne");
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
    let isFormValid = 
        isUsernameValid &&
        isPrenomValid &&
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
        window.location.href="login.html";
    }
});