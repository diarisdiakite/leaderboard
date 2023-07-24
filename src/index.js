import './style.css'
import { displayScores } from './modules/eventFunctions/displayScores.js';
import addEventFunction from './modules/eventFunctions/addScore.js';
import footerText from './modules/globalElements/footer.js';


/* 
  Only EventListeners are listed here
*/

const listSubtitle = document.getElementById('list-subtitle')
const refreshButton = document.createElement('button');
refreshButton.classList.add('button', 'add-button')
refreshButton.textContent = 'Refresh';
listSubtitle.appendChild(refreshButton);
refreshButton.addEventListener('click', async (e) => {
  e.preventDefault();
  await displayScores()
  //window.location.reload();
})

const addButton = document.querySelector('#addScore');
const clearInputFields = () => {
  document.getElementById('user').value = '';
  document.getElementById('score').value = '';
};

addButton.addEventListener('click', async () => {
  await addEventFunction();
  clearInputFields();
});


// footer
const myFooter = document.getElementById('footer-section');
myFooter.innerHTML += footerText;