// Referencia:
// https://course.betrybe.com/front-end/js-asynchronous/promises#vamos-fazer-juntos
// A construção da função verificaFetch() foi construida através da leitura da matéria.

/* const requisicaoAPI = () =>
fetch('https://swapi-trybe.herokuapp.com/api/planets/')
.then((resposta) => resposta.json())
.then((data) => data.results)
.catch((erro) => console.error(`A chamada à API apresentou erro: ${erro}`));

export default requisicaoAPI; */

const endPoint = {
  planets: 'https://swapi-trybe.herokuapp.com/api/planets/',
};

async function getPlanets() {
  const urlPlanets = endPoint.planets;
  const response = await fetch(urlPlanets);
  const data = await response.json();
  // console.log('esse é o data: ', data);
  return data.results;
}

export default getPlanets;
