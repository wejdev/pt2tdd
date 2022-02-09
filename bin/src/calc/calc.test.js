"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calc_1 = require("./calc");
describe("test add function", function () {
    test.each([
        [1, 1, 2],
        [-1, 2, 1],
        [2, 1, 3],
        [2, 3, 5],
        [10, 5, 15]
    ])('add( %i, %i) should return %i', function (a, b, expected) {
        expect((0, calc_1.add)(a, b)).toBe(expected);
    });
});
describe("test mul function", function () {
    it("should return 15 for mul(3,5)", function () {
        expect((0, calc_1.mul)(3, 5)).toBe(15);
    });
});
