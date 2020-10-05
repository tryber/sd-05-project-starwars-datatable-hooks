import React, { Component } from 'react';
import Body from './Body';
import Head from './Head';

function pegaFiltro(filtroPlanetario, planetas) {
  const { value, comparison, column } = filtroPlanetario;
  if (comparison === 'maior que') {
    return planetas[column] * 1 > value * 1;
  } else if (comparison === 'menor que') {
    return planetas[column] * 1 < value * 1;
  }
  return planetas[column] * 1 === value * 1;
}
const colunasNumericas = [
  'population',
  'rotation_period',
  'diameter',
  'surface_water',
  'orbital_period',
];

// Live com Hugão meu ídolo

function ordenaCol(filtroPorPlaneta, reduxOrder) {
  if (colunasNumericas.includes(reduxOrder.column)) {
    if (reduxOrder.sort === 'ASC') {
      return filtroPorPlaneta.sort((a, b) =>
        a[reduxOrder.column.toLowerCase()] - b[reduxOrder.column.toLowerCase()],
      );
    }
    return filtroPorPlaneta.sort((b, a) =>
      a[reduxOrder.column.toLowerCase()] - b[reduxOrder.column.toLowerCase()],
    );
  }
  if (reduxOrder.sort === 'ASC') {
    return filtroPorPlaneta.sort((a, b) =>
      (a[reduxOrder.column.toLowerCase()] > b[reduxOrder.column.toLowerCase()] ? 1 : -1),
    );
  }
  return filtroPorPlaneta.sort((a, b) =>
    (a[reduxOrder.column.toLowerCase()] < b[reduxOrder.column.toLowerCase()] ? 1 : -1),
  );
}

export default class Table extends Component {
  componentDidMount() {
    const { getFetch } = this.props;
    getFetch();
  }

  render() {
    const { planetas, name, filtragemPlanetas, reduxOrder } = this.props;

    /*     consulta filter sem modificar anterior:
    https://desenvolvimentoparaweb.com/javascript/map-filter-
    reduce-javascript/#:~:text=%2F%2F%20array.-,filter
    (%20(%20elem%2C%20index%2C%20arr%20)%20%3D%3E%20arr,
    elemento%20ser%C3%A1%20mantido%20ou%20descartado. */

    let filtroPorPlaneta = planetas.filter((planeta) => planeta.name.indexOf(name) >= 0);
    filtragemPlanetas.forEach((filtro) => {
      filtroPorPlaneta = filtroPorPlaneta.filter((planeta) => pegaFiltro(filtro, planeta));
    });
    filtroPorPlaneta = ordenaCol(filtroPorPlaneta, reduxOrder);

    // filtroPorPlaneta = chama a func que fará o filtro
    return (
      <div>
        StarWars Datatable with Filters
        <br />
        <br />
        <br />
        <br />
        <br />
        <table>
          <Head />
          {filtroPorPlaneta.map((planeta) => (
            <Body data={planeta} />
          ))}
        </table>
      </div>
    );
  }
}
