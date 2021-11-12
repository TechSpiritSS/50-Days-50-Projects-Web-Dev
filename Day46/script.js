const quizData = [
  {
    question: "What is the capital of India?",
    a: "New Delhi",
    b: "Mumbai",
    c: "Chennai",
    d: "Kolkata",
    correct: "a",
  },
  {
    question: "What is the capital of USA?",
    a: "Washington",
    b: "New York",
    c: "Los Angeles",
    d: "Chicago",
    correct: "a",
  },
  {
    question: "What is the capital of Australia?",
    a: "Sydney",
    b: "Melbourne",
    c: "Canberra",
    d: "Perth",
    correct: "c",
  },
  {
    question: "What is the capital of Germany?",

    a: "Berlin",
    b: "Hamburg",
    c: "Munich",
    d: "Frankfurt",
    correct: "a",
  },
  {
    question: "What is the capital of France?",

    a: "Paris",
    b: "Lyon",
    c: "Marseille",
    d: "Toulouse",
    correct: "a",
  },
  {
    question: "What is the capital of Italy?",

    a: "Rome",
    b: "Milan",
    c: "Venice",
    d: "Florence",
    correct: "a",
  },
  {
    question: "What is the capital of Japan?",

    a: "Tokyo",
    b: "Osaka",
    c: "Kyoto",
    d: "Hokkaido",
    correct: "a",
  },
  {
    question: "What is the capital of China?",

    a: "Beijing",
    b: "Shanghai",
    c: "Guangzhou",
    d: "Wuhan",
    correct: "a",
  },
  {
    question: "What is the capital of Russia?",

    a: "Moscow",
    b: "St. Petersburg",
    c: "Novosibirsk",
    d: "Kazan",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;

  deselectAnswers();
}

function deselectAnswers() {
  answerEls.forEach((answer) => (answer.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly ${score} out of ${quizData.length} questions</h2>

      <button onclick="location.reload()">Restart</button>;
      `;
    }
  }
});
