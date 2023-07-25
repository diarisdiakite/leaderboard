export const gameId = 'nIHo0pwnaMtut7mvcpRz';
export const gameUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}`;
export const scoresUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

export const fetchers = async () => {
  const fetchGameUrl = fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}`);
  const fetchScoresUrl = fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);

  try {
    const responses = await Promise.all([fetchGameUrl, fetchScoresUrl]);
    const fetchResults = responses.map((response) => `${response.url}: ${response.status}`);
    return fetchResults;
  } catch (error) {
    console.error(`Failed to fetch: ${error}`);
    throw error;
  }
};
