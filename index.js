window.onload = () => {
    displayBingoBoard()
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
    return randomNumber
}

let generatorButton = document.querySelector("generator-Button")
generatorButton.addEventListener("click", generateRandomNumber)