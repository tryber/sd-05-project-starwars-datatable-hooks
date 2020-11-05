import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterOrder = () => {
  const {
    columns,
    setSortOrder,
    radio,
    setAtribute,
  } = useContext(StarWarsContext);
  const handleSort = () => {
    if (radio[0].checked === true) {
      setSortOrder(true);
    }
    if (radio[1].checked === true) {
      setSortOrder(false);
    }
  };
  const handleSortColumn = (e) => {
    setAtribute(e.target.value);
  };
  return (
    <div>
      <select data-testid="column-sort" onChange={handleSortColumn} name="orderColumn">
        <option value="">Colunas</option>
        {columns.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
      <input type="radio" data-testid="column-sort-input-asc" name="order" value="" /* onClick={handleSort} */ />
      <label htmlFor="asc">ASC</label>
      <input type="radio" data-testid="column-sort-input-desc" name="order" value="" /* onClick={handleSort} */ />
      <label htmlFor="dcs">DCS</label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={handleSort}
      >
          Ordenar
        </button>
    </div>
  );
};

export default FilterOrder;
