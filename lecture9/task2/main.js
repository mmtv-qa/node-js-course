const readline = require('readline-sync');
const calculate = require('./calculate')


function main() {
    const input = readline.question('Enter expression: ');
    const result = calculate(input);
    console.log(result);
}

main();