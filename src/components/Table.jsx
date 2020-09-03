/* import PropTypes from 'prop-types'; */
import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
/* import { connect } from 'react-redux'; */
/* import { fechStarWars } from '../actions'; */
import PlanetHeder from './planetHeder';
import Planet from './planet';
import '../App.css';

function Table() {
  const { planets, filterByName } = useContext(StarWarsContext);
    
     if (!planets) { return <h1>Loading...</h1>; }
    let planetas = planets;
    console.log(planetas);
   if (filterByName.name !== {}) {
      planetas = planetas.filter((planeta) => planeta.name.includes(filterByName.name));
    }
    /* filters.filterByNumericValues.forEach((filtro) => {
      const { column, comparison, value } = filtro;
      if (column !== 'COLUNAS' && comparison === 'maior que' && value !== '') {
        planetas = planetas.filter((planeta) => (planeta[column] > Number(value)));
      } else if (column !== 'COLUNAS' && comparison === 'menor que' && value !== '') {
        planetas = planetas.filter((planeta) => (planeta[column] < Number(value)));
      } else if (column !== 'COLUNAS' && comparison === 'igual a' && value !== '') {
        planetas = planetas.filter((planeta) => (Number(planeta[column]) === Number(value)));
      }
    }); */
    return (
      <div>
        <table className="table">
          <thead>
            <PlanetHeder />
          </thead>
          <tbody>
            {planetas.map((planet) => <Planet planet={planet} key={planet.name} />)}
          </tbody>
        </table>
        {planets.isFetching && 'Loading...'}
        {!planets.isFetching && planets.error}
      </div>
    );
}

export default Table;

/* const mapStateToProps = (state) => ({
  planets: state.starWaresReducer.planets,
  filters: state.filters,
});

const mapDispathToProps = (dispath) => ({
  getCurrentSW: () => dispath(fechStarWars()),
});

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  filters: PropTypes.instanceOf(Object).isRequired,
  getCurrentSW: PropTypes.func.isRequired,
};

Table.defaultProps = {
  planets: undefined,
};

export default connect(mapStateToProps, mapDispathToProps)(Table); */
