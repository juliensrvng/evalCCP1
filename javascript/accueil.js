let usernameEl = localStorage.getItem("username");
let pseudo = localStorage.getItem("pseudo");
let prenom = localStorage.getItem("prenom");
let username = document.getElementById("username");

let date = document.getElementById("date");
let heure = document.getElementById("heure");
let day = new Date();

username.innerHTML = prenom +" "+'"'+pseudo+'"'+" "+usernameEl;
date.innerHTML = day.toLocaleDateString();
heure.innerHTML = localStorage.getItem("heureCo");

//bouton logout
let logOut = document.getElementById("logOut");
logOut.addEventListener("click", function (e) {
    alert("Vous vous êtes déconnecté");
    localStorage.removeItem("protec");
});

//protection login
window.onload = (e) => {
    if (localStorage.getItem("protec") == null) {
        alert("Vous devez être connecté pour accéder à cette page");
        window.location.href="login.html";
        localStorage.setItem("heureCo", day.toLocaleTimeString())
    }
}