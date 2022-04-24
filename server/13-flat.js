const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9],
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < array.length; j++) {
    const element = matriz[i][j];
    newArray.push(element);
  }
}
console.log("for", newArray);

//vs

const rta = matriz.flat(3);
console.log("flat", rta);

//vs

const flatArray = (matrix) => {
  let array = [];
  for (item of matrix) {
    if (Array.isArray(item)) {
      array = array.concat(flatArray(item));
    } else {
      array.push(item);
    }
  }
  return array;
};

console.log(flatArray(matriz));

//vs

const customFlat = (matrix) =>
  matrix.reduce(
    (sum, item) =>
      Array.isArray(item) ? sum.concat(customFlat(item)) : sum.concat(item),
    []
  );

console.log(customFlat(matriz));
