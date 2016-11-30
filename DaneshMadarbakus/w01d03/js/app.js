// alert('Finish this tune');
// var song1 = prompt('Youve been hit by, youve been struck by a...');
// while (song1 !== 'smooth criminal') {
//   // alert('try again');
//   song1 = prompt('try again');
//   if (song1 === 'smooth criminal'){
//     alert('nice');
//   }
// }
// Ask the user for first number
// Ask user for operator + / - power & square root
// Ask user for the second number
// Display the question and give option to type resest to start again
// Depending on the operator we will need to create the right sum
// Display the result

alert('Welcome to my brain calculator, worry not... I will get you through this ;) ');
var carryOnUsing = (true);
while(carryOnUsing) {
  var firstNumber = prompt('What is your first number?');
  var operator = prompt('What would you like to do? +, -, / or *');
  var secondNumber = prompt('What is your second number?');

  var numberOne = parseFloat(firstNumber, 10);
  var numberTwo = parseFloat(secondNumber, 10);

  switch(operator) {
    case '+':
      alert('your answer is ' + (numberOne + numberTwo));
      break;
    case '-':
      alert('your answer is ' + (numberOne - numberTwo));
      break;
    case '/':
      alert('your answer is ' + (numberOne / numberTwo));
      break;
    case '*':
      alert('your answer is ' + (numberOne * numberTwo));
      break;
  }
  carryOnUsing = confirm('You wanna ask another question? ;)'); 
}


// alert()
