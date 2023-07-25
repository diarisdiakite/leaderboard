import './style.css';
import displayScores from './modules/eventFunctions/displayScores.js';
import addEventFunction from './modules/eventFunctions/addScore.js';
import footerText from './modules/globalElements/footer.js';

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

const clearInputFields = () => {
  document.getElementById('user').value = '';
  document.getElementById('score').value = '';
};

addButton.addEventListener('click', async () => {
  await addEventFunction();
  clearInputFields();
});

const myFooter = document.getElementById('footer-section');
myFooter.innerHTML += footerText;

