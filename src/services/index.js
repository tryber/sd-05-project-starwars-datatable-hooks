// requisição de API - referência execício GoT (aula 16.4)

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const requestAPI = () => (
  fetch(URL)
    .then((response) => (
      response.json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
);
