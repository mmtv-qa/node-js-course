

calcPerimeterAndAreaFromTriangle = require('./task1');

describe('calcPerimeterAndAreaFromTriangle', () => {
    test('Input 0', () => {
        expect(calcPerimeterAndAreaFromTriangle(0)).toBe('Введіть число від 1 до 1000!');
    })

    test('Input 1', () => {
        expect(calcPerimeterAndAreaFromTriangle(1)).toBe('4 1');
    })

    test('Input 1000', () => {
        expect(calcPerimeterAndAreaFromTriangle(1000)).toBe('Введіть число від 1 до 1000!');
    })

    test('Input 999', () => {
        expect(calcPerimeterAndAreaFromTriangle(999)).toBe('3996 998001');
    })
})