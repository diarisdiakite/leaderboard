import axios from 'axios';
import { scoresUrl } from '../globalElements/global.js';
import { setNewDataAdded } from '../globalElements/dataUtils.js';
// import displayScores from './displayScores.js';

const addScoreEventFunction = async () => {
  const userInput = document.getElementById('user').value;
  const scoreInput = document.getElementById('score').value;

  try {
    const response = await axios.post(scoresUrl, {
      user: userInput,
      score: scoreInput,
    });
    setNewDataAdded(false);
    window.location.reload();
    return response.data.result;
  } catch (error) {
    const errorMessage = `Couldn't create the score, ${error}`;
    return Promise.reject(errorMessage);
  }
};
/* To display scores on add,
  (1) call displayScores at the end of the function
  (2) + Disable refreshButton in index.js
// displayScores();
*/
export default addScoreEventFunction;