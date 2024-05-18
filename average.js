// Tips
// Fix all the errors in both files (each file may have more than one error), without changing the implementations.
// Make sure you understand what the code is trying to accomplish, then tackle each error one at a time.
// Execute the code after each change you make, until you've fixed all the errors and the output is correct.

function average(list) {
  let sum = 0;
  
  for (let num of list) {
    sum += num;
  }

  return sum / list.length;
}
console.log(average([3, 5, 7]));