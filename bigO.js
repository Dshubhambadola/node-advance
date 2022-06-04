const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumOfarr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}   // O(n)

const result = sumOfarr(arr);
console.log(result); 