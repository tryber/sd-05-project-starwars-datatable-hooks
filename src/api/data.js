// Referencia:
// https://course.betrybe.com/front-end/js-asynchronous/promises#vamos-fazer-juntos
// A construção da função verificaFetch() foi construida através da leitura da matéria.

// const dataAPI = 'https://swapi-trybe.herokuapp.com/api/planets/';

const requisicaoAPI = () =>
fetch('https://swapi-trybe.herokuapp.com/api/planets/')
.then((resposta) => resposta.json())
.then((resposta) => resposta.results)
.catch((erro) => console.error(`A chamada à API apresentou erro: ${erro}`));

export default requisicaoAPI;
