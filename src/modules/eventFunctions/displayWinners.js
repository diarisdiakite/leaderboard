import getScores from './getScores.js';
import 'animate.css';


const displayWinners = async () => {
  const displayResults = document.getElementById('display-results');
  const winner1 = document.getElementById('winner-1');
  winner1.classList.add('my-winner-animation')
  const winner2 = document.getElementById('winner-2');
  const winner3 = document.getElementById('winner-3');

  try {
    const scores = await getScores();
    const validScores = scores.filter((score) => score.user !== null);

    validScores.sort((a, b) => b.score - a.score);

    // Get the top 3 winners
    const top3Winners = validScores.slice(0, 3);
    winner1.textContent = `${top3Winners[0].user}: ${top3Winners[0].score}`;
    winner2.textContent = `${top3Winners[1].user}: ${top3Winners[1].score}`;
    winner3.textContent = `${top3Winners[2].user}: ${top3Winners[2].score}`;

    displayResults.classList.remove('hide');
    return top3Winners;
  } catch (error) {
    const errorMessage = `Couldn't get the scores ${error}`;
    return Promise.reject(errorMessage);
  }
};

export default displayWinners;