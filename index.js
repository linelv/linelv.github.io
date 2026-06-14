const lightModeButton = document.getElementById("light-mode-button");
const darkModeButton = document.getElementById("dark-mode-button");
const root = document.documentElement;

lightModeButton.onclick = function() {
    root.style.setProperty('--background-color', '#e8e8e8');
    root.style.setProperty('--text-color', '#0d0d0d');
    root.style.setProperty('--icon-filter', 'invert()');
    lightModeButton.style.display = 'none';
    darkModeButton.style.display = 'inline';
    document.getElementById("header").style.filter = 'none';
}

darkModeButton.onclick = function() {
    root.style.setProperty('--background-color', '#0d0d0d');
    root.style.setProperty('--text-color', '#e8e8e8');
    root.style.setProperty('--icon-filter', 'none');
    lightModeButton.style.display = 'inline';
    darkModeButton.style.display = 'none';
    document.getElementById("header").style.filter = 'invert()';
}