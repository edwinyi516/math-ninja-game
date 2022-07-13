//Player Class
class Player {
    constructor(character, operator, difficulty) {
        this.character = character
        this.operator = operator
        this.difficulty = difficulty
    }
    //Character functions

}

//Game Object
let game = {
    //Game Functions
    startButton () {
        startScreen.style.display = "none"
        characterSelectScreen.style.display = "flex"
        player1 = new Player()
    }
}


//DOM Elements
const startScreen = document.querySelector(".start-screen")
console.log(startScreen)
const startButton = document.querySelector("#start-button")

const characterSelectScreen = document.querySelector(".character-select-screen")

const chooseMale = document.querySelector("#choose-male")
const chooseFemale = document.querySelector("#choose-female")
const chooseAddition = document.querySelector("#choose-addition")
const chooseSubtraction = document.querySelector("#choose-subtraction")
const chooseMultiplication = document.querySelector("#choose-multiplication")
const chooseDivision = document.querySelector("#choose-division")
const chooseAllOperators = document.querySelector("#choose-all-operators")


//Event Listeners
startButton.addEventListener("click", () => {
    game.startButton()
})