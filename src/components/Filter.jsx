import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    const { filtro } = this.props;
    return (
      <div>
        <label htmlFor="name-filter">
          <span>Filtre Aqui: </span>
          <input
            placeholder="DIGITE AQUI"
            type="text"
            data-testid="name-filter"
            onChange={(e) => filtro(e.target.value)}
          />
        </label>
      </div>
    );
  }
}
