import { fizzBuzz } from "./fizzBuzz";

describe("test fizBuzz function", () => {
    test.each(
        [
            [1, ["1"]],
            // [1, ["1", "2"]],
            // [3, ["1", "2", "Fizz"]],
            // [5, ["1", "2", "Fizz", "4", "Buzz"]],
            // [6, ["1", "2", "Fizz", "4", "Buzz", "Fizz"]],
            // [15, ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]],
        ])(
            'fizzBuzz(%i) should return %s', (a, expected) => {
                expect(fizzBuzz(a)).toEqual(expected);
            },
        );
});
