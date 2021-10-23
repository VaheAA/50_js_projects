const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navTabs = document.querySelectorAll('.nav');

openBtn.addEventListener('click', () => {
    navTabs.forEach(navEl => navEl.classList.add('visible'));
});

closeBtn.addEventListener('click', () => {
    navTabs.forEach(navEl => navEl.classList.remove('visible'));
});