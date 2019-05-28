const landing = document.querySelector('.landing');
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const projets_link = document.querySelector('.projets_link');
const skills_link = document.querySelector('.skills_link');
const icons = document.querySelectorAll('.skills > ul > li > i');
const projects = document.querySelectorAll('.projects > ul > li');
const goTop = document.querySelector('#top');

function scrollToCoord() {
    if (window.scrollY != 0) {
        setTimeout(() => {
            window.scrollTo(0, window.scrollY - 30);
            scrollToCoord();
        }, 5);
    }
}

function doScrolling(elementY, duration) { 
    var startingY = window.pageYOffset;
    var diff = elementY - startingY;
    var start;

    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        // Elapsed milliseconds since start of scrolling.
        var time = timestamp - start;
        // Get percent of completion in range [0, 1].
        var percent = Math.min(time / duration, 1);

        window.scrollTo(0, startingY + diff * percent);

        // Proceed with animation as long as we wanted it to.
        if (time < duration) {
        window.requestAnimationFrame(step);
        }
    })
}



goTop.addEventListener('click', scrollToCoord);
projets_link.addEventListener('click', () => doScrolling(section1.offsetTop, 500));
skills_link.addEventListener('click', () => doScrolling(section2.offsetTop, 500));
icons.forEach(icon => icon.addEventListener('mouseover', () => {icon.classList.add('colored')}));
icons.forEach(icon => icon.addEventListener('mouseout', () => {icon.classList.remove('colored')}));
projects.forEach(project => project.addEventListener('mouseover', () => {project.classList.add('open')}));
projects.forEach(project => project.addEventListener('mouseout', () => {project.classList.remove('open')}));
