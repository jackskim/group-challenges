// Wherefore art thou
//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 

// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// Hints: 
// Object.keys
// Object.hasOwnProperty

function whatIsInAName(collection, source) {

  //0. Save the keys from 'source' object 
  const keys = Object.keys(source);

  //1. Go through 'collection' object with filter
  return collection.filter(item => {

    // 2. Inside filter, iterate through 'source' keys
    // .every() will return true if:
    // a. all the keys in source are a property on `item`
    // b. the values are equal
    return keys.every(k => {

      // a. On each iteration, check if the 'collection' object has the 'source' key
      if (item.hasOwnProperty(k)) {

        // b. If the item has the property, compare the values
        if (source[k] === item[k]) {
          return true;
        }
      }
      return false;
    });
  });
}


whatIsInAName(
  [
    { first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
) 
// should return [{ first: "Tybalt", last: "Capulet" }]

// whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) 
// should return []

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) 
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
