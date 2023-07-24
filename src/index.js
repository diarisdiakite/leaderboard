import './style.css'
import { displayScores } from './modules/eventFunctions/displayScores';
import footerText from './modules/globalElements/footer.js';


const listSubtitle = document.getElementById('list-subtitle')
const refreshButton = document.createElement('button');
refreshButton.classList.add('button', 'add-button')
refreshButton.textContent = 'Refresh';
listSubtitle.appendChild(refreshButton);

displayScores();


const addButton = document.querySelector();
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