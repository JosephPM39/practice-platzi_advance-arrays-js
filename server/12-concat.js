const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}
console.log('for', newArray);

//vs

const rta = elements.concat(othersElements);
console.log('concat', rta); 

//vs

const rta2 = [...elements, ...othersElements];
console.log('...', rta2);

//vs

const rta3 = [...elements, ...'random'];
console.log('rta3', rta3);

//vs
//Este método muta al array original
elements.push(...othersElements);
console.log('elements', elements);