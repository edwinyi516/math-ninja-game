//Player Class
class Player {
    constructor(character, operator, difficulty) {
        this.character = character
        this.operator = operator
        this.difficulty = difficulty
    }
}


//Global
let num1 = null
let num2 = null
let correctAnswer = null
let timerInterval = null
let currentPlayer = null
let isPaused = false


//Game Object
let game = {
    startButton () {
        startScreen.style.display = "none"
        characterSelectScreen.style.display = "flex"
        player1 = new Player("", "", "")
        player2 = new Player("", "", "")
    },
    muteButton () {
        if (audioOn.getAttribute("class") === "audio-selected") {
            audioOn.setAttribute("class", "audio-not-selected")
            audioMute.setAttribute("class", "audio-selected")
            allAudio.forEach((e) => {
                e.volume = 0
            })
        }
        else if (audioMute.getAttribute("class") === "audio-selected") {
            audioMute.setAttribute("class", "audio-not-selected")
            audioOn.setAttribute("class", "audio-selected")
            startbgm.volume = 0.2
            gamebgm.volume = 0.2
            pop.volume = 0.15
            slash.volume = .5
            whack.volume = .3
            cheer.volume = .5
            correct.volume = .2
            incorrect.volume = .3
        }
    },
    musicMuteButton () {
        if(menuMusicOn.getAttribute("class") === "music-selected") {
            menuMusicOn.setAttribute("class", "music-not-selected")
            menuMusicMute.setAttribute("class", "music-selected")
            allMusic.forEach((e) => {
                e.volume = 0
            })
        }
        else {
            menuMusicOn.setAttribute("class", "music-selected")
            menuMusicMute.setAttribute("class", "music-not-selected")
            gamebgm.volume = 0.2
        }
    },
    soundsMuteButton () {
        if(menuSoundsOn.getAttribute("class") === "sounds-selected") {
            menuSoundsOn.setAttribute("class", "sounds-not-selected")
            menuSoundsMute.setAttribute("class", "sounds-selected")
            allSounds.forEach((e) => {
                e.volume = 0
            })
        }
        else {
            menuSoundsOn.setAttribute("class", "sounds-selected")
            menuSoundsMute.setAttribute("class", "sounds-not-selected")
            pop.volume = 0.15
            slash.volume = .5
            whack.volume = .3
            cheer.volume = .5
            correct.volume = .2
            incorrect.volume = .3
        }
    },
    fightButton () {
        while (player1.character === "" || player1.operator === "") {
            alert(`Please choose both a character and operator!`)
            return
        }
        setInterval(() => {
            if(startbgm.volume > 0.02) {
                startbgm.volume -= .02
            }
            else {
                startbgm.pause()
                clearInterval()
            }
            },100)
        setTimeout(() => {
            gamebgm.play()
        }, 1000)
        if(startSoundOn.getAttribute("class") === "audio-selected") {
            menuMusicOn.setAttribute("class", "music-selected")
            menuMusicMute.setAttribute("class", "music-not-selected")
            menuSoundsOn.setAttribute("class", "sounds-selected")
            menuSoundsMute.setAttribute("class", "sounds-not-selected")
        }
        else {
            menuMusicOn.setAttribute("class", "music-not-selected")
            menuMusicMute.setAttribute("class", "music-selected")
            menuSoundsOn.setAttribute("class", "sounds-not-selected")
            menuSoundsMute.setAttribute("class", "sounds-selected")
        }
        characterSelectScreen.style.display = "none"
        startSound.style.display = "none"
        gameScreen.style.display = "flex"
        problemBox.style.display = "flex"
        nextButton.style.display = "block"
        startSoundOn.removeAttribute("class")
        startSoundMute.removeAttribute("class")
        if (player1.character === "male") {
            player1Character.setAttribute("src", "assets/images/male-idle.gif")
            player2Character.setAttribute("src", "assets/images/female-idle.gif")
        }
        else {
            player1Character.setAttribute("src", "assets/images/female-idle.gif")
            player2Character.setAttribute("src", "assets/images/male-idle.gif")
        }
        currentPlayer = "Player 1"
        isPaused = false
    },
    pauseGame () {
        if(isPaused === false) {
            problemBox.style.display = "none"
            pauseBackground.style.display = "block"
            pauseMenu.style.display = "flex"
            isPaused = true
        }
        else {
            pauseMenu.style.display = "none"
            pauseBackground.style.display = "none"
            problemBox.style.display = "flex"
            isPaused = false
        }
    },
    nextButton () {
        num1 = null
        num2 = null
        correctAnswer = null
        timerInterval = null
        document.querySelector("#answer").value = ""
        nextButton.style.display = "none"
        if(player1HPNumber.innerText === "0" || player2HPNumber.innerText === "0") {
            currentPlayerText.style.display = "none"
            cheer.play()
            problemText.style.fontWeight = "800"
            problemText.style.fontSize = "25px"
            if(player2HPNumber.innerText === "0") {
                problemText.innerText = "Player 1 wins!"
            }
            else if(player1HPNumber.innerText === "0") {
                problemText.innerText = "Player 2 wins!"
            }
            playAgainButton.style.display = "block"
        }
        else {
            answerSpace.style.display = "flex"
            submitButton.style.display = "block"
            game.generateProblems()
            answer.focus()
        }
    },
    generateProblems () {
        currentPlayerText.innerText = currentPlayer
        timerNumber.innerText = 10
        if(player1.operator === "addition") {
            num1 = Math.round(Math.random() * 10)
            num2 = Math.round(Math.random() * 10)
            problemText.innerText = `${num1} + ${num2} = ?`
            correctAnswer = num1 + num2
        }
        else if(player1.operator === "subtraction") {
            num1 = Math.round(Math.random() * 10)
            num2 = Math.round(Math.random() * 10)
            while(num1 < num2) {
                num2 = Math.round(Math.random() * 10)
            }
            problemText.innerText = `${num1} - ${num2} = ?`
            correctAnswer = num1 - num2
        }
        else if(player1.operator === "multiplication") {
            num1 = Math.round(Math.random() * 10)
            num2 = Math.round(Math.random() * 10)
            problemText.innerText = `${num1} x ${num2} = ?`
            correctAnswer = num1 * num2
        }
        else if(player1.operator === "division") {
            while(num1 % num2 !== 0 || num2 === 0) {
                num1 = Math.round(Math.random() * 10)
                num2 = Math.round(Math.random() * 10)
            }
            problemText.innerText = `${num1} ÷ ${num2} = ?`
            correctAnswer = num1 / num2
        }
        else if(player1.operator === "all") {
            let randomOperator = Math.round(Math.random() * 3)
            if(randomOperator === 0) {
                num1 = Math.round(Math.random() * 10)
                num2 = Math.round(Math.random() * 10)
                problemText.innerText = `${num1} + ${num2} = ?`
                correctAnswer = num1 + num2
            }
            else if(randomOperator === 1) {
                num1 = Math.round(Math.random() * 10)
                num2 = Math.round(Math.random() * 10)
                while(num1 < num2) {
                    num2 = Math.round(Math.random() * 10)
                }
                problemText.innerText = `${num1} - ${num2} = ?`
                correctAnswer = num1 - num2
            }
            else if(randomOperator === 2) {
                num1 = Math.round(Math.random() * 10)
                num2 = Math.round(Math.random() * 10)
                problemText.innerText = `${num1} x ${num2} = ?`
                correctAnswer = num1 * num2
            }
            else if(randomOperator ===3) {
                while(num1 % num2 !== 0 || num2 === 0) {
                    num1 = Math.round(Math.random() * 10)
                    num2 = Math.round(Math.random() * 10)
                }
                problemText.innerText = `${num1} ÷ ${num2} = ?`
                correctAnswer = num1 / num2
            }
        }
        timerInterval = setInterval(() => {
            if(!isPaused)
                timerNumber.innerText = parseInt(timerNumber.innerText) - 1
                if(timerNumber.innerText === "0") {
                    clearInterval(timerInterval)
                    answerSpace.style.display = "none"
                    submitButton.style.display = "none"
                    problemText.innerText = "You ran out of time!"
                    nextButton.style.display = "block"
                }
            },1000)
    },
    solveProblem () {
        let answerNumber = parseInt(document.querySelector("#answer").value)
        answerSpace.style.display = "none"
        submitButton.style.display = "none"
        nextButton.disabled = true
        nextButton.style.display = "block"
        if(answerNumber === correctAnswer) {
            problemText.innerText = "Correct!"
            correct.play()
            setTimeout(() => {
                slash.play()
            }, 1350)
            setTimeout(() => {
                whack.play()
            }, 1200)
            if(currentPlayer === "Player 1") {
                let newplayer2HPNumber = parseInt(player2HPNumber.innerText) - 10
                if(newplayer2HPNumber === 0) {
                    if(player1.character === "male") {
                        player1Character.setAttribute("src", "assets/images/male-attack.gif")
                        player1Character.classList.add("p1-attacking")
                        setTimeout(() => {
                            player1Character.setAttribute("src", "assets/images/male-idle.gif")
                            player1Character.classList.remove("p1-attacking")
                        }, 3000)
                    }
                    else if(player1.character === "female") {
                        player1Character.setAttribute("src", "assets/images/female-attack.gif")
                        player1Character.classList.add("p1-attacking")
                        setTimeout(() => {
                            player1Character.setAttribute("src", "assets/images/female-idle.gif")
                            player1Character.classList.remove("p1-attacking")
                        }, 3000)
                    }
                    if(player2.character === "male") {
                        player2Character.setAttribute("src", "assets/images/male-dead.gif")
                    }
                    else if(player2.character === "female") {
                        player2Character.setAttribute("src", "assets/images/female-dead.gif")
                    }
                    setTimeout(() => {
                        player2HPNumber.innerText = newplayer2HPNumber
                        player2HPFill.style.width = `${newplayer2HPNumber}%`
                        if(newplayer2HPNumber <= 50) {
                            player2HPFill.style.backgroundColor = "yellow"
                        }
                        if(newplayer2HPNumber <= 20) {
                            player2HPFill.style.backgroundColor = "red"
                        }
                        nextButton.disabled = false
                    }, 1800)
                }
                else {
                    if(player1.character === "male") {
                        player1Character.setAttribute("src", "assets/images/male-attack.gif")
                        player1Character.classList.add("p1-attacking")
                        setTimeout(() => {
                            player1Character.setAttribute("src", "assets/images/male-idle.gif")
                            player1Character.classList.remove("p1-attacking")
                        }, 3000)
                    }
                    else if(player1.character === "female") {
                        player1Character.setAttribute("src", "assets/images/female-attack.gif")
                        player1Character.classList.add("p1-attacking")
                        setTimeout(() => {
                            player1Character.setAttribute("src", "assets/images/female-idle.gif")
                            player1Character.classList.remove("p1-attacking")
                        }, 3000)
                    }
                    if(player2.character === "male") {
                        player2Character.setAttribute("src", "assets/images/male-hurt.gif")
                        setTimeout(() => {
                            player2Character.setAttribute("src", "assets/images/male-idle.gif")
                        }, 2200)
                    }
                    else if(player2.character === "female") {
                        player2Character.setAttribute("src", "assets/images/female-hurt.gif")
                        setTimeout(() => {
                            player2Character.setAttribute("src", "assets/images/female-idle.gif")
                        }, 2200)
                    }
                    setTimeout(() => {
                        player2HPNumber.innerText = newplayer2HPNumber
                        player2HPFill.style.width = `${newplayer2HPNumber}%`
                        if(newplayer2HPNumber <= 50) {
                            player2HPFill.style.backgroundColor = "yellow"
                        }
                        if(newplayer2HPNumber <= 20) {
                            player2HPFill.style.backgroundColor = "red"
                        }
                        nextButton.disabled = false
                    }, 1800)
                }
            }
            else if (currentPlayer === "Player 2") {
                let newplayer1HPNumber = parseInt(player1HPNumber.innerText) - 10
                if (newplayer1HPNumber === 0) {
                    if(player2.character === "male") {
                        player2Character.setAttribute("src", "assets/images/male-attack.gif")
                        player2Character.classList.add("p2-attacking")
                        setTimeout(() => {
                            player2Character.setAttribute("src", "assets/images/male-idle.gif")
                            player2Character.classList.remove("p2-attacking")
                        }, 3000)
                    }
                    else if(player2.character === "female") {
                        player2Character.setAttribute("src", "assets/images/female-attack.gif")
                        player2Character.classList.add("p2-attacking")
                        setTimeout(() => {
                            player2Character.setAttribute("src", "assets/images/female-idle.gif")
                            player2Character.classList.remove("p2-attacking")
                        }, 3000)
                    }
                    if(player1.character === "male") {
                        player1Character.setAttribute("src", "assets/images/male-dead.gif")
                    }
                    else if(player1.character === "female") {
                        player1Character.setAttribute("src", "assets/images/female-dead.gif")
                    }
                    setTimeout(() => {
                        player1HPNumber.innerText = newplayer1HPNumber
                        player1HPFill.style.width = `${newplayer1HPNumber}%`
                        if(newplayer1HPNumber <= 50) {
                            player1HPFill.style.backgroundColor = "yellow"
                        }
                        if(newplayer1HPNumber <= 20) {
                            player1HPFill.style.backgroundColor = "red"
                        }
                        nextButton.disabled = false
                    }, 1800)
                }
                else {
                    if(player2.character === "male") {
                        player2Character.setAttribute("src", "assets/images/male-attack.gif")
                        player2Character.classList.add("p2-attacking")
                        setTimeout(() => {
                            player2Character.setAttribute("src", "assets/images/male-idle.gif")
                            player2Character.classList.remove("p2-attacking")
                        }, 3000)
                    }
                    else if(player2.character === "female") {
                        player2Character.setAttribute("src", "assets/images/female-attack.gif")
                        player2Character.classList.add("p2-attacking")
                        setTimeout(() => {
                            player2Character.setAttribute("src", "assets/images/female-idle.gif")
                            player2Character.classList.remove("p2-attacking")
                        }, 3000)
                    }
                    if(player1.character === "male") {
                        player1Character.setAttribute("src", "assets/images/male-hurt.gif")
                        setTimeout(() => {
                            player1Character.setAttribute("src", "assets/images/male-idle.gif")
                        }, 2200)
                    }
                    else if(player1.character === "female") {
                        player1Character.setAttribute("src", "assets/images/female-hurt.gif")
                        setTimeout(() => {
                            player1Character.setAttribute("src", "assets/images/female-idle.gif")
                        }, 2200)
                    }
                    setTimeout(() => {
                        player1HPNumber.innerText = newplayer1HPNumber
                        player1HPFill.style.width = `${newplayer1HPNumber}%`
                        if(newplayer1HPNumber <= 50) {
                            player1HPFill.style.backgroundColor = "yellow"
                        }
                        if(newplayer1HPNumber <= 20) {
                            player1HPFill.style.backgroundColor = "red"
                        }
                        nextButton.disabled = false
                    }, 1800)
                }
                }
            }
        else if(answerNumber !== correctAnswer) {
            problemText.innerText = "Incorrect! You lose your turn."
            incorrect.play()
            nextButton.disabled = false
            nextButton.style.display = "block"
        }
        if(currentPlayer === "Player 1") {
            currentPlayer = "Player 2"
        }
        else if(currentPlayer === "Player 2") {
            currentPlayer = "Player 1"
        }
    }
}


