// **Реалізувати функцію *createBase***
//
// **let addSix = createBase(6);**
//
// **addSix(10); // returns 16**
//
// **addSix(21); // returns 27**

createBase = require('./task3');


describe('createBase', () => {
    test('Input 6', () => {
        expect(createBase(6)(10)).toBe(16);
    })
})