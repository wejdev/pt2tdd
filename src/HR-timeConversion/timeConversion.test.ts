import { timeConversion } from './timeConversion';

describe('test timeConversion function', () => {
    test.each(
        [
            { s: '12:01:00PM', expected: '12:01:00' },
            { s: '07:05:45PM', expected: '19:05:45' },
            { s: '12:00:00AM', expected: '00:00:00' },
            { s: '12:00:00PM', expected: '12:00:00' },
            { s: '12:00:01AM', expected: '00:00:01' },
            { s: '01:00:00AM', expected: '01:00:00' },
            { s: '01:01:01PM', expected: '13:01:01' },
        ])(
            'timeConversion(%s) should alter input to be %s', (example: { s: string, expected: string }) => {
                const result = timeConversion(example.s);
                expect(result).toEqual(example.expected);
            }
        );
});
