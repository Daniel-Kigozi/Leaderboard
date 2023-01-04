const Inputscore = document.querySelector('.scores');
const Inputname = document.querySelector('.naming');
const Submitbtn = document.querySelector('#submit');
const postData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CTjbI4rQbrtKmADwNsjA/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: Inputname.value,
      score: Inputscore.value,
    }),
  });
  const data = await response.json();
  return data;
};
Submitbtn.addEventListener('click', () => {
  if (Inputname.value !== '' && Inputscore.value !== '') {
    postData();
    Inputname.value = '';
    Inputscore.value = '';
  }
});