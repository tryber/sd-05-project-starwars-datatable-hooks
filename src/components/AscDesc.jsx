import React, { Component } from 'react';
import PropTypes from 'prop-types';

const colunaInicial = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

export default class AscDesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'Name',
      sort: 'ASC',
    };
  }

  render() {
    const { sort, column } = this.state;
    return (
      <div>
        <select
          data-testid="column-sort"
          onChange={(e) => this.setState({ column: e.target.value })}
        >
          {colunaInicial.map((e) => (
            <option value={e} key={e}>
              {e}
            </option>
          ))}
        </select>
        <input
          name="ordenar"
          value="ASC"
          type="radio"
          data-testid="column-sort-input"
          defaultChecked
          onChange={(e) => this.setState({ sort: e.target.value })}
        />
        ASC
        <input
          name="ordenar"
          value="DESC"
          type="radio"
          data-testid="column-sort-input"
          onChange={(e) => this.setState({ sort: e.target.value })}
        />
        DESC
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={() => this.props.ordenado(sort, column)}
        >
          Selecionar
        </button>
      </div>
    );
  }
}

AscDesc.propTypes = {
  ordenado: PropTypes.func.isRequired,
};
