export default function fetchStarWarsAPI() {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json())
    .catch((erro) => console.log(erro));
}
