task1 = require('./task1');


describe('task1', () => {
    test('Input valid number', () => {
        expect(task1(12)).toBe('1 2');
    })

    test('Input one number', () => {
        expect(task1(1)).toBe('Введіть двоцифрове число!');
    })

    test('Input three numbers', () => {
        expect(task1(123)).toBe('Введіть двоцифрове число!');
    })
})