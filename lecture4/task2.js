function multiply(num1, num2) {
    return num1 * num2;
}

function double(num) {
    return multiply(num, 2);
}

function square(num) {
    return multiply(num, num);
}

module.exports = {multiply, double, square};