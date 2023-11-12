// function to smoothly scroll to the section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const sectionPosition = section.offsetTop - headerHeight;

            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth',
            });
        }
    }

// add click event listeners to the buttons
const buttons = document.querySelectorAll('.header-button');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = event.target.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});


// responsive menu toggle
const menuToggle = document.getElementById('menuToggle');
const headertext = document.querySelector('.headertext');

menuToggle.addEventListener('click', () => {
    headertext.classList.toggle('show-menu');
});


