// https://medium.com/javascript-in-plain-english/react-hooks-how-to-use-useeffect-ecea3e90d84f
const apiUrl = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function FetchData() {
  // const { setData } = useContext(StarWarsContext);

  return fetch(apiUrl)
      .then((response) => response.json())
      .then(
        (data) => data.results,
        (error) => { console.log(`erro: ${error.message}`) },
      );
}
