const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const btn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';


ratingsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    }

    if (e.target.classList.contains('rating')) {
        removeActive();
        e.target.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
});

btn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We will use your feedback to improve our customer support.</p>
    `;
});

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}
