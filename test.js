const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(function(item, index) {
  return item
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
    console.log("change in test testing git refrence to my future self",total);
  return total
});

console.log(sum);