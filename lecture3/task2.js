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




function arabicToRoman(arabic) {
    if (typeof arabic !== 'number') {
        throw new Error(`Should be a number`);
    }
    let romans = {
        'M':1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }
    let i;
    let result = '';
    for ( i in romans ) {
        while (arabic >= romans[i]) {
            result += i;
            arabic -= romans[i]
        }
    }
    return result

}

module.exports = {romanToArabic, arabicToRoman};