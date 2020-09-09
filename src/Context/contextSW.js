import React, { createContext, useState } from 'react';
import propType from 'prop-types';

const Context = createContext();
const { Provider } = Context;

function ContextSW(props) {
  const [name, setName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [col, SetCol] = useState('');
  const [comp, SetComp] = useState('');
  const [val, SetVal] = useState(undefined);
  const [order, setOrder] = useState({ column: 'Name', sort: 'ASC' });
  const [header, setHeader] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [erro, setErro] = useState('');
  const { children } = props;
  const add = () => {
    const filtro = { column: col, comparison: comp, value: val };
    const oldFilters = filterByNumericValues;
    setFilterByNumericValues([...oldFilters, filtro]);
  };
  const context = {
    name,
    setName,
    filterByNumericValues,
    setFilterByNumericValues,
    order,
    setOrder,
    header,
    setHeader,
    isLoading,
    setIsLoading,
    data,
    setData,
    erro,
    setErro,
    add,
    SetCol,
    SetComp,
    SetVal,
  };
  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
}

export { ContextSW as Provider, Context };

Context.propType = { children: propType.element.isRequired}