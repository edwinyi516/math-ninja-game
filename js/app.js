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
        player1 = new Player("", "", "")
        player2 = new Player("", "", "")
    },
    fightButton () {
        while (player1.character === "" || player1.operator === "") {
            alert(`Please choose both a character and operator!`)
            return
        }
        characterSelectScreen.style.display = "none"
        gameScreen.style.display = "flex"
        dialogueBox.style.display = "flex"
        if (player1.character === "male") {
            player1Character.setAttribute("src", "../assets/images/male-idle.gif")
            player2Character.setAttribute("src", "../assets/images/female-idle.gif")
        }
        else {
            player1Character.setAttribute("src", "../assets/images/female-idle.gif")
            player2Character.setAttribute("src", "../assets/images/male-idle.gif")
        }
    },
}

//Key Press Events
document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        dialogueBox.style.display = "none"
    }
}

//DOM Elements

//EVENT LISTENER CONFIRMATION SOUND
//============================================================
const ding = new Audio("assets/sounds/ding.mp3")
//============================================================

const startScreen = document.querySelector(".start-screen")
const startButton = document.querySelector("#start-button")

const characterSelectScreen = document.querySelector(".character-select-screen")
const maleIdle = document.querySelector("#male-idle")
const femaleIdle = document.querySelector("#female-idle")
const chooseAddition = document.querySelector("#choose-addition")
const chooseSubtraction = document.querySelector("#choose-subtraction")
const chooseMultiplication = document.querySelector("#choose-multiplication")
const chooseDivision = document.querySelector("#choose-division")
const chooseAll = document.querySelector("#choose-all")
const fightButton = document.querySelector("#fight-button")

const gameScreen = document.querySelector(".game-screen")
const dialogueBox = document.querySelector(".dialogue-box")
const player1Character = document.querySelector("#player1-character")
const player2Character = document.querySelector("#player2-character")


//Event Listeners
startButton.addEventListener("click", () => {
    game.startButton()
})
maleIdle.addEventListener("click", () => {
    ding.play()
    femaleIdle.setAttribute("id", "female-idle")
    maleIdle.setAttribute("id", "chosen-character")
    player1.character = "male"
})
femaleIdle.addEventListener("click", () => {
    ding.play()
    maleIdle.setAttribute("id", "male-idle")
    femaleIdle.setAttribute("id", "chosen-character")
    player1.character = "female"
})
chooseAddition.addEventListener("click", () => {
    ding.play()
    chooseSubtraction.setAttribute("id", "choose-subtraction")
    chooseMultiplication.setAttribute("id", "choose-multiplication")
    chooseDivision.setAttribute("id", "choose-division")
    chooseAll.setAttribute("id", "choose-all")
    chooseAddition.setAttribute("id", "chosen-operator")
    player1.operator = "addition"
})
chooseSubtraction.addEventListener("click", () => {
    ding.play()
    chooseAddition.setAttribute("id", "choose-addition")
    chooseMultiplication.setAttribute("id", "choose-multiplication")
    chooseDivision.setAttribute("id", "choose-division")
    chooseAll.setAttribute("id", "choose-all")
    chooseSubtraction.setAttribute("id", "chosen-operator")
    player1.operator = "subtraction"
})
chooseMultiplication.addEventListener("click", () => {
    ding.play()
    chooseAddition.setAttribute("id", "choose-addition")
    chooseSubtraction.setAttribute("id", "choose-subtraction")
    chooseDivision.setAttribute("id", "choose-division")
    chooseAll.setAttribute("id", "choose-all")
    chooseMultiplication.setAttribute("id", "chosen-operator")
    player1.operator = "multiplication"
})
chooseDivision.addEventListener("click", () => {
    ding.play()
    chooseAddition.setAttribute("id", "choose-addition")
    chooseSubtraction.setAttribute("id", "choose-subtraction")
    chooseMultiplication.setAttribute("id", "choose-multiplication")
    chooseAll.setAttribute("id", "choose-all")
    chooseDivision.setAttribute("id", "chosen-operator")
    player1.operator = "division"
})
chooseAll.addEventListener("click", () => {
    ding.play()
    chooseAddition.setAttribute("id", "choose-addition")
    chooseSubtraction.setAttribute("id", "choose-subtraction")
    chooseMultiplication.setAttribute("id", "choose-multiplication")
    chooseDivision.setAttribute("id", "choose-division")
    chooseAll.setAttribute("id", "chosen-operator")
    player1.operator = "all"
})
fightButton.addEventListener("click", () => {
    ding.play()
    game.fightButton()
})