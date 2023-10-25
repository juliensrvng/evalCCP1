let usernameEl = localStorage.getItem("username");
let prenom = localStorage.getItem("prenom");
let username = document.getElementById("username");

let date = document.getElementById("date");
let heure = document.getElementById("heure");
let day = new Date();

username.innerHTML = prenom + " " + usernameEl;
date.innerHTML = day.toLocaleDateString();
heure.innerHTML = day.toLocaleTimeString();

let ajoutTopic = document.getElementById("ajoutTopic");
let x = 2;

ajoutTopic.addEventListener("submit", function (e) {
    let day = new Date();
    e.preventDefault();
    let tbodyTopic = document.getElementById("tbodyTopic");
    let addTopic = document.createElement("tr");
    let topic = document.getElementById("topic").value;
    let messageTd = document.getElementById("messageTd").value;
    let numTd = document.createElement("td");
    let titreTd = document.createElement("td");
    let commTd = document.createElement("td");
    let autTd = document.createElement("td");
    let addMessTd = document.createElement("tr");
    let addMess = document.createElement("td");
    titreTd.innerText = topic;
    numTd.innerText = x++;
    tbodyTopic.appendChild(addTopic);
    addTopic.appendChild(numTd);
    addTopic.appendChild(titreTd);
    addTopic.appendChild(commTd);
    addTopic.appendChild(autTd);
    tbodyTopic.appendChild(addMessTd);
    addMessTd.appendChild(addMess);
    addMess.innerText = messageTd;
    titreTd.setAttribute("colspan", "2");
    titreTd.setAttribute("id", "voir")
    addMessTd.setAttribute("class", "off");
    addMess.setAttribute("colspan", "6");
    addMess.setAttribute("class", "text-start");
    autTd.innerText = localStorage.getItem("prenom");
    commTd.innerText = day.toLocaleDateString();
    let voirPlus = titreTd;
    voirPlus.addEventListener("click", function (e) {
        addMessTd.classList.toggle("off");
    });
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
        addMess.remove();
    });
});

//bouton déroulant message
let voirPlus = document.getElementById("sujet");
let message = document.getElementById("message");

voirPlus.addEventListener("click", function (e) {
    message.classList.toggle("off");
});