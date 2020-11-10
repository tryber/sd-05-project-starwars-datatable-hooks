import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import endpoint from '../service/api';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [],
      },
      order: { column: 'Name', sort: 'ASC' },
    };
    this.handleLoading = this.handleLoading.bind(this)
    this.handleData = this.handleData.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleNumeric = this.handleNumeric.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }

  handleLoading(e){
    this.setState({isLoading: e})
  }

  handleData(e) {
    this.setState({
      isLoading: false,
      data: e.results,
    });
  }

  handleName(input) {
    this.setState({
      filters: {
        ...this.state.filters,
        filterByName: {
          name: input,
        },
      },
    });
  }

  handleNumeric(num) {
    this.setState({
      filters: {
        ...this.state.filters,
        filterByNumericValues: [...this.state.filters.filterByNumericValues, num],
      },
    });
  }

  handleRemove(filtro) {
    this.setState({
      filters: {
        ...this.state.filters,
        filterByNumericValues: [
          ...this.state.filters.filterByNumericValues.filter((item) => item !== filtro),
        ],
      },
    });
  }

  handleOrder(column, sort) {
    this.setState({
      order: {
        column,
        sort,
      },
    });
  }

  render() {
    const contextValue = {
      ...this.state,
      endpoint: endpoint,
      handleLoading: this.handleLoading,
      handleData: this.handleData,
      filterName: this.handleName,
      setFilters: this.handleNumeric,
      removeContext: this.handleRemove,
      orderContext: this.handleOrder,
    };

    const { children } = this.props;

    return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
