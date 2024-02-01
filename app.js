const noBtn = document.querySelector('.no');
const yesBtn = document.querySelector('.yes');
const result = document.querySelector('.result');

let value = 0;

noBtn.addEventListener('mouseover', () => {
    toggleTranslation();
});

noBtn.addEventListener('touchstart', (event) => {
    // Prevent default touch event behavior
    event.preventDefault();
    toggleTranslation();
});

yesBtn.addEventListener('click', () => {
    result.style.maxHeight = '100vh';
});

function toggleTranslation() {
    if (value === 0) {
        noBtn.style.transform = 'translateX(-130%)';
        value = 1;
    } else {
        noBtn.style.transform = 'translateX(130%)';
        value = 0;
    }
}
