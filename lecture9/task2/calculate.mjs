

export default function calculate(input) {
    let result = 0;
    let operator = '';
    let number = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '+' || input[i] === '-' || input[i] === '*' || input[i] === '/') {
            operator = input[i];
            result = +number;
            number = '';
        } else {
            number += input[i];
        }
    }
    switch (operator) {
        case '+':
            result += +number;
            break;
        case '-':
            result -= +number;
            break;
        case '*':
            result *= +number;
            break;
        case '/':
            result /= +number;
            break;
    }
    return result;
}

