import getScores from "./getScores.js";

const displayWinners = async () => {
  const displayResults = document.getElementById('display-results');
  const winner1 = document.getElementById('winner-1');
  const winner2 = document.getElementById('winner-2');
  const winner3 = document.getElementById('winner-3');

  try {
    const scores = await getScores();
    const validScores = scores.filter((score) => score.user !== null);
    
    // Sort scores in descending order
    validScores.sort((a, b) => b.score - a.score);
    
    // Get the top 3 winners
    const top3Winners = validScores.slice(0, 3);

    // Update the HTML elements with the names and scores of the winners
    winner1.textContent = `${top3Winners[0].user}: ${top3Winners[0].score}`;
    winner2.textContent = `${top3Winners[1].user}: ${top3Winners[1].score}`;
    winner3.textContent = `${top3Winners[2].user}: ${top3Winners[2].score}`;

    // Show the display results section
    displayResults.classList.remove('hide');

  } catch (error) {
    const errorMessage = `Couldn't get the scores ${error}`;
    return Promise.reject(errorMessage);
  }
};

export default displayWinners;