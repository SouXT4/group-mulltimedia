// main.js

// Get the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Check if dark mode is already set in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleButton.textContent = '🌙'; // Change the button text to dark mode icon
} else {
    document.body.classList.remove('dark-mode');
    themeToggleButton.textContent = '🌞'; // Change the button text to light mode icon
}

// Event listener to toggle theme on button click
themeToggleButton.addEventListener('click', () => {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');

    // Save the current theme to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleButton.textContent = '🌙'; // Change the button text to dark mode icon
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleButton.textContent = '🌞'; // Change the button text to light mode icon
    }
});
