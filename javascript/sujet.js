let usernameEl = localStorage.getItem("username");
let prenom = localStorage.getItem("prenom");
let username = document.getElementById("username");

let date = document.getElementById("date");
let heure = document.getElementById("heure");
let day = new Date();

username.innerHTML = prenom + " " + usernameEl;
date.innerHTML = day.toLocaleDateString();
heure.innerHTML = day.toLocaleTimeString();

let sectionTopic = document.getElementById("sectionTopic");
sectionTopic.innerText = localStorage.getItem("section");
let titreSujet = document.getElementById("titreSujet");
titreSujet.innerText = localStorage.getItem("topic");
let heureSujet = document.getElementById("heureSujet");
heureSujet.innerText = localStorage.getItem("heureTopic");
let auteur = document.getElementById("auteur");
auteur.innerText = localStorage.getItem("prenom");
let messTd = document.getElementById("messTd");
messTd.innerText = localStorage.getItem("messageTopic");

let ajoutTopic = document.getElementById("ajoutTopic");

ajoutTopic.addEventListener("submit", function (e) {
    e.preventDefault();
    let tbodyTopic = document.getElementById("tbodyTopic");
    let tr = document.createElement("tr");
    tbodyTopic.appendChild(tr);
    let blankTd = document.createElement("td");
    tr.appendChild(blankTd);
    let blankTd2 = document.createElement("td");
    tr.appendChild(blankTd2);
    let heureComm = document.createElement("td");
    tr.appendChild(heureComm);
    let day = new Date ();
    heureComm.innerText = "répondu le "+day.toLocaleDateString()+" à "+day.toLocaleTimeString() ;
    let auteurComm = document.createElement("td");
    tr.appendChild(auteurComm);
    auteurComm.innerText = localStorage.getItem("prenom");
    //TR commentaire
    let answerTr = document.createElement("tr");
    tbodyTopic.appendChild(answerTr);
    let td = document.createElement("td");
    answerTr.appendChild(td);
    let answerMess = document.createElement("td");
    answerTr.appendChild(answerMess);
    let messageTd = document.getElementById("messageTd").value;
    answerMess.innerText = messageTd;
    answerMess.setAttribute("colspan", "2");
    answerMess.setAttribute("class", "text-end")
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

let menuBurger = document.getElementById("menuBurger");
let menuHome = document.getElementById("menuHome");
let menuCat1 = document.getElementById("menuCat1");
let menuCat2 = document.getElementById("menuCat2");
let menuCat3 = document.getElementById("menuCat3");
menuBurger.addEventListener("click", function (e) {
    menuHome.classList.toggle("on");
    menuCat1.classList.toggle("on");
    menuCat2.classList.toggle("on");
    menuCat3.classList.toggle("on");
});

let logOut = document.getElementById("logOut");
logOut.addEventListener("click", function (e) {
    alert("Vous vous êtes déconnecté");
})