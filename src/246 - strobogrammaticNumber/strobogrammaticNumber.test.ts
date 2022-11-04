import { strobogrammaticNumber } from './strobogrammaticNumber';

describe('test strobogrammaticNumber function', () => {
    test.each(
        [
            { number: "69", expected: true },
            { number: "88", expected: true },
            { number: "962", expected: false },
            { number: "101", expected: true },
            { number: "171", expected: false },
            { number: "669", expected: false },
            { number: "", expected: true },
        ])(
            'strobogrammaticNumber(%s) should return %b', (example: { number: string, expected: boolean}) => {
                const result = strobogrammaticNumber(example.number);
                expect(result).toBe(example.expected);
            }
        );
});
