function fetchPlanets() {
  fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json()
    .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );
}

export default fetchPlanets;
