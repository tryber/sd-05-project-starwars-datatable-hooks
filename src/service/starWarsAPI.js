// const url = 'https://swapi-trybe.herokuapp.com/api/planets';
const url = 'https://swapi.dev/api/planets/';
// codigo elaborado junto com Hamaji e Luis Medeiros e PR do rafaelqleite
// uso de try-catch para lidar com erros
// função assincrona com o uso de await para promises usadas

export default async function starWarsAPI() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
