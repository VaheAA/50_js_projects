const btn = document.querySelector('#btn');
const toasts = document.querySelector('#toasts');

const messages = [
    'Message 1',
    'Message 2',
    'Message 3',
    'Message 4',
    'Message 5',
    'Message 6',
    'Message 7',
];

const types = [
    'info',
    'error',
    'success'
];

btn.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandomTypes());
    notif.innerText = message ? message : getRandomMessage();
    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 2000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomTypes() {
    return types[Math.floor(Math.random() * types.length)];

}