const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message');
const wrongLetters_el = document.getElementById('wrong-letters');
const items = document.getElementById('message');
const PlayAgainBtn = document.getElementById('play-again');


const correctLetters = [];
const wrongLetters = [];
let selectedWord = getRandomWord();

function getRandomWord() {
    const words = ["javascript","java","python","css","html","clarusway"];
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
    word_el.innerHTML = `
    ${selectedWord.split('').map(letter => `
    <div class="letter">
        ${correctLetters.includes(letter) ? letter: ''}
        </div>
        `).join('') }
        `;
   

   const w = word_el.innerText.replace(/\n/g,'');
   if (w === selectedWord) {
    popup.style.display = 'flex';
    message_el.innerText = 'Tebrikler Kazandınız.';
 }
}   


