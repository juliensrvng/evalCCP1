let usernameEl = localStorage.getItem("username");
let prenom = localStorage.getItem("prenom");
let username = document.getElementById("username");

let date = document.getElementById("date");
let heure = document.getElementById("heure");
let day = new Date();

username.innerHTML = prenom +" "+usernameEl;
date.innerHTML = day.toLocaleDateString();
heure.innerHTML = day.toLocaleTimeString();

let ajoutTopic = document.getElementById("ajoutTopic");
let x = 2;

ajoutTopic.addEventListener("submit", function (e) {
    e.preventDefault();
    let ulTopic = document.getElementById("ulTopic");
    let addTopic = document.createElement("li");
    let topic = document.getElementById("topic").value;
    let numLi = document.createElement("span");
    let titreLi = document.createElement("span");
    let commLi = document.createElement("span");
    let autLi = document.createElement("span");
    titreLi.innerText = topic;
    numLi.innerText = x++;
    ulTopic.appendChild(addTopic);
    addTopic.appendChild(numLi);
    addTopic.appendChild(titreLi);
    addTopic.appendChild(commLi);
    addTopic.appendChild(autLi);
    addTopic.setAttribute("class", "row border-bottom");
    numLi.setAttribute("class", "col-1");
    titreLi.setAttribute("class", "col-5 titreLi");
    commLi.setAttribute("class", "col-2");
    autLi.setAttribute("class", "col-3");
    autLi.innerText = localStorage.getItem("prenom");
    commLi.innerText = day.toLocaleDateString();    
//bouton remove
    let remove = document.createElement("button");
    addTopic.appendChild(remove);
    remove.innerText = "Effacer";
    remove.setAttribute("id", "remove");
    remove.setAttribute("class", "rounded col-1");
    remove.addEventListener("click", function (e) {
        addTopic.remove();
    });
    let voirPlus = document.getElementById("titreLi")
    let message = document.getAnimations("message");

    voirPlus.addEventListener("click", function (e) {
        message.classList.remove("off")
    })
});

let voirPlus = document.getElementById("titreLi")
let message = document.getAnimations("message");

voirPlus.addEventListener("click", function (e) {
    let message = document.getElementById("message");
    message.classList.toggle("off")
});

