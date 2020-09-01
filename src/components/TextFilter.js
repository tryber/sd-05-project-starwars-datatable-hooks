import React from 'react';

export default function TextFilter() {
  const { loading, textInput } = this.props;
  return (
    <div>
      {!loading && (
        <div>
          <label htmlFor="name">Busca por planeta:</label>
          <input
            type="text"
            data-testid="name-filter"
            placeholder="Faça sua busca"
            onChange={(e) => textInput(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
