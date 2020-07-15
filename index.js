//const main = document.querySelector("main#main");
//main.remove();
document.querySelector("main#main").remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Julio is the champion";
document.body.appendChild(newHeader);