import React, { useContext } from 'react';
import { useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const optionsHeader = [
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

function FiltroOrdenado() {
  const { setFilterOrder } = useContext(StarWarsContext);
  const [state, setState] = useState({ column: '', sort: '' });

  function selectedOrder(e) {
    setState({ ...state, [e.target.id]: e.target.value });
  }

  function handleClick() {
    const { column, sort } = state;
    setFilterOrder(() => ({ column, sort }));
    // setFilterOrder(state) mesma coisa da linha de cima
  }

  return (
    <div>
      <select
        id="column" data-testid="column-sort" onChange={(event) =>
          selectedOrder(event)}
      >
        {optionsHeader.map((option) =>
          <option value={option}>{option}</option>)}
      </select>
      <input
        id="sort"
        value="ASC"
        data-testid="column-sort-input-asc"
        name="order"
        type="radio"
        onClick={(event) => selectedOrder(event)}
      /> ASC
      <input
        id="sort"
        value="DESC"
        data-testid="column-sort-input-desc"
        name="order"
        type="radio"
        onClick={(event) => selectedOrder(event)}
      /> DESC
      <button
        data-testid="column-sort-button"
        onClick={(e) => handleClick(e)}
      > Filtrar
      </button>
    </div>
  );
}

export default FiltroOrdenado;

/* const optionsHeader = [
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

class FiltroOrdenado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      sort: '',
    };
  }

  render() {
    return (
      <div>
        <select
          data-testid="column-sort" onChange={(event) =>
            this.setState({ column: (event.target.value) })}
        >
          {optionsHeader.map((option) =>
            <option value={option}>{option}</option>)}
        </select>
        <input
          value="ASC"
          data-testid="column-sort-input"
          name="order"
          type="radio"
          onClick={(event) => this.setState({ sort: (event.target.value) })}
        /> ASC
        <input
          value="DESC"
          data-testid="column-sort-input"
          name="order"
          type="radio"
          onClick={(event) => this.setState({ sort: (event.target.value) })}
        /> DESC
        <button
          data-testid="column-sort-button"
          onClick={() => this.props.filterOrder(this.state)}
        > Filtrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterOrder: (event) => dispatch(filterOrder(event)),
});

export default connect(null, mapDispatchToProps)(FiltroOrdenado);

FiltroOrdenado.propTypes = {
  filterOrder: propTypes.func.isRequired,
};
 */
