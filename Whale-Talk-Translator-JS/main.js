// A phrase for translation into “whale talk”
let input = "Code is like humor - if you have to explain it, it’s probably not that good";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  // Log the current character and its index to debug the loop
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  } 
  
  if (input.length === 0) { 
    console.log('No input provided'); 
    return; 
    }

    for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        resultArray.push(input[i]);
      }
    }
}
// Log the result array to check the collected vowels
let resultString = resultArray.join('');
resultString = resultString.toUpperCase();
console.log(resultString);