import getScores from "./getScores.js";
//import axios from "axios";


const displayAllScores = document.querySelector('#list');
export const displayScores = async () => {
  
  try{

    const scores = await getScores(); 
    console.log(scores);

    scores.forEach((score) => {
      

      const scoreCard = document.createElement('li');
      const removeButton = document.createElement('button');
      removeButton.setAttribute('class', 'button');
      removeButton.classList.add('my-button-container');

      const myScoreElements = document.createElement('div')
      myScoreElements.textContent = `${score.user}: ${score.score}`;
          
      scoreCard.appendChild(myScoreElements);
      
      displayAllScores.appendChild(scoreCard);
      scoreCard.classList.add('feature-stack');
    })
    //}
  } catch (error) {
    console.error('Error populating scores:', error);
  }
  
};




