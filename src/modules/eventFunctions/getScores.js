import axios from 'axios';
import { scoresUrl } from '../globalElements/global.js';

const getScores = async () => {
  try {
    const response = await axios.get(scoresUrl);
    const scores = response.data.result;

    return scores;
  } catch (error) {
    const errorMessage = `Couldn't create the score, ${error}`;
    return Promise.reject(errorMessage);
  }
};

export default getScores;
