export default function queryFilters(data, textFilter) {
  return data.filter((planet) =>
    planet.name.toLowerCase().includes(textFilter.toLowerCase()),
  );
}
