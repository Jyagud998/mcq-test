const questions = [
    {
        question: "Which of the following is NOT a characteristic of prokaryotic cells?",
        choices: ["Lack of membrane-bound organelles", "Presence of a nucleus", "Circular DNA", "Smaller size compared to eukaryotic cells"],
        correctAnswer: 1 // Index of the correct answer in the choices array
    },
    {
        question: "Gram-positive bacteria stain purple because of their:",
        choices: ["Thick peptidoglycan layer", "Outer membrane", "Lipopolysaccharide", "Teichoic acids"],
        correctAnswer: 0
    },
    {
        question: "Viruses are obligate intracellular parasites, meaning they:",
        choices: ["Can reproduce independently", "Can only reproduce inside a host cell", "Can survive outside of a host cell", "Can cause disease without entering a cell"],
        correctAnswer: 1
    },
    {
        question: "Which type of microscopy is best for viewing internal structures of living microorganisms?",
        choices: ["Brightfield microscopy", "Electron microscopy", "Phase-contrast microscopy", "Darkfield microscopy"],
        correctAnswer: 2
    },
    {
        question: "The process by which bacteria exchange genetic material through direct contact is called:",
        choices: ["Transformation", "Transduction", "Conjugation", "Mutation"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is NOT a type of fungal infection?",
        choices: ["Ringworm", "Thrush", "Malaria", "Athlete's foot"],
        correctAnswer: 2
    },
    {
        question: "Which microorganism is responsible for causing tuberculosis?",
        choices: ["Mycobacterium tuberculosis", "Streptococcus pneumoniae", "Staphylococcus aureus", "Escherichia coli"],
        correctAnswer: 0
    },
    {
        question: "The process of killing or removing all microorganisms from a surface or object is called:",
        choices: ["Disinfection", "Sterilization", "Antisepsis", "Sanitation"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is NOT a component of the innate immune system?",
        choices: ["Antibodies", "Skin", "Mucous membranes", "Natural killer cells"],
        correctAnswer: 0
    },
    {
        question: "A microbial culture that contains only one species of microorganism is called:",
        choices: ["Pure culture", "Mixed culture", "Contaminated culture", "Stock culture"],
        correctAnswer: 0
    }
];

let currentQuestion = 0;
let score = 0;

const studentNameInput = document.getElementById("studentName");
const groupNumberInput = document.getElementById("groupNumber");
const startQuizButton = document.getElementById("beginQuiz"); 
const quizContainer = document.getElementById("quizContainer");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextButton = document.getElementById("nextButton");
const resultContainer = document.getElementById("resultContainer");
const scoreElement = document.getElementById("score");

// Corrected event listener attachment
startQuizButton.addEventListener("click", startQuiz); 

nextButton.addEventListener("click", () => {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        checkAnswer(selectedChoice.value);
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            displayResults();
        }
    }
});

function startQuiz() {
    if (localStorage.getItem('quizTaken') === 'true') {
        alert("You have already taken the quiz.");
        return;
    } else {
        localStorage.setItem('quizTaken', 'true');
        document.getElementById("startQuiz").style.display = "none";
        quizContainer.style.display = "block";
        displayQuestion();
    }
}

function displayQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = ''; 

    question.choices.forEach((choice, index) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "choice";
        input.value = index; 
        label.appendChild(input);
        label.appendChild(document.createTextNode(choice));
        choicesElement.appendChild(label);
        choicesElement.appendChild(document.createElement("br")); 
    });
}

function checkAnswer(selectedChoice) {
    if (selectedChoice == questions[currentQuestion].correctAnswer) {
        score++;
    }
}

function displayResults() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.textContent = `You scored ${score} out of ${questions.length}.`;

    // Display student name and group number
    const studentName = studentNameInput.value;
    const groupNumber = groupNumberInput.value;
    scoreElement.textContent += `\nName: ${studentName}, Group: ${groupNumber}`;
}
