document.getElementById('start-quiz').addEventListener('click', startQuiz);
document.getElementById('end-quiz').addEventListener('click', endQuiz);
document.getElementById('try-again').addEventListener('click', tryAgain);

function startQuiz() {
    document.getElementById('quiz-container').style.display = 'block'; // Show quiz container
    document.getElementById('start-quiz').style.display = 'none'; // Hide Start button
}

function endQuiz() {
    document.getElementById('quiz-container').style.display = 'none'; // Hide quiz container
    document.getElementById('quiz-results').style.display = 'block'; // Show results
    document.getElementById('try-again').style.display = 'block'; // Show Try Again button
}

function tryAgain() {
    // Reset quiz state (clear answers, etc.)
    document.getElementById('quiz-results').style.display = 'none'; // Hide results
    document.getElementById('try-again').style.display = 'none'; // Hide Try Again button
    document.getElementById('start-quiz').style.display = 'block'; // Show Start button again
}