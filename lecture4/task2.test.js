const {square} = require("./task2");
const {double} = require("./task2");
const {multiply} = require("./task2");


describe("multiply", () => {
    it("should multiply two numbers", () => {
        expect(multiply(2, 3)).toBe(6);
    });

    it("should multiply two negative numbers", () => {
        expect(multiply(-2, -3)).toBe(6);
    })
})

describe("double", () => {
    it("should double a positive number", () => {
        expect(double(2)).toBe(4);
    });

    it("should double a negative number", () => {
        expect(double(-2)).toBe(-4);
    })
})

describe("square", () => {
    it("should square a positive number", () => {
        expect(square(2)).toBe(4);
    });

    it("should square a negative number", () => {
        expect(square(-2)).toBe(4);
    })
})