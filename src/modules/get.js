const getScores = async () => {
    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CTjbI4rQbrtKmADwNsjA/scores');
      const data = await response.json();
      return data.result;
    } catch (error) {
      return error;
    }
  };
  export default getScores;