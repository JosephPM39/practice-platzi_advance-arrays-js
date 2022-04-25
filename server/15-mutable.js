const products = [
  { title: "Pizza", price: 121, id: "p" },
  { title: "Burger", price: 121, id: "b" },
  { title: "Hot cakes", price: 121, id: "h" },
];
const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);

console.log("-".repeat(10));

//extract a item from the array products by findIndex, this methods are mutables

const productIndex = products.findIndex((item) => item.id === "b");
if (productIndex !== -1) {
  myProducts.push(products[productIndex]);
  products.splice(productIndex, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);

console.log("-".repeat(10));

// Update one object into array, this methods are mutable, because modify the original array

const productsV2 = [
  { title: "Pizza", price: 121, id: "p" },
  { title: "Burger", price: 121, id: "b" },
  { title: "Hot cakes", price: 121, id: "h" },
];
const update = {
  id: "h",
  changes: {
    price: 200,
    description: "delicioso",
  },
};
const productIndexV2 = productsV2.findIndex((item) => item.id === update.id);
productsV2[productIndexV2] = {
  ...productsV2[productIndexV2],
  ...update.changes,
};
console.log(productsV2);
