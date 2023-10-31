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

//ajout sujet
let ajoutTopic = document.getElementById("ajoutTopic");
let x = 2;
let numTopic = 0;
let numMess = 1000;
ajoutTopic.addEventListener("submit", function (e) {
    let topic = document.getElementById("topic").value;
    let messageTd = document.getElementById("messageTd").value;
    if (topic == "" || messageTd == "") {
        alert("Vous devez remplir tout les champs avant d'envoyer");
        e.preventDefault();
    } else {
    let day = new Date();
    e.preventDefault();
    let tbodyTopic = document.getElementById("tbodyTopic");
    let addTopic = document.createElement("tr");
    let numTd = document.createElement("td");
    let titreTd = document.createElement("td");
    let dateTd = document.createElement("td");
    let autTd = document.createElement("td");
    let addMessTd = document.createElement("tr");
    let addMess = document.createElement("td");
    let refTd = document.createElement("td");
    let tdVoir = document.createElement("td");
    let btnVoir = document.createElement("button");
    let aVoir = document.createElement("a");
    titreTd.innerText = topic;
    numTd.innerText = x++;
    tbodyTopic.appendChild(addTopic);
    addTopic.appendChild(numTd);
    addTopic.appendChild(titreTd);
    addTopic.appendChild(dateTd);
    addTopic.appendChild(autTd);
    tbodyTopic.appendChild(addMessTd);
    addMessTd.appendChild(refTd);
    addMessTd.appendChild(addMess);
    addMessTd.appendChild(tdVoir);
    tdVoir.appendChild(btnVoir);
    btnVoir.appendChild(aVoir);
    addMess.innerText = messageTd;
    aVoir.innerText = "Voir la discussion";
    numTd.setAttribute("class", "first");
    refTd.setAttribute("class", "first");
    titreTd.setAttribute("id", numTopic);
    titreTd.setAttribute("class", "sujet");
    addMessTd.setAttribute("class", "off");
    addMess.setAttribute("colspan", "2");
    addMess.setAttribute("class", "text-start");
    addMess.setAttribute("id", numMess);
    tdVoir.setAttribute("colspan", "2");
    aVoir.setAttribute("href", "sujet.html");
    aVoir.setAttribute("class", "text-black");
    autTd.innerText = localStorage.getItem("pseudo");
    dateTd.innerText = day.toLocaleDateString()+" à "+ day.toLocaleTimeString();
    //bouton voir discussion
    let voirPlus = titreTd;
    numTopic++;
    numMess++;
    voirPlus.addEventListener("click", function (e) {
        addMessTd.classList.toggle("off");
    });
    btnVoir.addEventListener("click", function (e){
        let voir = titreTd.innerText;
        let messageTopic = addMess.innerText;
        let heureTopic = dateTd.innerText;
        let section = local.innerText;
        localStorage.setItem("topic", voir);
        localStorage.setItem("messageTopic", messageTopic);
        localStorage.setItem("heureTopic", heureTopic);
        localStorage.setItem("section", section);
    })
    //bouton remove
    let remove = document.createElement("button");
    let tdBtn = document.createElement("td");
    addTopic.appendChild(tdBtn);
    tdBtn.appendChild(remove);
    remove.innerText = "Effacer";
    remove.setAttribute("id", "remove");
    remove.setAttribute("class", "rounded text-center");
    remove.addEventListener("click", function (e) {
        addTopic.remove();
        addMessTd.remove();
    });
}
});

//bouton déroulant message
let voirPlus = document.getElementById("sujet");
let message = document.getElementById("message");

voirPlus.addEventListener("click", function (e) {
    message.classList.toggle("off");
});

//bouton voir discussion
let btnVoir = document.getElementById("btnVoir");
btnVoir.addEventListener("click", function(e) {
        let voir = sujet.innerText;
        let messageTopic = messTd.innerText;
        let heureTopic = heureSujet.innerText;
        let section = local.innerText;
        localStorage.setItem("topic", voir);
        localStorage.setItem("messageTopic", messageTopic);
        localStorage.setItem("heureTopic", heureTopic);
        localStorage.setItem("section", section);
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

//menu responsive
let menuBurger = document.getElementById("menuBurger");

menuBurger.addEventListener("click", function(e) {
    let menuHome = document.getElementById("menuHome");
    menuHome.classList.toggle("on");
    let menuCat1 = document.getElementById("menuCat1");
    menuCat1.classList.toggle("on")
    // let menuCat2 = document.getElementById("menuCat2");
    // menuCat2.classList.toggle("on");
    let menuCat3 = document.getElementById("menuCat3");
    menuCat3.classList.toggle("on");
})