//DOM Elements
const startScreen = document.querySelector(".start-screen")
const startButton = document.querySelector("#start-button")
const startSound = document.querySelector(".start-sound")
const startSoundOn = document.querySelector("#start-sound-on")
const startSoundMute = document.querySelector("#start-sound-mute")

const characterSelectScreen = document.querySelector(".character-select-screen")
const maleIdle = document.querySelector("#male-idle")
const femaleIdle = document.querySelector("#female-idle")
const chosenCharacter = document.querySelector(".chosen-character")
const chooseAddition = document.querySelector("#choose-addition")
const chooseSubtraction = document.querySelector("#choose-subtraction")
const chooseMultiplication = document.querySelector("#choose-multiplication")
const chooseDivision = document.querySelector("#choose-division")
const chooseAll = document.querySelector("#choose-all")
const fightButton = document.querySelector("#fight-button")

const gameScreen = document.querySelector(".game-screen")
const problemBox = document.querySelector(".problem-box")
const currentPlayerText = document.querySelector("#current-player-text")
const problemText = document.querySelector("#problem-text")
const answerSpace = document.querySelector(".answer-space")
const answer = document.querySelector("#answer")
const submitButton = document.querySelector("#submit-button")
const nextButton = document.querySelector("#next-button")
const playAgainButton = document.querySelector("#play-again-button")
const player1Character = document.querySelector("#player1-character")
const player2Character = document.querySelector("#player2-character")
const player1HPFill = document.querySelector("#player1-hp-fill")
const player1HPNumber = document.querySelector("#player1-hp-number")
const player2HPFill = document.querySelector("#player2-hp-fill")
const player2HPNumber = document.querySelector("#player2-hp-number")
const timerNumber = document.querySelector("#timer-number")
const pauseMenu = document.querySelector(".pause-menu")
const pauseBackground = document.querySelector("#pause-background")
const closeButton = document.querySelector("#close-button")
const resetButton = document.querySelector("#reset-button")

