import React from 'react';
import propTypes from 'prop-types';
import { filterPlanet } from '../actions/actionFilter';
import { useEffect } from 'react';

function InputName() {
  // useEffect(() => {
  //   filterPlanet()
  // })
  return (
    <div>
        <input // campo para filtrar por nome
          data-testid="name-filter"
          type="text"
          onChange={(event) => filterPlanet(event.target.value)}
        />
      </div>
  )
}

export default InputName;

InputName.propTypes = {
  filterPlanet: propTypes.func.isRequired,
};

/* class InputName extends React.Component {
  render() {
    const { searchByName } = this.props;
    return (
      <div>
        <input // campo para filtrar por nome
          data-testid="name-filter"
          type="text"
          onChange={(event) => searchByName(event.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchByName: (nome) => dispatch(filterPlanet(nome)),
});

export default connect(null, mapDispatchToProps)(InputName);

InputName.propTypes = {
  searchByName: propTypes.func.isRequired,
};
 */