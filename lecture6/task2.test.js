uniqualizeArray = require('./task2.js');


test('uniqualizeArray', () => {
    const test_array = [1, 4, 4, 5, 3, 5]
    const expected = [1, 4, 5, 3]
    expect(uniqualizeArray(test_array)).toEqual(expected);
})