function romanToArabic(roman) {
    let arabic = 0;
    let prev = 0;
    for (let i = 0; i < roman.length; i++) {
        let current = charToArabic(roman[i]);
        if (current > prev) {
            arabic -= prev;
            arabic += current - prev;
        } else {
            arabic += current;
        }
        prev = current;
    }
    return arabic;
}

function charToArabic(char) {
    switch (char) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            throw new Error(`Invalid char ${char}`);
    }
}

module.exports = {romanToArabic, charToArabic};