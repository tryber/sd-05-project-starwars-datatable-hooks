export default function planetsAPI() {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json').then((response) =>
    response.json()
  );
}
