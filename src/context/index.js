import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../Services/API';

const SWContext = createContext();

class SWProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      planetsColumns: [],
      isFetching: false,
      error: false,
      name: '',
      filterByNumericValues: [],
      order: {
        column: 'Name',
        sort: 'ASC',
      },
      filtersOptions: {
        numeric: [
          { value: 'population', text: 'population', noRender: false },
          { value: 'orbital_period', text: 'orbital_period', noRender: false },
          { value: 'diameter', text: 'diameter', noRender: false },
          {
            value: 'rotation_period',
            text: 'rotation_period',
            noRender: false,
          },
          { value: 'surface_water', text: 'surface_water', noRender: false },
        ],
        comparison: [
          { value: 'maior que', text: 'maior que' },
          { value: 'menor que', text: 'menor que' },
          { value: 'igual a', text: 'igual a' },
        ],
      },
    };
    this.handlePlanetSuccess = this.handlePlanetSuccess.bind(this);
    this.handlePlanetFailure = this.handlePlanetFailure.bind(this);
    this.fetchPlanets = this.fetchPlanets.bind(this);
    this.handleFilterByName = this.handleFilterByName.bind(this);
    this.setNumericFilters = this.setNumericFilters.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.sendOrder = this.sendOrder.bind(this);
  }

  handlePlanetSuccess(response) {
    this.setState({
      isFetching: false,
      planets: [...response.results],
      planetsColumns: [
        ...Object.keys(response.results[0]).filter(
          (item) => item !== 'residents',
        ),
      ],
    });
  }

  handleFilterByName(name) {
    this.setState({ name });
  }

  fetchPlanets() {
    const { isFetching } = this.state;
    if (isFetching) return;
    this.setState({
      isFetching: true,
    });
    getPlanets().then(this.handlePlanetSuccess, this.handlePlanetFailure);
  }

  setNumericFilters(filter) {
    this.setState((state) => ({
      ...state,
      filterByNumericValues: [...state.filterByNumericValues, filter],
    }));
  }

  handlePlanetFailure(error) {
    this.setState({
      isFetching: false,
      error: error.message,
    });
  }

  removeFilter(filter) {
    this.setState((state) => ({
      ...state,
      filterByNumericValues: [
        ...state.filterByNumericValues.filter((_, index) => index !== filter),
      ],
    }));
  }

  sendOrder(order) {
    this.setState((state) => ({
      ...state,
      order,
    }));
  }

  render() {
    const context = {
      ...this.state,
      getPlanets: this.fetchPlanets,
      filteringByName: this.handleFilterByName,
      setNumericValues: this.setNumericFilters,
      removeFilter: this.removeFilter,
      sendOrder: this.sendOrder,
    };
    const { children } = this.props;
    return <SWContext.Provider value={context}>{children}</SWContext.Provider>;
  }
}

export { SWContext, SWProvider as Provider };
SWProvider.propTypes = { children: PropTypes.node.isRequired };
