//bandeau

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


//récupération localStorage
let sectionTopic = document.getElementById("sectionTopic");
sectionTopic.innerText = localStorage.getItem("section");
let titreSujet = document.getElementById("titreSujet");
titreSujet.innerText = localStorage.getItem("topic");
let heureSujet = document.getElementById("heureSujet");
heureSujet.innerText = localStorage.getItem("heureTopic");
let auteur = document.getElementById("auteur");
auteur.innerText = localStorage.getItem("pseudo");
let messTd = document.getElementById("messTd");
messTd.innerText = localStorage.getItem("messageTopic");

//fonction ajout commentaire
let ajoutTopic = document.getElementById("ajoutTopic");

ajoutTopic.addEventListener("submit", function (e) {
    e.preventDefault();
    let tbodyTopic = document.getElementById("tbodyTopic");
    let tr = document.createElement("tr");
    tbodyTopic.appendChild(tr);
    tr.setAttribute("class", "bg-secondary-subtle text-black")
    let heureComm = document.createElement("td");
    tr.appendChild(heureComm);
    heureComm.setAttribute("colspan", "4");
    let day = new Date ();
    heureComm.innerText = "répondu le "+day.toLocaleDateString()+" à "+day.toLocaleTimeString() ;
    let auteurComm = document.createElement("td");
    tr.appendChild(auteurComm);
    //TR commentaire
    let answerTr = document.createElement("tr");
    tbodyTopic.appendChild(answerTr);
    answerTr.setAttribute("class", "bg-secondary")
    let td = document.createElement("td");
    answerTr.appendChild(td);
    td.innerText = localStorage.getItem("pseudo");
    td.setAttribute("class", "first");
    let answerMess = document.createElement("td");
    answerTr.appendChild(answerMess);
    let messageTd = document.getElementById("messageTd").value;
    answerMess.innerText = messageTd;
    answerMess.setAttribute("colspan", "2");
    answerMess.setAttribute("class", "text-start")
    //remove btn
    let answerTdBtn = document.createElement("td");
    answerTr.appendChild(answerTdBtn)
    let answerBtn = document.createElement("button");
    answerTdBtn.appendChild(answerBtn);
    answerBtn.innerText = "Effacer commentaire";
    answerBtn.setAttribute("id", "answerBtn");
    answerBtn.addEventListener("click", function (e) {
        answerTr.remove();
        tr.remove();
    })

});
//menu responsive

let menuBurger = document.getElementById("menuBurger");

menuBurger.addEventListener("click", function(e) {
    let menuHome = document.getElementById("menuHome");
    menuHome.classList.toggle("on");
    let menuCat1 = document.getElementById("menuCat1");
    menuCat1.classList.toggle("on")
    let menuCat2 = document.getElementById("menuCat2");
    menuCat2.classList.toggle("on");
    let menuCat3 = document.getElementById("menuCat3");
    menuCat3.classList.toggle("on");
})
//bouton logout
let logOut = document.getElementById("logOut");
logOut.addEventListener("click", function (e) {
    alert("Vous vous êtes déconnecté");
    localStorage.removeItem("protec");
});

//verif connexion
window.onload = (e) => {
    if (localStorage.getItem("protec") == null) {
        alert("Vous devez être connecté pour accéder à cette page");
        window.location.href="login.html";
    }
};
