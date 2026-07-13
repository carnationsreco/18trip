const icons = document.querySelectorAll('.voiceline-icon');
icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.remove('bounce-once');
        void icon.offsetWidth; // force reflow
        icon.classList.add('bounce-once');
    });
});