const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = () =>
  fetch(url).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

export default fetchPlanets;