createBase = require('./task3');


describe('createBase', () => {
    test('Input 6', () => {
        expect(createBase(6)(10)).toBe(16);
    })
})