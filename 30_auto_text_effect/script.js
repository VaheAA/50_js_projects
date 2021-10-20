const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'The oppressed are allowed once every few years to decide which particular representatives of the oppressing class are to represent and repress them';

let index = 1;
let speed = 300 / speedEl.value;

writeText();


function writeText() {
    textEl.innerText = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 1;
    }

    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
});