// Write a function that converts an object into an array, where each element represents a key-value pair.
// Return an empty array if the object is empty.

function toArray(object){
  // Array to store values
  const array = [];

  // Iterating through the object
  for(let key in object){
    array.push(
      [ key, object[key] ]
    );
  }

  return array;
}


// Examples
//toArray({ a: 1, b: 2 }) // ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
// toArray({}) ➞ []





// Create a function that takes an object and returns the keys and values as separate arrays.

function keysAndValues(object){
  // Arrays to store our keys / values arrays
  const keys = [];
  const values = [];

  for(let key in object) {
    // push our key into keys array
    keys.push(key);
    // push our value into values array
    values.push(object[key]);
  }


  return [keys, values];
}

// // Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// // ➞ [["a", "b", "c"], [1, 2, 3]]
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// // ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// keysAndValues({ key1: true, key2: false, key3: undefined })
// // ➞ [["key1", "key2", "key3"], [true, false, undefined]]




// A group of friends have decided to start a secret society. 
// The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.
// The secret society's name should be entirely uppercased.

function societyName(namesArray){
  const firstLetters = namesArray.reduce((acc, current)=> {
    return acc + current.charAt(0);
  }, "")

  return firstLetters.split('').sort().join('');

}

// Examples
societyName(["Adam", "Sarah", "Malcolm"]) // ➞ "AMS"
// societyName(["Harry", "Newt", "Luna", "Cho"]) // ➞ "CHLN"
// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) // ➞ "CJMPRR"




// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
// Don't forget the space after the closing parenthesis.

function formatPhoneNumber(arr){

  // METHOD 1
  const areaCode = arr.slice(0,3).join("");
	const prefix = arr.slice(3,6).join("")
	const postfix = arr.slice(6,10).join("")

	return `(${areaCode}) ${prefix}-${postfix}`

  // METHOD 2
  // Index 0 - insert a (
  // arr.splice(0,0,'(');

  // // Index 4 - insert a )
  // arr.splice(4,0,')');

  // // Index 5 - insert a ' '
  // arr.splice(5,0,' ')

  // // Index 9
  // arr.splice(9, 0, '-')
  
  // return arr.join('');

}


// Examples
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
// formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) ➞ "(519) 555-4468"
 //formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])// ➞ "(345) 501-2527"

