import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const Cabecalho = () => {
  const {
    data,
    cabecalho,
    setCabecalho,
  } = useContext(StarWarsContext);

  useEffect(() => {
    setCabecalho(Object.keys(data[0]).filter((titulo) => (titulo !== 'residents')));
  }, []);

  return (
    <thead>
      <tr>
        {cabecalho.map((titulo) => (
          <th key={Math.floor(Math.random() * 0x100000)}>{titulo}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Cabecalho;
