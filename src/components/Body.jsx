import React from 'react';

function Body(props) {
  const { data } = props;
  // console.log(data)
  if (data.length === 0) return <h1>Carregando</h1>;
  return (
    <tr>
      <td data-testid="planet-name">{data.name}</td>
      <td>{data.rotation_period}</td>
      <td>{data.orbital_period}</td>
      <td>{data.diameter}</td>
      <td>{data.climate}</td>
      <td>{data.gravity}</td>
      <td>{data.terrain}</td>
      <td>{data.surface_water}</td>
      <td>{data.population}</td>
      <td>{data.films}</td>
      <td>{data.created}</td>
      <td>{data.edited}</td>
      <td>{data.url}</td>
    </tr>
  );
}

export default Body;
