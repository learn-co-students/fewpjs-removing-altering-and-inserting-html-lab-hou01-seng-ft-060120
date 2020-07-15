// Write your code here!
main.remove()
function element(type, id) {
    const myType = document.createElement(type)
    myType.id = id
    return myType
}

let newHeader = document.body.appendChild(element ('h1', 'victory'))

newHeader.innerHTML = "Frank is the champion"