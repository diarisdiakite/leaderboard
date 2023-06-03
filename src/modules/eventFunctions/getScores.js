import axios from 'axios';
import { scoresLink } from '../../global';

const getScores = async () => {
  try {
    const response = await axios.get(scoresLink);
    const scores = response.data.result;  //REMOVE RESULT IN YOUR LOCAL ENVIRONEMENT
    
    // Sort the scores by index 
    //scores.sort((a, b) => a.index - b.index);  //UNCOMMENT IN YOUR LOCAL ENVIRONMENT
    return scores;
  } catch (error) {
    console.error(`Could not get scores: ${error}`);
    throw error;
  }
}

export default getScores;
