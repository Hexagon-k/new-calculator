const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const toggleSwitch = document.querySelector('#toggle');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            currentInput = '';
            previousInput = '';
            operator = '';
        } else if (button.id === 'equals') {
            calculate();
        } else if (button.classList.contains('operator')) {
            if (currentInput !== '') {
                previousInput = currentInput;
                operator = button.textContent;
                currentInput = '';
            }
        } else {
            currentInput += button.textContent;
        }

        display.value = currentInput;
    });
});

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '';
    operator = '';
    display.value = currentInput;
}

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.calculator').classList.toggle('dark-mode');
  });