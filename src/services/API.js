// https://medium.com/javascript-in-plain-english/react-hooks-how-to-use-useeffect-ecea3e90d84f
import { useContext } from 'react';
import { StarWarsContext } from '../context/starWarsContext';

const apiUrl = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function FetchData() {
  const { setIsFetching, setError, setData } = useContext(StarWarsContext);
  
  //setIsFetching(true);

  return fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.results);
        setIsFetching(false);
        return setData(json.results)
      },
        (error) => {
          console.log(`erro: ${error.message}`);
          setError(error.message);
          setIsFetching(false);
        },
      );
}
