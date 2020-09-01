const APIurl = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchAPI = () =>
  fetch(APIurl).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

export default fetchAPI;
