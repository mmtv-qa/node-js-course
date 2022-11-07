myReduce = require('./task3.js');

describe('myReduce', () => {
    test('sum of array elements', () => {
        expect(myReduce([1, 2, 3], (acc, num) => acc + num, 0)).toBe(6);
    });
})