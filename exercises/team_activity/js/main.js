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

function add() {
    const number1 = document.getElementById('coreq3Num1').value;
    const number2 = document.getElementById('coreq3Num2').value;
    const outputElement = document.getElementById('coreq3Output');
    //  we need to check for valid input again...this time decimals would be ok...so lets use parseFloat instead of parseInt
    const num1Float = parseFloat(number1);
    const num2Float = parseFloat(number2);
    if ((num1Float !== NaN) & (num2Float !== NaN)) {
      const total = num1Float + num2Float;
      outputElement.innerHTML = 'Total: ' + total;
    }
  }

function sum(number) {
let total = 0;
for (let i = 1; i <= number; i++) {
    total += i;
}
return total;
}


function addBy()
{
        num1 = document.getElementById("1stNumber").value;
        num2 = document.getElementById("2ndNumber").value;
        document.getElementById("result").innerHTML = Number(num1) + Number(num2);
}

function subtractBy()
{
        num1 = document.getElementById("1stNumber").value;
        num2 = document.getElementById("2ndNumber").value;
        document.getElementById("result").innerHTML = num1 - num2;
}

function multiplyBy()
{
        num1 = document.getElementById("1stNumber").value;
        num2 = document.getElementById("2ndNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

