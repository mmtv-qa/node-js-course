Circle = require('./task2-3.js');


describe('Circle', () => {
    const test_circle = new Circle(50, 30, 10);

    test('constructor work correctly', () => {
        expect(test_circle.x).toBe(50);
        expect(test_circle.y).toBe(30);
        expect(test_circle.r).toBe(10);
    })

    test('getArea', () => {
        expect(test_circle.getArea()).toBeCloseTo(314.1592653589793);
    })

    test('getPerimeter', () => {
        expect(test_circle.getPerimeter()).toBeCloseTo(62.83185307179586);
    })

    test('getIntersectionArea', () => {
        expect(test_circle.getIntersectionArea(new Circle(50, 30, 10))).toBeCloseTo(314.1592653589793);
    })
})


describe('Circle task 3', () => {
    let test_circle = new Circle(50, 30, 10);
    test('positive test', () => {
        expect(test_circle.coordinateInCircle(50, 30)).toBe(true);
    })

    test('negative test', () => {
        expect(test_circle.coordinateInCircle(60, 40)).toBe(false);
    })
})