//Audio
const audioOn = document.querySelector(".audio-selected")
const audioMute = document.querySelector(".audio-not-selected")
const menuMusicOn = document.querySelector("#menu-music-on")
const menuMusicMute = document.querySelector("#menu-music-mute")
const menuSoundsOn = document.querySelector("#menu-sounds-on")
const menuSoundsMute = document.querySelector("#menu-sounds-mute")
const startbgm = new Audio("assets/sounds/main-theme-alexander-nakarada.mp3")
const gamebgm = new Audio("assets/sounds/hostiles-inbound-miguel-johnson.mp3")
const pop = new Audio("assets/sounds/pop.mp3")
const correct = new Audio("assets/sounds/correct.wav")
const incorrect = new Audio("assets/sounds/incorrect.mp3")
const slash = new Audio("assets/sounds/slash.mp3")
const whack = new Audio("assets/sounds/whack.mp3")
const cheer = new Audio("assets/sounds/cheer.wav")
const allAudio = [startbgm, gamebgm, pop, correct, incorrect, slash, whack, cheer]
const allMusic = [startbgm, gamebgm]
const allSounds = [pop, correct, incorrect, slash, whack, cheer]
startbgm.loop = true
gamebgm.loop = true


//Event Listeners
startButton.addEventListener("click", () => {
    if (audioOn.getAttribute("class") == "audio-selected") {
        startbgm.volume = 0.2
        gamebgm.volume = 0.2
        pop.volume = 0.15
        slash.volume = .5
        whack.volume = .3
        cheer.volume = .5
        correct.volume = .2
        incorrect.volume = .3
    }
    else if (audioMute.getAttribute("class") == "audio-selected") {
        allAudio.forEach((e) => {
            e.volume = 0
        })
    }
    pop.play()
    game.startButton()
    startbgm.play()
})
audioOn.addEventListener("click", () => {
    game.muteButton()
})
audioMute.addEventListener("click", () => {
    game.muteButton()
})
menuMusicOn.addEventListener("click", () => {
    game.musicMuteButton()
})
menuMusicMute.addEventListener("click", () => {
    game.musicMuteButton()
})
menuSoundsOn.addEventListener("click", () => {
    game.soundsMuteButton()
})
menuSoundsMute.addEventListener("click", () => {
    game.soundsMuteButton()
    pop.play()
})
maleIdle.addEventListener("click", () => {
    pop.play()
    femaleIdle.classList.remove("chosen-character")
    femaleIdle.classList.add("not-chosen-character")
    maleIdle.classList.remove("class", "not-chosen-character")
    maleIdle.classList.add("chosen-character")
    player1.character = "male"
    player2.character = "female"
})
femaleIdle.addEventListener("click", () => {
    pop.play()
    maleIdle.classList.remove("chosen-character")
    maleIdle.classList.add("not-chosen-character")
    femaleIdle.classList.remove("class", "not-chosen-character")
    femaleIdle.classList.add("chosen-character")
    player1.character = "female"
    player2.character = "male"
})
chooseAddition.addEventListener("click", () => {
    pop.play()
    chooseSubtraction.setAttribute("id", "choose-subtraction")
    chooseMultiplication.setAttribute("id", "choose-multiplication")
    chooseDivision.setAttribute("id", "choose-division")
    chooseAll.setAttribute("id", "choose-all")
    chooseAddition.setAttribute("id", "chosen-operator")
    player1.operator = "addition"
})
chooseSubtraction.addEventListener("click", () => {
    pop.play()
    chooseAddition.setAttribute("id", "choose-addition")
    chooseMultiplication.setAttribute("id", "choose-multiplication")
    chooseDivision.setAttribute("id", "choose-division")
    chooseAll.setAttribute("id", "choose-all")
    chooseSubtraction.setAttribute("id", "chosen-operator")
    player1.operator = "subtraction"
})
chooseMultiplication.addEventListener("click", () => {
    pop.play()
    chooseAddition.setAttribute("id", "choose-addition")
    chooseSubtraction.setAttribute("id", "choose-subtraction")
    chooseDivision.setAttribute("id", "choose-division")
    chooseAll.setAttribute("id", "choose-all")
    chooseMultiplication.setAttribute("id", "chosen-operator")
    player1.operator = "multiplication"
})
chooseDivision.addEventListener("click", () => {
    pop.play()
    chooseAddition.setAttribute("id", "choose-addition")
    chooseSubtraction.setAttribute("id", "choose-subtraction")
    chooseMultiplication.setAttribute("id", "choose-multiplication")
    chooseAll.setAttribute("id", "choose-all")
    chooseDivision.setAttribute("id", "chosen-operator")
    player1.operator = "division"
})
chooseAll.addEventListener("click", () => {
    pop.play()
    chooseAddition.setAttribute("id", "choose-addition")
    chooseSubtraction.setAttribute("id", "choose-subtraction")
    chooseMultiplication.setAttribute("id", "choose-multiplication")
    chooseDivision.setAttribute("id", "choose-division")
    chooseAll.setAttribute("id", "chosen-operator")
    player1.operator = "all"
})
fightButton.addEventListener("click", () => {
    game.fightButton()
})
submitButton.addEventListener("click", () => {
    clearInterval(timerInterval)
    game.solveProblem()
})
nextButton.addEventListener("click", () => {
    game.nextButton()
})
playAgainButton.addEventListener("click", () => {
    location.reload()
})
closeButton.addEventListener("click", () => {
    pop.play()
    pauseMenu.style.display = "none"
    pauseBackground.style.display = "none"
    problemBox.style.display = "flex"
    isPaused = false
})
resetButton.addEventListener("click", () => {
    location.reload()
})
document.addEventListener("keydown", function(e) {
    const key = e.key
    if(gameScreen.style.display === "flex")
        if(key === "Escape") {
            pop.play()
            game.pauseGame()
        }
        if(key === "Enter") {
            if(nextButton.style.display === "block" && nextButton.disabled === false) {
                game.nextButton()
            }
            else if(submitButton.style.display === "block") {
                clearInterval(timerInterval)
                game.solveProblem()
            }
        }
})