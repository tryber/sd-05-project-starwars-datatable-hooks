export default function filtering(planets, nameFilter, filters, columnOrder) {
  /* let finalArr = ordering(planets, columnOrder, nameOrder); */
  const {
    filterByName: { name },
    filterByNumericValues,
  } = nameFilter;

  let finalArr = planets;

  if (filterByNumericValues.length < 1) {
    const textFilter = finalArr.filter((data) =>
      data.name.toLowerCase().includes(name.toLowerCase()),
    );
    return textFilter;
  }
  filterByNumericValues.forEach((filter) => {
    if (filter.comparison === 'maior que') {
      const biggerThan = finalArr.filter((data) =>
        data.name.toLowerCase().includes(name.toLowerCase()),
      );
      finalArr = biggerThan.filter(
        (data) => Number(data[filter.column]) > Number(filter.value),
      );
    } else if (filter.comparison === 'menor que') {
      const lowerThan = finalArr.filter((data) =>
        data.name.toLowerCase().includes(name.toLowerCase()),
      );
      finalArr = lowerThan.filter(
        (data) => Number(data[filter.column]) < Number(filter.value),
      );
    } else {
      const equalTo = finalArr.filter((data) =>
        data.name.toLowerCase().includes(name.toLowerCase()),
      );
      finalArr = equalTo.filter(
        (data) => Number(data[filter.column]) === Number(filter.value),
      );
    }
  });
  return finalArr;
}
