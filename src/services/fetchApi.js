const api = 'https://swapi-trybe.herokuapp.com/api/planets/';

export function handleAsyncFetch() {
  return fetch(api)
    .then((response) => response.json())
    .then(
      (json) => json.results,
      (error) => console.log(error),
    );
}
