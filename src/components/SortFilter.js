import React, { useContext, useState } from 'react';
import SWContext from '../context/swContext';

function SortFilter() {
  const { data: header, setOrder } = useContext(SWContext);
  const [column, setColumn] = useState('Name');
  const [sort, setSort] = useState('ASC');

  return (
    <div>
      <select data-testid="column-sort" onChange={(event) => setColumn(event.target.value)}>
        {Object.keys(header[0]).map((cabecalho) =>
          (cabecalho === 'residents' ? null : <option key={cabecalho}>{cabecalho}</option>),
        )}
      </select>
      <label htmlFor="ASC">ASC</label>
      <input
        type="radio"
        id="ASC"
        data-testid="column-sort-input-asc"
        name="sort"
        value="ASC"
        defaultChecked
        onClick={(event) => setSort(event.target.value)}
      />
      <label htmlFor="DESC">DESC</label>
      <input
        type="radio"
        id="DESC"
        data-testid="column-sort-input-desc"
        name="sort"
        value="DESC"
        onClick={(event) => setSort(event.target.value)}
      />
      <button data-testid="column-sort-button" onClick={() => setOrder({ column, sort })}>
        ORDENAR
      </button>
    </div>
  );
}

export default SortFilter;
