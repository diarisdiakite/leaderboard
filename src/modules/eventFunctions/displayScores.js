import getScores from './getScores.js';

const displayAllScores = document.querySelector('#list');
const displayScores = async () => {
  try {
    const scores = await getScores();
    const validScores = scores.filter((score) => score.user !== '');
    validScores.sort((a, b) => a.user.localeCompare(b.user, undefined, { sensitivity: 'base' }));

    validScores.forEach((score) => {
      const scoreCard = document.createElement('li');
      const displayButton = document.createElement('button');
      displayButton.setAttribute('class', 'button');
      displayButton.classList.add('my-button-container');

      const myScoreElements = document.createElement('div');
      myScoreElements.textContent = `${score.user}: ${score.score}`;
      scoreCard.appendChild(myScoreElements);
      displayAllScores.appendChild(scoreCard);
      scoreCard.classList.add('feature-stack');
    });
    return 'Success';
  } catch (error) {
    const errorMessage = `Couldn't create the score, ${error}`;
    return Promise.reject(errorMessage);
  }
};

export default displayScores;
