const questions = [
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Michelangelo", "Pablo Picasso"], answer: "Leonardo da Vinci" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Jupiter" },
    { question: "Which gas do plants use for photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], answer: "Carbon dioxide" },
    { question: "In what year did World War II end?", options: ["1943", "1945", "1948", "1950"], answer: "1945" },
    { question: "What is the chemical symbol for gold?", options: ["Ag", "Au", "Fe", "Hg"], answer: "Au" },
    { question: "Who wrote the play 'Hamlet'?", options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"], answer: "William Shakespeare" },
    { question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "Nauru", "Tuvalu"], answer: "Vatican City" },
    { question: "Which animal is known as the 'Ship of the Desert'?", options: ["Elephant", "Camel", "Horse", "Yak"], answer: "Camel" },
    { question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"], answer: "Mount Everest" },
    { question: "Who invented the telephone?", options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"], answer: "Alexander Graham Bell" }
];

// Shuffle the questions array randomly
questions.sort(() => Math.random() - 0.5);

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const quizContainer = document.getElementById("quiz-container");

function loadQuestion() {
    const currentQ = questions[currentQuestion];
    questionElement.textContent = currentQ.question;

    optionsElement.innerHTML = "";
    currentQ.options.forEach(option => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        optionsElement.appendChild(label);
    });
}

nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
});

function showResult() {
    quizContainer.style.display = "none"; 
    resultElement.textContent = `You scored ${score} out of ${questions.length}!`; 
}

loadQuestion(); // Load the first question on page load
