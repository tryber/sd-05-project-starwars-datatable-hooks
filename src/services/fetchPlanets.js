function fetchPlanets() {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json()
    .then((object) => (response.ok ? Promise.resolve(object) : Promise.reject(object))),
  );
}

export default fetchPlanets;
