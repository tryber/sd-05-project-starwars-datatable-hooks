// Requisição da API já com o endpoint solicitado: planets
// Montagem estrutural: organização, reducer, store, components,
// Requisição à API - referência aula 16-4 (Redux-Filter)

const APIURL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const planetAPI = () => (
  fetch(APIURL)
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data.results) : Promise.reject(data)))
    ))
);

export default planetAPI;