function isPalindrome(word) {
  // Write your algorithm here
  const directArray = []
  for(const character of word) {
    directArray.push(character)
  }
  
  const reverseArray = []
  for(const character of word) {
    reverseArray.unshift(character)
  }

  if(JSON.stringify(directArray) === JSON.stringify(reverseArray)){
    return true;
  } else {
    return false;
  }
}

isPalindrome('robot')

/* 
  Add your pseudocode here

  have the function with an argument of a word/string
  declare two variables, an array going front to back, an array going back to front
  Divide the passed argument into its separate characters and put them in an array. How?
    iterate through the string
    for each char, we use push(), to add it to the back of a new array
    ftbarr.push(char)
  using strict equality operator, make sure the array forwards is equal to the array backwards. How?
    iterate though the string
    for each char, we use unshift(), to add it to the front of a new array
    btfarr.unshift(char)
    use an if..else statement and JSON.stringify() when comparing
  return true in the if code block
  return false in the else code block
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;



