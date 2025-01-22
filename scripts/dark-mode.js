// dark-mode.js
const themeToggleButton = document.getElementById('theme-toggle');

// Check if dark mode is already set in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleButton.textContent = '🌙'; // You can change the icon or text based on the theme
} else {
    document.body.classList.remove('dark-mode');
    themeToggleButton.textContent = '🌞';
}

themeToggleButton.addEventListener('click', () => {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');

    // Save the current theme to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleButton.textContent = '🌙'; // Change the button text or icon for dark mode
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleButton.textContent = '🌞'; // Change the button text or icon for light mode
    }
});
