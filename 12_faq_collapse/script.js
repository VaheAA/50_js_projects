const btns = document.querySelectorAll('.faq-toggle')
const questions = document.querySelectorAll('.faq');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        deleteActive()
        btn.parentNode.classList.add('active');
    })
})

function deleteActive() {
    questions.forEach(question => {
        question.classList.remove('active');
    })
}