import { plusMinusCalc } from "./one-week-preparation-kit-plus-minus";

describe("test plusMinusCalc function", () => {
    test.each(
        [
            { input: [1, 1, 0, -1, -1], expected: [0.40000, 0.40000, 0.20000] },
            { input: [-4, 3, -9, 0, 4, 1], expected: [0.500000, 0.333333, 0.166667] }
        ])(
            'plusMinusCalc(%s) should return %s', (example: { input: number[], expected: number[] }) => {
                expect(plusMinusCalc(example.input)).toStrictEqual(example.expected);
            },
        );
});
