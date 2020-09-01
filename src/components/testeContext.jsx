import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

export default function BananaContext() {
  const { data, fetchPlanets } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanets();
    console.log(data);
  }, []);

  return (
    <div>
      <p>
        Testando fetch {console.log(data)}
      </p>
    </div>
  );
}
