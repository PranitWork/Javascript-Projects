
// list of the questions
const questions = [
    {
        question: "which is larget animal in the world?",
        answers: [
            { Text: 'shark', correct: false },
            { Text: 'blue whale', correct: true },
            { Text: 'elephant', correct: false },
            { Text: 'Giraffe', correct: false },
        ]
    },
    {
        question: "which is capital of india?",
        answers: [
            { Text: 'pune', correct: false },
            { Text: 'mumbai', correct: false },
            { Text: 'delhi', correct: true },
            { Text: 'goa', correct: false },
        ]
    },
    {
        question: "tell me the current president of india",
        answers: [
            { Text: 'narendra modi', correct: true },
            { Text: 'pranit daphale', correct: false },
            { Text: 'phdanvis', correct: false },
            { Text: 'yeknath shinde', correct: false },
        ]
    }
];

// defining the html class or id 

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


// define the total score and current score 

let currentquestionindex = 0;
let score = 0;


// This function initializes the quiz and resets the score and question index.
function startquiz() {
    currentquestionindex = 0; // Reset the current question index to the first question.
    score = 0; // Reset the user's score to zero.
    nextButton.innerHTML = 'Next'; // Set the "Next" button label.
    showQuestions();  // Call the function to display the first question.
}


// This function displays the current question and its answer choices.
function showQuestions() {

    resetState(); // Reset the display by hiding the "Next" button and clearing answer buttons.
    let currentquestion = questions[currentquestionindex]; // Get the current question object.
    let questionNo = currentquestionindex + 1; // Calculate the question number.
    questionElement.innerHTML = questionNo + ". " + currentquestion.question; // Display the question.

    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button"); // Create a button element for each answer choice.
        button.innerHTML = answer.Text; // Set the button text to the answer choice.
        button.classList.add("btn"); // Add a CSS class for styling.
        answerButton.appendChild(button); // Append the button to the answer buttons container.

        if (answer.correct) {
            button.dataset.correct = answer.correct; // Add a data attribute to mark the correct answer.
        }
        button.addEventListener('click', selectAnswer); // Add a click event listener to handle answer selection.
    });
}


// This function hides the "Next" button and clears previous answer buttons.
function resetState() {
    nextButton.style.display = "none"; // Hide the "Next" button.
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild); // Clear all answer buttons.
    }
}


// This function is called when a user selects an answer.
function selectAnswer(e) {
    const selectedBtn = e.target; // Get the clicked button.
    const isCoreect = selectedBtn.dataset.correct === "true";  // Check if the selected answer is correct.
    if (isCoreect) {
        selectedBtn.classList.add("correct"); // Add a CSS class for a correct answer.
        score++; // Increment the user's score for a correct answer.
    } else {
        selectedBtn.classList.add("incorrect"); // Add a CSS class for an incorrect answer.
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // Add a CSS class for the correct answer choice.
        }
        button.disabled = true; // Disable all answer buttons to prevent further selection.
    });
    nextButton.style.display = "block"; // Display the "Next" button to proceed to the next question.
}


// This function displays the user's final score and offers to play the quiz again.
function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;  // Display the final score.
    nextButton.innerHTML = "Play Agian"; // Change the "Next" button label to "Play Again."
    nextButton.style.display = "block"; // Display the "Play Again" button.
}


// This function is called when the "Next" button is clicked.
function handleNextButton() {
    currentquestionindex++; // Increment the current question index to move to the next question.
    if (currentquestionindex < questions.length) {
        showQuestions(); // If there are more questions, display the next question.
    } else {
        showScore(); // If all questions are answered, display the final score.
    }
}


// This code adds an event listener to the "Next" button for handling clicks.
nextButton.addEventListener('click', () => {
    if (currentquestionindex < questions.length) {
        handleNextButton(); // If there are more questions, handle the "Next" button click.
    } else {
        startquiz(); // If the quiz is completed, start the quiz again.
    }
})

// Start the quiz when the page loads.
startquiz();