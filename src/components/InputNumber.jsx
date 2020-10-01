import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { removeClick } from '../actions/actionFilter';
import FiltroOrdenado from './FiltroOrdenado';
import StarWarsContext from '../context/StarWarsContext';

function InputNumber() {
  const {
    options,
    setOptions,
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(StarWarsContext);
  const [state, setState] = useState({ column: '', comparison: '', value: 0 });
  useEffect(() => {
    setOptions(
      filterByNumericValues.map((element) => element.column),
    );
  }, [filterByNumericValues]);
  function selectParameter(e) {
    setState({ ...state, [e.target.id]: e.target.value });
  }
  function handleClick() {
    const { column, comparison, value } = state;
    setFilterByNumericValues((e) => ([...e, { column, comparison, value }]));
  }
  function seletores(selectedOption) {
    return (
      <div>
        <select id="column" data-testid="column-filter" onChange={(event) => {
          selectParameter(event)}}
        >
          {selectedOption.map((element) => (
            <option value={element} key={element}>
              {element}
            </option>
          ))}
        </select>
        <select id="comparison" data-testid="comparison-filter" onChange={(event) => {
          selectParameter(event)}}
        >
          <option value="" disabled selected>
            Compare
          </option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          id="value"
          data-testid="value-filter"
          onChange={(event) => selectParameter(event)}
        />
      </div>
    );
  }

  let selectedOption = [
    '',
    'population',
    'rotation_period',
    'diameter',
    'surface_water',
    'orbital_period',
  ];
  selectedOption = selectedOption.filter((element) => !options.includes(element));

  return (
    <div>
      {seletores(selectedOption)}
      <button data-testid="button-filter" onClick={handleClick}>
        Adicionar Filtro
      </button>
      <FiltroOrdenado />
      {filterByNumericValues.map((filtro) => (
        <div data-testid="filter">
          <button onClick={removeClick} id={filtro.column}>
            X
          </button>
          {filtro.column}
        </div>
      ))}
    </div>
    );
}

export default InputNumber;

/* class InputNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.selectColumn = this.selectColumn.bind(this);
    this.selectComparison = this.selectComparison.bind(this);
    this.selectValue = this.selectValue.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.seletores = this.seletores.bind(this);
  }

  selectColumn(e) {
    this.setState({ column: e.target.value });
  }

  selectComparison(e) {
    this.setState({ comparison: e.target.value });
  }

  selectValue(e) {
    this.setState({ value: e.target.value });
  }

  handleClick() {
    const { column, comparison, value } = this.state;
    this.props.filterByNumber(column, comparison, value);
  }

  seletores(selectedOption) {
    return (
      <div>
        <select data-testid="column-filter" onChange={(event) => this.selectColumn(event)}>
          {selectedOption.map((element) => (
            <option value={element} key={element}>
              {element}
            </option>
          ))}
        </select>
        <select data-testid="comparison-filter" onChange={(event) => this.selectComparison(event)}>
          <option value="" disabled selected>
            Compare
          </option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={(event) => this.selectValue(event)}
        />
      </div>
    );
  }

  render() {
    const { options, filterByNumericValues } = this.props;
    let selectedOption = [
      '',
      'population',
      'rotation_period',
      'diameter',
      'surface_water',
      'orbital_period',
    ];
    selectedOption = selectedOption.filter((element) => !options.includes(element));
    return (
      <div>
        {this.seletores(selectedOption)}
        <button data-testid="button-filter" onClick={this.handleClick}>
          Adicionar Filtro
        </button>

        <FiltroOrdenado />

        {filterByNumericValues.map((filtro) => (
          <div data-testid="filter">
            <button onClick={this.props.removeClick} id={filtro.column}>
              X
            </button>
            {filtro.column}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  options: state.filters.filterByNumericValues.map((element) => element.column),
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterByNumber: (column, comparison, value) =>
    dispatch(filterByNumber(column, comparison, value)),
  removeClick: (column) => dispatch(removeClick(column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputNumber);

InputNumber.propTypes = {
  filterByNumber: propTypes.func.isRequired,
  options: propTypes.arrayOf(propTypes.string).isRequired,
  removeClick: propTypes.func.isRequired,
  filterByNumericValues: propTypes.arrayOf(instanceOf(Object)).isRequired,
}; */
