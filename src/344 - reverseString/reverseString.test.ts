import { reverseString } from "./reverseString";

describe("test reverseString function", () => {
    test.each(
        [
            { s: ["a"], expected: ["a"] },
            { s: ["a", "b"], expected: ["b", "a"] },
            { s: ["a", "b", "c"], expected: ["c", "b", "a"] },
            { s: ["h", "e", "l", "l", "o"], expected: ["o", "l", "l", "e", "h"] },
            { s: ["H", "a", "n", "n", "a", "h"], expected: ["h", "a", "n", "n", "a", "H"] }
        ])(
            'reverseString(%s) should alter input to be %s', (example: { s: string[], expected: string[] }) => {
                let s = example.s;
                reverseString(s);
                expect(s).toStrictEqual(example.expected);
            })
});
