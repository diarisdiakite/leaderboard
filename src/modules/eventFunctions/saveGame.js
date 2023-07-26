import displayWinners from './displayWinners.js';

const formElements = document.getElementById('form-elements');
const displayResults = document.getElementById('display-results');

const saveGameEventFunction = () => {
  formElements.classList.add('hide');
  displayResults.classList.remove('hide');
  displayWinners();
};

export default saveGameEventFunction;