import React from 'react';
import PropTypes from 'prop-types';

class TableHeader extends React.Component {
  render() {
    const { planets } = this.props;
    let tableHeaders = [];
    if (planets.length > 0) tableHeaders = Object.keys(planets[0]);
    tableHeaders.splice(tableHeaders.indexOf('residents'), 1);

    return (
      <thead>
        <tr>
          {tableHeaders.map((each) => (
            <th key={each}>{each}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

TableHeader.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableHeader;
