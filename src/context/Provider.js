import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getCurrentSW from '../services/API';

export default function Provider(props) {

  const [isFetching, setIsFetching] = useState(false);
  const [planets, setPlanets] = useState(null);

  const state = {
    isFetching,
    planets,
  };

  useEffect(() => {
    getCurrentSW()
      .then((planets) => { setPlanets(planets); })
      .then(() => {setIsFetching(true); })
      .then(console.log(planets))
  }, []);

  /* useEffect(() => {
    fechStarWars() {
      const { isFetching } = this.state;
      if ( isFetching ) return;

      this.setState({ isFetching: true });
      getCurrentSW().then(this.receiveSWSuccess, this.receiveSWFailure)
    }
  }, []); */

/*   receiveSWSuccess = (results) => {
    console.log(results)
    this.setState({ planets: results.results })
  };

  receiveSWFailure = (error) => ({
    error: error.message,
  }); */
  
/*   render() { */

    return (
      <StarWarsContext.Provider value={state}>
        {props.children}
      </StarWarsContext.Provider>
    );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
