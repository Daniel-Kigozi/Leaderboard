import './style.css';
import './modules/post.js';
import getScores from './modules/get.js';


const Resultscored = document.querySelector('.result-scored');
const Refresh = document.querySelector('#btnrefresh');
Refresh.addEventListener('click', async () => {
  const scoredResults = await getScores();
  Resultscored.innerHTML = '';
  scoredResults.forEach((element) => {
    Resultscored.innerHTML += `
          <p> ${element.user}: ${element.score}</p>
          `;
  });
});
window.onload = async () => {
  const scoredResults = await getScores();
  Resultscored.innerHTML = '';
  scoredResults.forEach((element) => {
    Resultscored.innerHTML += `
          <p> ${element.user}: ${element.score}</p>
          `;
  });
};