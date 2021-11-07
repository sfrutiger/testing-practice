//calculator functions
let add = (a, b) => a + b;

let subtract = (a, b) => a - b;

let divide = (a, b) => a / b;

let multiply = (a, b) => a * b;

//string functions
let reverseString = (str) => str.split('').reverse('').join('');

let capitalizeString = (str) => str.charAt(0).toUpperCase() + str.slice(1);

//caeser cipher
let caeser = (plaintext, key) => {
  var ciphertext = '';
  var re = /[a-z]/;
  for(i=0; i<plaintext.length; i++){ 
    if(re.test(plaintext.charAt(i))) ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 97 + key)%26 + 97); 
    else ciphertext += plaintext.charAt(i);
  }
  return ciphertext;
}

//array analysis

function Object(average, min, max, length) {
  this.average = average;
  this.min = min;
  this.max = max;
  this.length = length;
}


let analyzeArray = (arr) => {
  const sum = arr.reduce((a, b) => a + b, 0)
  let analysis = new Object(sum/arr.length, Math.min(...arr), Math.max(...arr), arr.length)
  return analysis;
}


module.exports = {
  add,
  subtract,
  divide,
  multiply,
  reverseString,
  capitalizeString,
  caeser,
  analyzeArray
  };