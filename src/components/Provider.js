import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

const SWProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);
  const [sortColumn, setSortColumn] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [removerFiltroDaTela, setRemoverFiltroDaTela] = useState([]);
  const [order, setOrder] = useState({
    column: 'Name',
    sort: 'ASC',
  });
  const context = {
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    sortColumn,
    setSortColumn,
    data,
    setData,
    isFetching,
    setIsFetching,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    order,
    setOrder,
    removerFiltroDaTela,
    setRemoverFiltroDaTela,
    sortOrder,
    setSortOrder,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SWProvider;
