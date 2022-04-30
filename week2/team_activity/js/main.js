function coreq1() {
  const input = document.getElementById('coreq1Input').value;
  const outputElement = document.getElementById('coreq1Output');
  outputElement.innerHTML = 'You entered: ' + input;
}

function coreq2() {
  const input = document.getElementById('coreq2Input').value;
  const outputElement = document.getElementById('coreq2Output');
  const inputInt = parseInt(input);
  if (inputInt !== NaN) {
    outputElement.innerHTML = 'total: ' + sum(inputInt);
  }
}


function sum(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}


function addBy() {
  num1 = document.getElementById("1stNumber").value;
  num2 = document.getElementById("2ndNumber").value;
  document.getElementById("result").innerHTML = Number(num1) + Number(num2);
}

function subtractBy() {
  num1 = document.getElementById("1stNumber").value;
  num2 = document.getElementById("2ndNumber").value;
  document.getElementById("result").innerHTML = num1 - num2;
}

function multiplyBy() {
  num1 = document.getElementById("1stNumber").value;
  num2 = document.getElementById("2ndNumber").value;
  document.getElementById("result").innerHTML = num1 * num2;
}