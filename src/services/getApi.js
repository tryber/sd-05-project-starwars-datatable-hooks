const swApi = 'https://swapi-trybe.herokuapp.com/api/planets';

function getApi() {
  return fetch(swApi).then((response) => response.json().then((data) => data));
}

export default getApi;
