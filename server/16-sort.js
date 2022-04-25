const months = ["March", "Jan", "Feb", "Dec"];
//This sort in alphabetic order, because, sort execute order by ascii values
months.sort();

console.log(months);
//This result sort is, [1, 100000, 21, 30, 4], because, sort execute order by ascii values for the first character
const numbers = [1, 30, 4, 21, 100000];

//The corretly form to order numbers with sort, is passing a order rule, in this case: whats number is mayor?
numbers.sort((a, b) => b - a);
console.log(numbers);

//In some cases, some Browsers dosent have a native support for sort without rules for order, in these cases, is recommendable use the method localeCompare
const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];
words.sort((a, b) => a.localeCompare(b));
console.log(words);

const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

//For sort objects, is equal simple how use a some property for sort
orders.sort((a, b) => b.total - a.total);
console.log(orders);
