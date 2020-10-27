import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const NumericFilter = () => {
  const { column, comparison, value,
    numericFilter, setNumericFilter,
    controller, setController,
    filterColumns, setColumn,
    setComparison, setValue,
  } = useContext(StarWarsContext);

  const handleColumn = (e) => setColumn(e.target.value);
  const handleComparison = (e) => setComparison(e.target.value);
  const handleValue = (e) => setValue(e.target.value);
  const ClickHandler = () => {
    const col = { ...{ column } };
    if (controller[col.column] === true) {
      setNumericFilter([...numericFilter, {
        column, comparison, value,
      }]);
      setController({ ...controller, [column]: false });
    } else { alert('filtro repetido'); }
  };
  return (
    <div>
      <select data-testid="column-filter" onChange={handleColumn} name="column">
        <option value="">Colunas</option>
        {filterColumns.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>

      <select data-testid="comparison-filter" /* value={} */
      onChange={handleComparison} name="comparison">
        <option value="">Comparação</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input name="input" /* value={} */ type="text"
      data-testid="value-filter" onChange={handleValue} />

      <button data-testid="button-filter" onClick={ClickHandler}>
        Filtrar
      </button>
    </div>
  );
};

export default NumericFilter;
