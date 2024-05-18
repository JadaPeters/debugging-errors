
var input = process.argv[2];

if (input)
  console.log(reverse(input));
else{
  console.log("No input provided.");
}


function reverse(original) {
  return original.split('').reverse().join('');
}