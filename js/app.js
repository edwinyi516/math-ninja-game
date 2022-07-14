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
        player2 = new Player()
    }
}


//DOM Elements

//EVENT LISTENER CONFIRMATION SOUND - REMOVE BEFORE DEPLOYMENT
//============================================================
const ding = new Audio("assets/sounds/ding.mp3")
//============================================================

const startScreen = document.querySelector(".start-screen")
const startButton = document.querySelector("#start-button")

const characterSelectScreen = document.querySelector(".character-select-screen")
const chooseMale = document.querySelector("#choose-male")
const chooseFemale = document.querySelector("#choose-female")
const chooseAddition = document.querySelector("#choose-addition")
const chooseSubtraction = document.querySelector("#choose-subtraction")
const chooseMultiplication = document.querySelector("#choose-multiplication")
const chooseDivision = document.querySelector("#choose-division")
const chooseAll = document.querySelector("#choose-all")
const fightButton = document.querySelector("#fight-button")


//Event Listeners
startButton.addEventListener("click", () => {
    game.startButton()
})
chooseMale.addEventListener("click", () => {
    ding.play()
})
chooseFemale.addEventListener("click", () => {
    ding.play()
})
chooseAddition.addEventListener("click", () => {
    ding.play()
})
chooseSubtraction.addEventListener("click", () => {
    ding.play()
})
chooseMultiplication.addEventListener("click", () => {
    ding.play()
})
chooseDivision.addEventListener("click", () => {
    ding.play()
})
chooseAll.addEventListener("click", () => {
    ding.play()
})
fightButton.addEventListener("click", () => {
    ding.play()
})