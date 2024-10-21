const quizData = [
    {
        question: "What is the minimum age for a child to work in India?",
        options: ["14 years", "16 years", "18 years", "No minimum age"],
        correct: "14 years"
    },
    {
        question: "Which of the following is a right of every child?",
        options: ["Right to Education", "Right to Own Property", "Right to Vote", "Right to Drive"],
        correct: "Right to Education"
    },
    {
        question: "Which law protects children from sexual offenses in India?",
        options: ["POCSO Act", "Criminal Law Amendment Act", "Juvenile Justice Act", "Right to Information Act"],
        correct: "POCSO Act"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const startQuizButton = document.getElementById('startQuiz');
const quizContainer = document.getElementById('quizContainer');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('nextButton');
const resultContainer = document.getElementById('resultContainer');
const scoreElement = document.getElementById('score');
const restartQuizButton = document.getElementById('restartQuiz');

startQuizButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
});

restartQuizButton.addEventListener('click', restartQuiz);

function startQuiz() {
    startQuizButton.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', selectAnswer);
        answersElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correctAnswer = quizData[currentQuestionIndex].correct;
    if (selectedButton.innerText === correctAnswer) {
        score++;
    }
    nextButton.style.display = 'block';
}

function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.innerText = `${score} out of ${quizData.length}`;
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    resultContainer.style.display = 'none';
    startQuizButton.style.display = 'block';
}
