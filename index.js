window.onload = () => {
    displayBingoBoard()
    generateRandomNumber()
}


const displayBingoBoard = () =>  {
    let boardContainerNode = document.getElementById("board-container")
    
    for (cellNumber = 1; cellNumber <= 76; cellNumber++){

    let newCellNode = document.createElement("div")
    newCellNode.innerText = cellNumber
    newCellNode.classList.add("cell")

    boardContainerNode.appendChild(newCellNode)}

}

const generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random()*76) + 1
    let generatorButton = document.querySelector("generator-Button")
    generatorButton.addEventListener("click", generateRandomNumber)
    alert("you've just clicked a button!")
}


