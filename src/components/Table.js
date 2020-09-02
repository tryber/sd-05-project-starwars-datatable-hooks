import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const columns = [
  'Nome',
  'Período de rotação',
  'Perído de órbita',
  'Diâmetro',
  'Clima',
  'Gravidade',
  'Terreno',
  'Água na superfície',
  'População',
  'Filmes',
  'Criado',
  'Editado',
  'URL',
];

const Table = () => {
  const { filteredData, loading } = useContext(StarWarsContext);
  if (loading) return <h1>Carregando...</h1>;
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => <th>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((planet) => (
          <tr>
            {Object.keys(planet).map((key) => (key !== 'residents' ? <td>{planet[key]}</td> : null))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
