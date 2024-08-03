const questions = [
  {
    question: "Which is the largest animal in the world?",
    answer: [
      {
        text: "Shark",
        correct: false,
      },
      {
        text: "Blue Whales",
        correct: true,
      },
      {
        text: "Elephant",
        correct: false,
      },
      {
        text: "Giraffe",
        correct: false,
      },
    ],
  },

  {
    question: "What is the world's largest island?",
    answer: [
      {
        text: "Greenland",
        correct: true,
      },
      {
        text: "Madagascar",
        correct: false,
      },
      {
        text: "Indonesia",
        correct: false,
      },
      {
        text: "Antarctica",
        correct: false,
      },
    ],
  },

  {
    question: "What is the tallest mountain in the world?",
    answer: [
      {
        text: "Mount Everest",
        correct: true,
      },
      {
        text: "K2",
        correct: false,
      },
      {
        text: "Denali",
        correct: false,
      },
      {
        text: "Mount Olympus",
        correct: false,
      },
    ],
  },

  {
    question: "Which country is the world's largest producer of coffee?",
    answer: [
      {
        text: "Brazil",
        correct: true,
      },
      {
        text: "Ethiopia",
        correct: false,
      },
      {
        text: "Indonesia",
        correct: false,
      },
      {
        text: "Colombia",
        correct: false,
      },
    ],
  },

  {
    question: "What is the world's most populated city?",
    answer: [
      {
        text: "Tokyo",
        correct: true,
      },
      {
        text: "Delhi",
        correct: false,
      },
      {
        text: "Cairo",
        correct: false,
      },
      {
        text: "Beijing",
        correct: false,
      },
    ],
  },
  {
    question: "Who are referred to as Africa's giants?",
    answer: [
      {
        text: "Ghana",
        correct: false,
      },
      {
        text: "Nigeria",
        correct: true,
      },
      {
        text: "United States",
        correct: false,
      },
      {
        text: "Indonesia",
        correct: false,
      },
    ],
  },
];

// SETTING THE VARIABLES

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0; // current index
let score = 0; //LETING THE OVERALL SCORE BE 0 AT THE START OF THE QUIZ

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
// FUNCTION TO REVEAL THE QUESTIONS AND THE INDEX IN THE ARRAY
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}! good job!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// THE NEXT BUTTON FUNCTION TO SHOW THE NEXT QUESTION
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
