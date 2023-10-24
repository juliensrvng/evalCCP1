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
    e.preventDefault();
    let ulTopic = document.getElementById("ulTopic");
    let addTopic = document.createElement("li");
    let topic = document.getElementById("topic").value;
    let messageP = document.getElementById("messageP").value;
    let numLi = document.createElement("span");
    let titreLi = document.createElement("span");
    let commLi = document.createElement("span");
    let autLi = document.createElement("span");
    let addMessLi = document.createElement("li");
    let addMess = document.createElement("p");
    titreLi.innerText = topic;
    numLi.innerText = x++;
    ulTopic.appendChild(addTopic);
    addTopic.appendChild(numLi);
    addTopic.appendChild(titreLi);
    addTopic.appendChild(commLi);
    addTopic.appendChild(autLi);
    ulTopic.appendChild(addMessLi);
    addMessLi.appendChild(addMess);
    addMess.innerText = messageP;
    addTopic.setAttribute("class", "row border-bottom");
    numLi.setAttribute("class", "col-1");
    titreLi.setAttribute("class", "col-5");
    titreLi.setAttribute("id", "voir")
    commLi.setAttribute("class", "col-2");
    autLi.setAttribute("class", "col-3");
    addMessLi.setAttribute("class", "row off");
    addMessLi.setAttribute("id", "123456")
    addMess.setAttribute("class", "col-12 text-start")
    autLi.innerText = localStorage.getItem("prenom");
    commLi.innerText = day.toLocaleDateString();
    let voirPlus = titreLi;
    voirPlus.addEventListener("click", function (e) {
        addMessLi.classList.toggle("off");
    });
    //bouton remove
    let remove = document.createElement("button");
    addTopic.appendChild(remove);
    remove.innerText = "Effacer";
    remove.setAttribute("id", "remove");
    remove.setAttribute("class", "rounded col-1");
    remove.addEventListener("click", function (e) {
        addTopic.remove();
        addMess.remove();
    });
});

let voirPlus = document.getElementById("titreLi")
let message = document.getElementById("message");

voirPlus.addEventListener("click", function (e) {
    let message = document.getElementById("message");
    message.classList.toggle("off")
});