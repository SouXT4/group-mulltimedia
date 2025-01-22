document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz-container");
    const startQuizBtn = document.getElementById("start-quiz");
    const resultsSection = document.getElementById("quiz-results");
    const quizScore = document.getElementById("quiz-score");
    const quizMessage = document.getElementById("quiz-message");

    const quizQuestions = [
        {
            question: "What is phishing?",
            options: [
                "A type of malware",
                "An online scam",
                "A secure method of communication",
                "A legitimate banking process"
            ],
            answer: 1
        },
        {
            question: "How can you identify a scam email?",
            options: [
                "It has typos",
                "It asks for personal information",
                "Both of the above",
                "None of the above"
            ],
            answer: 2
        },
        {
            question: "What is a phishing scam?",
            options: [
                "A method of catching fish",
                "A scam where fraudsters trick you into revealing personal information",
                "A legitimate email from your bank",
                "A type of malware"
            ],
            answer: 1
        },
        {
            question: "Which of the following is a red flag of a potential scam?",
            options: [
                "Unsolicited calls or emails asking for personal information",
                "Offers that sound too good to be true",
                "High-pressure tactics to act immediately",
                "All of the above"
            ],
            answer: 3
        },
        {
            question: "What should you do if you receive an email claiming you’ve won a lottery you didn’t enter?",
            options: [
                "Provide your personal details to claim the prize",
                "Ignore or delete the email",
                "Forward the email to your friends",
                "Click on the link to verify"
            ],
            answer: 1
        },
        {
            question: "What is a 'smishing' scam?",
            options: [
                "A scam that uses fake social media profiles",
                "A scam involving fraudulent SMS messages",
                "A scam that targets online gamers",
                "A scam involving counterfeit products"
            ],
            answer: 1
        },
        {
            question: "If someone claims to be from tech support and asks for remote access to your computer, what should you do?",
            options: [
                "Give them access immediately",
                "Hang up and contact the company directly using official contact details",
                "Provide your passwords for troubleshooting",
                "Follow their instructions without questioning"
            ],
            answer: 1
        },
        {
            question: "What is the safest way to shop online?",
            options: [
                "Use public Wi-Fi to save data",
                "Only shop on secure websites (look for 'https' and a padlock symbol)",
                "Share your credit card details via email",
                "Click on ads to find the best deals"
            ],
            answer: 1
        },
        {
            question: "What should you do if you suspect you’ve been scammed?",
            options: [
                "Ignore it and hope it goes away",
                "Report it to local authorities or a consumer protection agency",
                "Delete all evidence immediately",
                "Confront the scammer directly"
            ],
            answer: 1
        },
        {
            question: "Why is it important to regularly update your passwords?",
            options: [
                "To confuse yourself",
                "To ensure better security and reduce the risk of unauthorized access",
                "To avoid forgetting them",
                "Because your friends recommend it"
            ],
            answer: 1
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    // Start the quiz
    startQuizBtn.addEventListener("click", () => {
        startQuizBtn.style.display = "none";
        quizContainer.style.display = "block";
        displayQuestion(currentQuestionIndex);
    });

    // Display a question
    function displayQuestion(index) {
        quizContainer.innerHTML = ""; // Clear previous question
        const question = quizQuestions[index];
        const questionElem = document.createElement("div");
        questionElem.classList.add("question-block");

        questionElem.innerHTML = `<p><strong>Question ${index + 1}:</strong> ${question.question}</p>`;

        question.options.forEach((option, i) => {
            const button = document.createElement("button");
            button.textContent = `${String.fromCharCode(65 + i)}. ${option}`;
            button.classList.add("quiz-option");
            button.addEventListener("click", () => handleAnswer(index, i));
            questionElem.appendChild(button);
        });

        quizContainer.appendChild(questionElem);
    }

    // Handle answer selection
    function handleAnswer(questionIndex, selectedOption) {
        if (quizQuestions[questionIndex].answer === selectedOption) {
            score++;
        }

        // Move to the next question or end the quiz
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            displayQuestion(currentQuestionIndex);
        } else {
            endQuiz();
        }
    }

    // End the quiz and display results
    function endQuiz() {
        quizContainer.style.display = "none";
        resultsSection.style.display = "block";

        quizScore.textContent = `Your Score: ${score} / ${quizQuestions.length}`;
        if (score === quizQuestions.length) {
            quizMessage.textContent = "Excellent! You got all questions correct.";
        } else if (score >= quizQuestions.length / 2) {
            quizMessage.textContent = "Good job! You passed the quiz.";
        } else {
            quizMessage.textContent = "Keep learning! Try the quiz again.";
        }
    }

    // Reset quiz when navigating to another page
    window.addEventListener("beforeunload", () => {
        score = 0;
        currentQuestionIndex = 0;
    });
});
