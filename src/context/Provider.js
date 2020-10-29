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
    this.funcaoApi = this.funcaoApi.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleNumeric = this.handleNumeric.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }

  funcaoApi() {
    const { isLoading } = this.state;
    if (isLoading) return;
    this.setState({ isLoading: true });
    endpoint().then(this.handleData);
  }

  handleData(json) {
    this.setState({
      isLoading: false,
      data: json.results,
    });
  }

  handleName(inputName) {
    this.setState({
      filters: {
        ...this.state.filters,
        filterByName: {
          name: inputName,
        },
      },
    });
  }

  handleNumeric(e) {
    this.setState({
      filters: {
        ...this.state.filters,
        filterByNumericValues: [...this.state.filters.filterByNumericValues, e],
      },
    });
  }

  handleRemove(filter) {
    this.setState({
      filters: {
        ...this.state.filters,
        filterByNumericValues: [
          ...this.state.filters.filterByNumericValues.filter((item) => item !== filter),
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
      endpoint: this.funcaoApi,
      filterName: this.handleName,
      setFilters: this.handleNumeric,
      remover: this.handleRemove,
      changeOrder: this.handleOrder,
    };

    const { children } = this.props;

    return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
