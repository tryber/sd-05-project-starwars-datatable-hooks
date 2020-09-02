import React, { Component } from 'react';
import StarwarsContext from '../context/StarwarsContext';
import PropTypes from 'prop-types';

import { rKey } from '../services/Utils';

const columns = [
  { innerText: 'Coluna', value: 'Coluna' },
  { innerText: 'population', value: 'population' },
  { innerText: 'orbital_period', value: 'orbital_period' },
  { innerText: 'diameter', value: 'diameter' },
  { innerText: 'rotation_period', value: 'rotation_period' },
  { innerText: 'surface_water', value: 'surface_water' },
];

const comparisons = [
  { innerText: 'Comparação', value: 'Comparação' },
  { innerText: 'maior que', value: 'maior que' },
  { innerText: 'menor que', value: 'menor que' },
  { innerText: 'igual a', value: 'igual a' },
];

function Select(props) {
  const { options, dataTest, selected } = props;
  return (
    <select
      data-testid={dataTest}
      onChange={({ target }) => { selected(target.value); }}
    >
      {
        options.map(({ value, innerText }) => (
          <option key={rKey(value)} value={value}>{innerText}</option>
        ))
      }
    </select>
  );
}

function ActivatedFilters() {
  return (
    <StarwarsContext.Consumer>
      {
        ({ filters }) => (
          <div>
            <h4>Filtros</h4>
            {
              filters.numberFilters.map(({ column, comparison, value }, i) => (
                <p key={rKey(column)} data-testid="filter">
                  {`${column} ${comparison} ${value}`}
                  <button
                    type="button"
                    onClick={() => { filters.removeFilter(i); }}
                  >
                    X
                  </button>
                </p>
              ))
            }
          </div>
        )
      }
      
    </StarwarsContext.Consumer>
  )
}

class Filters extends Component {
  constructor() {
    super();
    this.state = { column: '', comparison: '', value: '' };
    this.RenderSelects = this.RenderSelects.bind(this);
  }

  RenderSelects() {
    return (
      <StarwarsContext.Consumer>
        {
          ({ filters: {filterByNumericValues: fltr} }) => (
            <div>
              <Select
                options={
                  columns
                    .filter(({ value }) => fltr.filter(
                      ({ column }) => (column === value)
                    ).length === 0)
                }
                dataTest="column-filter"
                selected={(res) => { this.setState({ column: res }); }}
              />
              <Select
                options={comparisons}
                dataTest="comparison-filter"
                selected={(res) => { this.setState({ comparison: res }); }}
              />
              <input
                data-testid="value-filter"
                type="number"
                onChange={({ target }) => { this.setState({ value: target.value }); }}
              />
            </div>
          )
        }

      </StarwarsContext.Consumer>
    );
  }

  render() {
    return (
      <StarwarsContext.Consumer>
        {
          ({ filters }) => (
            <div>
              <div>Header</div>
              <input
                data-testid="name-filter"
                type="text"
                onChange={({ target: { value: name } }) => {
                  filters.setFilterByName({name});
                }}
              />
              {this.RenderSelects()}
              <button
                data-testid="button-filter"
                type="button"
                onClick={() => { filters.addFilterByNumericValues(this.state); }}
              >
                Filtrar
              </button>
              <ActivatedFilters />
            </div>
          )
        }
      </StarwarsContext.Consumer>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataTest: PropTypes.string.isRequired,
  selected: PropTypes.func.isRequired,
}

export default Filters;
