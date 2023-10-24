let usernameEl = localStorage.getItem("username");
let prenom = localStorage.getItem("prenom");
let username = document.getElementById("username");

let date = document.getElementById("date");
let heure = document.getElementById("heure");
let day = new Date();

username.innerHTML = prenom +" "+usernameEl;
date.innerHTML = day.toLocaleDateString();
heure.innerHTML = day.toLocaleTimeString();
