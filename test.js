const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(function(item, index) {
  return item
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
    console.log(total);
  return total
});

console.log(sum);