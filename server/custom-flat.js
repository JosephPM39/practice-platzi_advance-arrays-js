const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9],
];

const customFlat = (matrix) =>
  matrix.reduce(
    (sum, item) =>
      Array.isArray(item) ? sum.concat(customFlat(item)) : sum.concat(item),
    []
  );

console.log(customFlat(matriz));
