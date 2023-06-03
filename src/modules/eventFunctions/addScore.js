import axios from 'axios';
//import { displayScores } from './displayScores.js';
import { scoresLink } from '../../global.js';

const addEventFunction = async () => {
  let userInput = document.getElementById('user').value;
  let scoreInput = document.getElementById('score').value;

  try {
    //No function in here; Put the link
    const response = await axios.post(scoresLink, {
      user: userInput,
      score: scoreInput
    });
    return response.data.result;
  } catch (error) {
    console.error(`Could not create score: ${error}`);
    throw error;
  }

}
//displayScores();
//Scores are not displayed on submit addScores

/* 
const addEventFunction = async(user, score) => {
  fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: user,
      score: score
      }),
    headers: {
      'Content-type': 'application/json, charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}; */
export default addEventFunction;