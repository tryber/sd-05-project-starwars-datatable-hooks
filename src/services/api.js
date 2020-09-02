function fetchSWAPI() {
  return fetch('https://swapi.dev/api/planets/')
    .then((response) => response.json())
    .then((data) => data.results);
}

export default fetchSWAPI;
