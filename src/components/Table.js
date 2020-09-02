import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './Table.css';

function dynamicsort(key, order) {
  //  ref2 modificada.
  let sortOrder = 1;
  if (order === 'DESC') {
    sortOrder = -1;
  }
  let varA;
  let varB;

  return function (a, b) {
    if (key === 'population' || key === 'orbital_period' ||
      key === 'diameter' || key === 'rotation_period' || key === 'surface_water') {
      varA = parseInt(a[key], 10);
      varB = parseInt(b[key], 10);
    } else {
      varA = a[key].toUpperCase();
      varB = b[key].toUpperCase();
    }

    //  a should come before b in the sorted order
    if (varA < varB) {
      return -1 * sortOrder;
    //  a should come after b in the sorted order
    } else if (varA > varB) {
      return 1 * sortOrder;
    }
    return 0;
  };
}

function ManyFilter() {
  const { data, filterParameter, filterNumeric, filterSortedColumn,
    filterSortedOrder } = useContext(StarWarsContext);
  const colunaSort = (filterSortedColumn.column === 'Name') ? 'name' : filterSortedColumn.column;
  //  Ternário manobra técnica, pois há uma diferença entre o nome do campo e
  //  a forma com o que store deve armazenar o column. (requisito dos testes)
  let array = data.slice(); //  copia o conteudo do data, sem a referencia a data
  //  assim, não se altera o estado devido a ligação por endereço (sem mutação)
  array.sort(dynamicsort(colunaSort, filterSortedOrder.sort));
  if (filterParameter.name !== '') {
    array = data.filter((item) => item.name.includes(filterParameter.name));
  }
  if (filterNumeric.length > 0 && array.length > 1) {
    filterNumeric.forEach(({ column, comparison, value }) => {
      switch (comparison) {
        case ('maior que'):
          //  array.forEach((arrayItem) => console.log(typeof(arrayItem[column])));
          array = array.filter((arrayItem) => parseInt(arrayItem[column], 10) > value);
          break;
        case ('menor que'):
          array = array.filter((arrayItem) => parseInt(arrayItem[column], 10) < value);
          break;
        case ('igual a'):
          array = array.filter((arrayItem) => arrayItem[column] === value);
          break;
        default:
          break;
      }
    });
  }
  return array;
}

function RenderTableData() {
  const array = ManyFilter();

  return (array.map((item) => (
    <tr key={item.name}>
      <td data-testid="planet-name">{item.name}</td>
      <td>{item.rotation_period}</td>
      <td>{item.orbital_period}</td>
      <td>{item.diameter}</td>
      <td>{item.climate}</td>
      <td>{item.gravity}</td>
      <td>{item.terrain}</td>
      <td>{item.surface_water}</td>
      <td>{item.population}</td>
      <td>{item.residents}</td>
      <td>{item.films}</td>
      <td>{item.created}</td>
      <td>{item.edited}</td>
    </tr>))
  );
}

function Table() {
  const { data, isFetching } = useContext(StarWarsContext);
  if (!isFetching && data.length > 1) {
    const header = Object.keys(data[0]);
    header.pop();
    return (
      <table className="tabela">
        <thead>
          <tr>{header.map((item) => <th key={item}>{item}</th>)}</tr>
        </thead>
        <tbody>
          { <RenderTableData /> }
          {/* antes estava como RenderTableData() - ref1 */}
        </tbody>
      </table>
    );
  }
  return <div>loading...</div>;
}

export default Table;

//  ref1: https://kentcdodds.com/blog/dont-call-a-react-function-component
