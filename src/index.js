import './style.css';
import displayScores from './modules/eventFunctions/displayScores.js';
import addScoreEventFunction from './modules/eventFunctions/addScore.js';
import footerText from './modules/globalElements/footer.js';
import displayWinners from './modules/eventFunctions/displayWinners';
import saveGameEventFunction from './modules/eventFunctions/saveGame';

const saveGame = document.getElementById('save-game')
const saveGameButton = document.createElement('button');
saveGameButton.classList.add('add-button', 'save-game-button')
saveGameButton.textContent = 'Save your game and see the winners'
saveGame.appendChild(saveGameButton);


let newDataAdded = false;

const listSubtitle = document.getElementById('list-subtitle');
const refreshButton = document.createElement('button');
refreshButton.classList.add('button', 'add-button');
refreshButton.textContent = 'Refresh';
listSubtitle.appendChild(refreshButton);
refreshButton.addEventListener('click', async (e) => {
  e.preventDefault();
  if (!newDataAdded) {
    await displayScores();
    newDataAdded = true;
  }
});

const addScoreButton = document.querySelector('#addScore');
const clearInputFields = () => {
  document.getElementById('user').value = '';
  document.getElementById('score').value = '';
};

addScoreButton.addEventListener('click', async () => {
  await addScoreEventFunction();
  clearInputFields();
});

saveGameButton.addEventListener('click', async () => {
  await saveGameEventFunction();
})

const myFooter = document.getElementById('footer-section');
myFooter.innerHTML += footerText;
