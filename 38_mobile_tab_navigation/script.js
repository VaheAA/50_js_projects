const contents = document.querySelectorAll('.content');
const navBtns = document.querySelectorAll('nav ul li');

navBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        hideAllContents();
        hideAllItems();

        btn.classList.add('active');
        contents[index].classList.add('show');
    });
});

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'));
}

function hideAllItems() {
    navBtns.forEach(btn => btn.classList.remove('active'));
}