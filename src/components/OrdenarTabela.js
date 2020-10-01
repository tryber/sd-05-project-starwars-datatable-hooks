import React, { useContext, useState } from 'react';
// import { connect } from 'react-redux';
// import Proptypes from 'prop-types';
// import ordenacao from '../actions/ordenacao';
import { StarWarsContext } from '../context/StarWarsContext';

const arrayCabecalho = [
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

function OrdenarTabela() {
  const { setOrder: xablau } = useContext(StarWarsContext);
  const [column, setColumn] = useState('');
  const [sort, setSort] = useState('');

  /* constructor(props) {
    super(props);
    this.state = {
      column: 'Name',
      sort: 'ASC',
    };
  } */

  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={(e) => setColumn(e.target.value)}
      >
        {arrayCabecalho.map((titulo) => (
          <option value={titulo}>{titulo}</option>
        ))}
      </select>
      <br />
      <input
        type="radio" data-testid="column-sort-input-asc" name="order" value="ASC"
        onClick={(e) => setSort(e.target.value)}
      />{' '}
      ASC
      <br />
      <input
        type="radio" data-testid="column-sort-input-desc" name="order" value="DESC"
        onClick={(e) => setSort(e.target.value)}
      />{' '}
      DESC
      <button
        data-testid="column-sort-button"
        onClick={() => xablau({ column, sort })}
      >
        Filtrar
      </button>
    </div>
  );
  
}

/* const mapDispatchToProps = (dispatch) => ({
  xablau: (event) => dispatch(ordenacao(event)),
}); */

/* OrdenarTabela.propTypes = {
  xablau: Proptypes.func.isRequired,
}; */

// export default connect(null, mapDispatchToProps)(OrdenarTabela);
export default OrdenarTabela;
