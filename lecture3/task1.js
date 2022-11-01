function task1(num) {
    if (num < 10 || num > 99) {
        return "Введіть двоцифрове число!";
    } else {
        return `${Math.floor(num / 10)} ${num % 10}`;
    }
}

module.exports = task1;