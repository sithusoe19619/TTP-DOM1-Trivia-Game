// BEHAVIOR
const questions = [
  {
    text: "Who invented the World Wide Web?",
    answers: [
      "Tim Berners-Lee",
      "Bill Gates",
      "Linus Torvalds",
      "Ada Lovelace"
    ],
    correct: 0
  },
  {
    text: "Which planet is known as the Red Planet?",
    answers: [
      "Venus",
      "Mars",
      "Jupiter",
      "Mercury"
    ],
    correct: 1
  },
  {
    text: "What does HTML stand for?",
    answers: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperTool Multi Language",
      "Home Tool Markup Language"
    ],
    correct: 0
  },
  {
    text: "Which language is used to style web pages?",
    answers: [
      "HTML",
      "CSS",
      "Python",
      "SQL"
    ],
    correct: 1
  },
  {
    text: "What does DOM stand for?",
    answers: [
      "Document Object Model",
      "Data Object Method",
      "Digital Ordinance Map",
      "Display Output Mode"
    ],
    correct: 0
  }
]

let currentIndex = 0 
let score = 0

const gameTitle = document.getElementById("game-title")
const scoreDisplay = document.getElementById("score")
const questionCard = document.getElementById("question-card")
const questionNumber = document.getElementById("question-number")
const questionText = document.getElementById("question-text")
const answerList = document.getElementById("answer-list")
const nextBtn = document.getElementById("next-btn")
const endScreen = document.getElementById("end-screen")

const answerBtnsCollection = document.getElementsByClassName("answer-btn")
const answerBtnsNodeList = document.querySelectorAll(".answer-btn")

console.log(gameTitle)
console.log(scoreDisplay)
console.log(questionNumber)
console.log(questionText)
console.log(questionCard)
console.log(answerList)
console.log(nextBtn)
console.log(endScreen)
console.log(answerBtnsCollection)
console.log(answerBtnsNodeList)

gameTitle.textContent = "⚡ Quick Fire Trivia ⚡"

// Phase 2 practice: read the original HTML question text.
// console.log("First question:", questionText.textContent)

// Phase 2 practice: uppercase the hardcoded question label.
// Not needed after loadQuestion() starts rendering question numbers.
// questionNumber.textContent = questionNumber.textContent.toUpperCase()

// Phase 2 practice: walk from a button to its parent <li>, then to the <ul>.
// const firstBtn = answerBtnsNodeList[0]
// const firstLi = firstBtn.parentElement
// console.log("The first button:", firstBtn)
// console.log("Its parent <li>:", firstLi)
// console.log("The <ul> that holds all buttons:", firstLi.parentElement)

// Phase 2 practice: add and remove a visual class on the card.
// loadQuestion() handles this reset now.
// questionCard.classList.add("answered")
// questionCard.classList.remove("answered")

function loadQuestion(index) {
    // ASK ABOUT THIS!!!
  const currentQuestion = questions[index]

  questionNumber.textContent = `Question ${index + 1} of ${questions.length}`
  questionText.textContent = currentQuestion.text

  Array.from(answerBtnsNodeList).forEach((button, answerIndex) => {
    button.textContent = currentQuestion.answers[answerIndex]
    button.className = "answer-btn"
  })

  nextBtn.classList.add("hidden")
  questionCard.classList.remove("answered")
}

answerList.addEventListener("click", (event) => {
    console.log("target:", event.target)
    console.log("currentTarget:", event.currentTarget)
    
})

loadQuestion(0)