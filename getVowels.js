//Write a function that takes a string as argument and 
// returns the number of vowels contained in that string.

//The vowels are “a”, “e”, “i”, “o”, “u”.

function getVowels(str){
  let vowels = ['a', 'e', 'i', 'o', 'u'];
	let count = 0;

	for (let char of str) {
		if(vowels.includes(char)) count++;
	}


  // returns the number of vowels contained in that string.

	return count;
}

getVowels('Hi my name is John');
// should return 5
