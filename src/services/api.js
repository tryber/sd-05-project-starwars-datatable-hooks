const APIURL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const planetAPI = () => (
  fetch(APIURL)
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
);

export default planetAPI;
