import axios from 'axios';
import { scoresUrl } from '../../global.js';

const addEventFunction = async () => {
  let userInput = document.getElementById('user').value;
  let scoreInput = document.getElementById('score').value;

  try {
    const response = await axios.post(scoresUrl, {
      user: userInput,
      score: scoreInput
    });
    window.location.reload()
    return response.data.result;
  } catch (error) {
    console.error(`Could not create score: ${error}`);
    throw error;
  }

}

export default addEventFunction;