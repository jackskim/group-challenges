//Sum All Numbers in a Range

// We'll pass you an array with two numbers. 
// Return the sum of those two numbers plus the sum of all the numbers between them. 
// The lowest number will not always come first.

function sumAll(arr) {
  let sum = 0;
  
  // 1. Sort the array
	// comparator function takes two elements
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  arr.sort((a,b) => a - b);

  // 1b. Use Math.min() and Math.max() to save the lowest and highest numbers
  // let min = Math.min(arr[0], arr[1]);
  // let max = Math.max(arr[0], arr[1]);

  // 2. Iterate from lower higher to higher number, adding onto sum on each iteration
  for(let i = arr[0]; i <= arr[1]; i++){
    sum += i;
  }

  // 3. Return the sum
  return sum;
}

// sumAll([4,1]) 
// //should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// sumAll([5, 10]) 
// // should return 45

// sumAll([10, 5]) 
// should return 45
