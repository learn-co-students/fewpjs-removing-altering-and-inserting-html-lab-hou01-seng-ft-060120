// Write your code here!
let element = document.createElement('div');
    document.body.appendChild(element);

let ul = document.createElement('ul');
    for (let i = 0; i < 3; i++){
        let li = document.createElement('li')
        li.innerHTML = (i + 1).toString()
        ul.appendChild(li)
    };
element.appendChild(ul);

element.style.backgroundColor = '#27647B';
element.style.textAlign = 'center';
ul.style.textAlign = 'left';

// element.className = "dog";
// element.className = "pet-listing dog"

element.classList.remove("this-is-fine");
element.classList.add("the-room-is-on-fire")

ul.removeChild(ul.querySelector('li:nth-child(2)'))
ul.remove()

let main = document.querySelector('main#main');
main.remove()

let yourName = 'Trey'

let newHeader = document.createElement('h1');
    newHeader.setAttribute("id", "victory")
    newHeader.innerHTML =( `${yourName} is the champion`)
    document.body.appendChild(newHeader);
