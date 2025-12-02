let questions = [
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "Which language is used for styling web pages?",
        answers: ["HTML", "jQuery", "CSS", "XML"],
        correct: 2
    },
    {
        question: "What is the capital of India?",
        answers: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        correct: 0
    },
    {
        question: "Which company developed JavaScript?",
        answers: ["Google", "Netscape", "Microsoft", "Apple"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    let q = questions[currentQuestion];

    document.getElementById("question").innerText = q.question;
    document.getElementById("option1").innerText = q.answers[0];
    document.getElementById("option2").innerText = q.answers[1];
    document.getElementById("option3").innerText = q.answers[2];
    document.getElementById("option4").innerText = q.answers[3];
}

function checkAnswer(selected) {
    if (selected == questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        localStorage.setItem("quizScore", score);
        localStorage.setItem("totalQuestions", questions.length);
        window.location.href = "result.html";
    }
}
