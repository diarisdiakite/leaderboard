import getScores from './getScores';
import axios from 'axios';
//import { scoresUrl, gameId } from '../../global';
import { displayScores } from './displayScores';
import { scoresLink } from '../../global';

const deleteScoresFunction = async () => {
  try {
    //const response = await axios.delete(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
    let response = await axios.delete('http://localhost:3500/');
    if (response.status === 200) {
      console.log('All scores removed successfully');
    } else {
      
      response = scores.split(0, scores.length);
      return response;
      //console.log('Error removing scores');
    }
  } catch (error) {
    console.error('Error removing scores:', error);
  }
};


export default deleteScoresFunction;