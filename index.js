const lightModeButton = document.getElementById("light-mode-button")
const darkModeButton = document.getElementById("dark-mode-button")
const name = document.getElementById("name")
const headings = document.querySelectorAll('.headings')
const bio = document.getElementById("bio")
const normalText = document.querySelectorAll('.normal-text')

function setHeadingsTextColor(color) {
    headings.forEach((h2) => {
        h2.style.color = color
    })
}

function setNormalTextColor(color) {
    normalText.forEach((span) => {
        span.style.color = color
    })
}

lightModeButton.onclick = function() {
    document.body.style.background = '#e8e8e8';
    name.style.color = '#0d0d0d';
    bio.style.color = '#0d0d0d';
    setHeadingsTextColor('#0d0d0d');
    setNormalTextColor('#0d0d0d');
    lightModeButton.style.display = 'none';
    darkModeButton.style.display = 'inline';
    document.getElementById("header").style.filter = 'none';
}

darkModeButton.onclick = function() {
    document.body.style.background = '#0d0d0d';
    name.style.color = '#e8e8e8';
    bio.style.color = '#e8e8e8';
    setHeadingsTextColor('#e8e8e8');
    setNormalTextColor('#e8e8e8');
    lightModeButton.style.display = 'inline';
    darkModeButton.style.display = 'none';
    document.getElementById("header").style.filter = 'invert()';
}