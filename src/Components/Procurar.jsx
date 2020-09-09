import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { selectionFilter, replaceFilters } from '../Actions/actions';
import OrderToMe from './order';
import '../App.css';
import { Context } from '../Context/contextSW';

const NumericOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
const comparisonOptions = ['maior que', 'menor que', 'igual a'];

function NameSearch(props) {
  return (
    <div className="flex-me column-me">
      <label htmlFor="look">Procurar</label>
      <input name="look" type="text" data-testid="name-filter" onChange={props.handlerChange} />
    </div>
  );
}

NameSearch.propTypes = { handlerChange: propTypes.func.isRequired };

function ColumnSearch(props) {
  const { SetCol } = useContext(Context);
  return (
    <div className="flex-me center-me">
      <select
        data-testid="column-filter"
        onChange={(e) => SetCol(e.target.value)}
        className="center-me"
      >
        <option value="" disabled="true" defaultValue>
          Coluna
        </option>
        {props.optionsSelect1.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
}

ColumnSearch.propTypes = { optionsSelect1: propTypes.arrayOf(propTypes.string).isRequired };

function ComparisonSearch(props) {
  const { SetComp } = useContext(Context);
  return (
    <div className="flex-me center-me">
      <select
        className="center-me"
        data-testid="comparison-filter"
        onChange={(e) => SetComp(e.target.value)}
      >
        <option value="" disabled defaultValue>
          Comparação
        </option>
        {props.optionsSelect2.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
}

ComparisonSearch.propTypes = { optionsSelect2: propTypes.arrayOf(propTypes.string).isRequired };

function ButtonAdd() {
  const { filterByNumericValues, add, SetVal } = useContext(Context);
  console.log(filterByNumericValues);
  return (
    <div className="flex-me column-me center-me">
      <input
        className="center-me"
        type="number"
        name=""
        data-testid="value-filter"
        onChange={(e) => SetVal(e.target.value)}
      />
      <button data-testid="button-filter" onClick={async () => add()} className="center-me">
        Add
      </button>
    </div>
  );
}

function FiltersBox() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(Context);
  return (
    <div className="column-me">
      {filterByNumericValues.map((e) => (
        <div data-testid="filter" key={`${e.column}`}>
          <button
            key={`${e.column}b`}
            id={e.column}
            onClick={() =>
              setFilterByNumericValues(filterByNumericValues.filter((u) => u.column !== e.column))
            }
          >
            x
          </button>
          <label
            htmlFor={e.column}
            key={`${e.column}l`}
          >{`${e.column} ${e.comparison} ${e.value}`}</label>
        </div>
      ))}
    </div>
  );
}

function Procurar(props) {
  const { setName, filterByNumericValues } = useContext(Context);
  /* const { replaceFilters, selectionFilter, usedFilters } = props; */
  const handlerChange = (event) => {
    setName(event.target.value);
  };
  let filtersDrop = NumericOptions;
  filterByNumericValues.forEach((e) => {
    filtersDrop = filtersDrop.filter((o) => o !== e.column);
  });
  return (
    <div className="flex-me header">
      <NameSearch handlerChange={handlerChange} />
      <OrderToMe />
      <div className="filters ">
        <ColumnSearch optionsSelect1={filtersDrop} />
        <ComparisonSearch optionsSelect2={comparisonOptions} />
        <ButtonAdd selectionFilter={selectionFilter} />
      </div>
      <FiltersBox old={props} rF={replaceFilters} usedFilters={filterByNumericValues} />
    </div>
  );
}

export default Procurar;
