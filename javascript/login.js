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
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
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


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Le champ ne peut être vide');
    } else if (!isEmailValid(email)) {
        showError(emailEl, "L'adresse mail n'est pas valide")
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
    } else {
        showSuccess(passwordEl);
        valid = true;
    } return valid;
};


form.addEventListener('submit', function (e) {

    // utilisation du prevent
    e.preventDefault();    
    let x = emailEl.value;
    let y = passwordEl.value;
    let a = localStorage.getItem("identifiant");
    let b = localStorage.getItem("mdp");
    //validation des champs 
    let isEmailValid = checkEmail();
    let isPasswordValid = checkPassword();
    let isFormValid = 
        isEmailValid &&
        isPasswordValid ;

    // Soumettre le formulaire
    if (isFormValid == false) {
        e.preventDefault();
        alert("L'envoie a échoué") 
    } else if (x !== a && y == b) {
        e.preventDefault();
        alert("L'envoie a échoué")
        showError(emailEl, "L'adresse mail n'existe pas dans la base de données")
    } else if (x == a && y !== b) {
        e.preventDefault();
        alert("L'envoie a échoué")
        showError(passwordEl, "Le mot de passe ne correspond pas à l'identifiant")    
    } else if (x == a && y == b)    {
        alert("Vous êtes désormais connecté !");
        window.location.href="accueil.html";
        localStorage.setItem("protec",emailEl.value);
    }

});