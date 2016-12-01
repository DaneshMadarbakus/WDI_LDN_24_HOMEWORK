window.onload = start;

function start() {
  document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    var numberOne = parseFloat(document.getElementById('inputOne').value);
    var operator = document.getElementById('opSelector').value;
    var numberTwo = parseFloat(document.getElementById('inputTwo').value);
    var result;

    switch(operator) {
      case '+':
        result = numberOne + numberTwo;
        break;
      case '-':
        result = (numberOne - numberTwo);
        break;
      case '/':
        result = (numberOne / numberTwo);
        break;
      case '*':
        result = (numberOne * numberTwo);
        break;
    }
    document.getElementsByTagName('p')[0].innerHTML = result;
  });
}
