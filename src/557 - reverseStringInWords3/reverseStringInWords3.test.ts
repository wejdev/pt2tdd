import { reverseStringInWords3 } from './reverseStringInWords3';

describe('test reverseStringInWords3 function', () => {
    test.each(
        [
            { s: 'a', expected: 'a' },
            { s: 'Bill', expected: 'lliB' },
            { s: 'Bill was here!', expected: 'lliB saw !ereh' },

            { s: 'Let\'s take LeetCode contest', expected: 's\'teL ekat edoCteeL tsetnoc' },
            { s: 'God Ding', expected: 'doG gniD' }
        ])(
        'reverseString(%s) should alter input to be %s', (example: { s: string, expected: string }) => {
            expect(reverseStringInWords3(example.s)).toBe(example.expected);
        });
});
