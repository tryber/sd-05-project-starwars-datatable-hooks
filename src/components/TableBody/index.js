import React from 'react';
import PropTypes from 'prop-types';

class TableBody extends React.Component {
  render() {
    const { planets } = this.props;
    const planetas = planets;
    let tableHeaders = [];
    if (planets.length > 0) tableHeaders = Object.keys(planets[0]);
    tableHeaders.splice(tableHeaders.indexOf('residents'), 1);

    return (
      <tbody>
        {planetas.map((data) => (
          <tr key={data.terrain}>
            {tableHeaders.map((each) => (
              <td data-testid={each === 'name' ? 'planet-name' : ''} key={each}>
                {data[each]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableBody;
