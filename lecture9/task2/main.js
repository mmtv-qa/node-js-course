const readline = require('readline-sync');
const calculate = import('calculate.mjs');

function main() {
    const input = readline.question('Enter expression: ');
    const result = calculate(input);
    console.log(result);
}

main();