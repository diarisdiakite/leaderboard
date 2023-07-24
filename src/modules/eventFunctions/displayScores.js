const scores = [
  {
    id: 1,
    user: "Didy",
    score: 100
  },
  {
    id: 2,
    user: "Chadid",
    score: 100
  },
  {
    id: 3,
    user: "LWD",
    score: 100
  }
]

const displayAllScores = document.querySelector('#list');
export const displayScores = () => {
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
};