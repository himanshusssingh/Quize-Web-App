document.addEventListener("DOMContentLoaded", () => {

const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const choicesList = document.getElementById("choices-list");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreMassage = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");
const startBtn = document.getElementById("start-btn");


//Question and options
const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", showQuestions);

  choicesList.addEventListener("click", (e) => {
    console.log(e.target.tagname)
    let ans = questions[currentQuestionIndex].answer;
    if(ans === e.target.innerText){
      score++;
      console.log("ans is right")
    }
  })

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    showQuestions();
    else showResult();
  })

  function showQuestions(){
    questionContainer.classList.remove("hidden");
    startBtn.classList.add("hidden")
    questionText.innerText = `${questions[currentQuestionIndex].question}`;
    choicesList.innerText = ''
    questions[currentQuestionIndex].choices.forEach((choice) => showOptions(choice))
  }

  function showOptions(choice){
    let li = document.createElement("li");
    li.innerHTML = `<p>${choice}</p>`
    choicesList.appendChild(li);
    nextBtn.classList.remove("hidden");
  }

  function showResult(){
    questionContainer.classList.add("hidden");
    nextBtn.classList.add("hidden")
    resultContainer.classList.remove("hidden");
    scoreMassage.innerText = `${score}`
  }


})