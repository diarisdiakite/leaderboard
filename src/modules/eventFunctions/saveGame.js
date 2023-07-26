import displayWinners from "./displayWinners";

const formElements = document.getElementById('form-elements');
const displayResults = document.getElementById('display-results')
//const mainContainer = document.getElementsByClassName('feature-container')
const saveGameEventFunction = () => {
  formElements.classList.add('hide');
  displayResults.classList.remove('hide');
  displayWinners();
}

export default saveGameEventFunction;