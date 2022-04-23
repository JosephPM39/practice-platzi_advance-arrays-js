const letters = ['a','b','c'];

const newArray = letters.map(item => item + '++');

//Esta sería la versión sin usar la función map del arreglo
// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// }
console.log('original', letters);
console.log('new', newArray);