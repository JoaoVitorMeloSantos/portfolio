const darkModeToggle = document.getElementById('dark-mode-toggle');
const stylesheet = document.getElementById('stylesheet');
const languageIconsColored = document.querySelectorAll('.colored');

let isDarkMode = false;

darkModeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        stylesheet.href = 'css/style-dark.css';
        languageIconsColored.forEach(icon => {
            icon.classList.remove('colored');
        });
    } else {
        stylesheet.href = 'css/style.css';
        languageIconsColored.forEach(icon => {
            icon.classList.add('colored');
        });
    }
});