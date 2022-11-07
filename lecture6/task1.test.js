multiplyMatrix = require('./task1.js');


test('Search C matrix', () => {
    let A = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    let B = [
        [7, 8],
        [9, 10],
        [11, 12]
    ];
    let C = multiplyMatrix(A, B);
    let expected = [
        [58, 64],
        [139, 154]
    ];
    expect(C).toEqual(expected);
});