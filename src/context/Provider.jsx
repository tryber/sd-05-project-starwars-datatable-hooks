import React, { useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function sortingString(column, planets, testOrder) {
  const planet = planets.sort((a, b) => {
    let x;
    let y;
    // if (column === 'films') {
    //   // x = a[column].sort().reverse()[0].toLowerCase();
    //   // y = b[column].sort().reverse()[0].toLowerCase();
    // } else {
      x = a[column].toLowerCase();
      y = b[column].toLowerCase();
    // }

    if (x < y) {
      return -1 * testOrder;
    }
    if (x > y) {
      return 1 * testOrder;
    }
    return 0;
  });
 return planet;
}

const sortingColumn = (planets, sort, column, callback) => {
  let testOrder = 1;
  if (sort === 'DESC') testOrder = -1;
  if (column === 'name' || column === 'climate' || column === 'edited' || column === 'gravity'
  || column === 'terrain' || column === 'url' || column === 'films' || column === 'created') {
    // funcao pra fazer um sort() em strings pura
    const planet = sortingString(column, planets, testOrder);
    callback([...planet]);
  }

  if (sort === 'ASC') {
    callback([...planets.sort((a, b) => (a[column] - b[column]))]);
  } // aqui sort() pra comparar string numeros dependendo do sort attribute( ASD, DESC)
  if (sort === 'DESC') {
    callback([...planets.sort((a, b) => (b[column] - a[column]))]);
  }
};

function Provider(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [currentFilter, setCurrentFilter] = useState({ column: '', comparison: '', value: '' });
  const [order, setOrder] = useState({ column: 'Name', sort: 'ASD' });

  function addFilter(filter) {
    setFilterByNumericValues([...filterByNumericValues, filter]);
  }

  function excludeFilterButton(id) {
    setFilterByNumericValues([...filterByNumericValues.filter(({ column }) => column !== id)]);
  }

  const contextValue = {
    data,
    setData,
    error,
    setError,
    isFetching,
    setIsFetching,
    filterByNumericValues,
    setFilterByNumericValues,
    filterByName,
    setFilterByName,
    currentFilter,
    setCurrentFilter,
    order,
    setOrder,
    addFilter,
    excludeFilterButton,
    sortingColumn,
  };

  return (
    <StarWarsContext.Provider value={contextValue}>
      {props.children}
    </StarWarsContext.Provider>
  );
}

export default Provider;


Provider.propTypes = {
  children: propTypes.objectOf(Object).isRequired,
  // planets: propTypes.arrayOf(propTypes.object),
  // sort: propTypes.string.isRequired,
  // column: propTypes.string.isRequired,

};
