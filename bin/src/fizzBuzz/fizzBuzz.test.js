"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fizzBuzz_1 = require("./fizzBuzz");
describe("test fizBuzz function", function () {
    test.each([
        [1, ["1"]],
        // [1, ["1", "2"]],
        // [3, ["1", "2", "Fizz"]],
        // [5, ["1", "2", "Fizz", "4", "Buzz"]],
        // [6, ["1", "2", "Fizz", "4", "Buzz", "Fizz"]],
        // [15, ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]],
    ])('fizzBuzz(%i) should return %s', function (a, expected) {
        expect((0, fizzBuzz_1.fizzBuzz)(a)).toStrictEqual(expected);
    });
});
