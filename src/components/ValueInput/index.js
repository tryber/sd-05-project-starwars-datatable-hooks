import React from 'react';
import PropTypes from 'prop-types';

class ValueInput extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <label htmlFor="value">
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={onChange}
        />
      </label>
    );
  }
}

ValueInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ValueInput;
