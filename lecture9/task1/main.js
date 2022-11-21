
const readline = require('readline-sync');
const path = require('path');
const fs = require('fs');


function main() {
    console.log('List of available days:');
    const days = fs.readdirSync(path.join(__dirname, 'days'));
    console.log(days);
    const day = readline.question('Enter day: ');
    if (days.includes(day)) {
        const dayPath = `./days/${day}`;
        //
        const dayModule = require(dayPath);
        console.log(dayModule.main());
    } else {
        console.log('Day is not available');
    }
}

main();