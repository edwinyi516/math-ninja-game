//Player 1 Class
class Player1 {
    constructor(character, operator, difficulty) {
        this.character = character
        this.operator = operator
        this.difficulty = difficulty
    }
    //Character functions

}

//Player 2 Class
class Player2 {
    constructor(character, operator, difficulty) {
        this.character = character
        this.operator = operator
        this.difficulty = difficulty
    }
    //Character functions

}

//Instantiate Players
let player1 = new Player1(characterChoice, operatorChoice, difficultyChoice)
let player2 = new Player2(characterChoice, operatorChoice, difficultyChoice)

//Game Object
let game = {
    //Game Functions
    startButton () {
        startScreen.style.display = "none"
        characterSelectScreen.style.display = "flex"
    }
}


//DOM Elements
const startScreen = document.querySelector(".start-screen")
console.log(startScreen)
const startButton = document.querySelector("#start-button")

const characterSelectScreen = document.querySelector(".character-select-screen")

const chooseMegaMan = document.querySelector("#choose-mega-man")
const chooseZero = document.querySelector("#choose-zero")
const chooseAddition = document.querySelector("#choose-addition")
const chooseSubtraction = document.querySelector("#choose-subtraction")
const chooseMultiplication = document.querySelector("#choose-multiplication")
const chooseDivision = document.querySelector("#choose-division")
const chooseAllOperators = document.querySelector("#choose-all-operators")


//Event Listeners
startButton.addEventListener("click", () => {
    game.startButton()
})