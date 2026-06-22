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

//PHASE4:
  // 1. If the click was not on a BUTTON element, return early and do nothing
  //    hint: check event.target.tagName — it will be the string "BUTTON" if a button was clicked

  // 2. Store the clicked button and figure out which index it is in the list
  //    hint: convert answerBtnsNodeList to an array and use .indexOf(event.target)

  // 3. Get the correct answer index from the current question in the data array

  // 4. Compare: did the player pick the right one?
  //    - If correct: add the "correct" class to the clicked button, increment score,
  //      and update scoreDisplay.textContent
  //    - If wrong: add the "wrong" class to the clicked button,
  //      and add "correct" to the button at the correct index to reveal it

  // 5. Disable all four answer buttons so the player can't change their answer
  //    hint: convert to a real array and use forEach to add "disabled" to each

  // 6. Add "answered" to questionCard and remove "hidden" from nextBtn


answerList.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") {
  return
}

const clickedBtn = event.target
const btnArr = Array.from(answerBtnsNodeList)
const selectedIndex = btnArr.indexOf(clickedBtn)

const correctAns = questions[currentIndex].correct

console.log("Selected index:", selectedIndex)
console.log("Correct index:", correctAns)

if (selectedIndex === correctAns) {
  clickedBtn.classList.add("correct")
  score++
  scoreDisplay.textContent = score
} else {
  clickedBtn.classList.add("wrong")
  btnArr[correctAns].classList.add("correct")
}

btnArr.forEach((button) => {
  button.classList.add("disabled")
}) 

questionCard.classList.add("answered")
nextBtn.classList.remove("hidden")

console.log(event.target)
console.log(event.currentTarget)
})

//Phase5
nextBtn.addEventListener("click", () => {
  currentIndex = currentIndex + 1

  if (currentIndex < questions.length) {
    loadQuestion(currentIndex)
  } else {
    showEndScreen()
  }
})

function showEndScreen() {
  questionCard.classList.add("hidden")

  endScreen.classList.remove("hidden")

  const finalScore = document.createElement("h2")
  finalScore.textContent = `You scored ${score} out of ${questions.length}`

  const mesg = document.createElement("p")

  if (score > 4) {
    mesg.textContent = `Great Work! You got a perfect score!`
  } else if (score > 2){ 
    mesg.textContent = `Good Work! You passed!`
  } else {
      mesg.textContent = "Sorry, you failed. Good luck next time!"
  }

  const rstrtBtn = document.createElement("button")
  rstrtBtn.id = "restart-btn"
  rstrtBtn.textContent = "Play Again" 

  endScreen.appendChild(finalScore)
  endScreen.appendChild(mesg)
  endScreen.appendChild(rstrtBtn)
}

endScreen.addEventListener("click", (event) => {
  if (event.target.id !== "restart-btn") {
    return
  }

  currentIndex = 0
  score = 0

  scoreDisplay.textContent = score

  endScreen.innerHTML = ""

  endScreen.classList.add("hidden")

  questionCard.classList.remove("hidden")

  loadQuestion(currentIndex)
})

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

loadQuestion(currentIndex)

// Why does clicking a button inside #answer-list trigger this listener?
// Answer: Because the button is inside #answer-list. When the button is clicked, the click travels up to its parent element, #answer-list.Because #answer-list has the event listener, it notices the button click.
//
// What is the difference between event.target and event.currentTarget here?
// event.target  → The exact element that was clicked, such as an answer button.
// event.currentTarget → The element with the event listener, which is #answer-list.

