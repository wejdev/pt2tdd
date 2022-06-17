import { isAnagram } from './validAnagram';

describe('test isAnagram function', () => {
    test.each(
        [
            ['anagram', 'nagaram', true],
            ['rat', 'car', false],
            ['anagram', 'anagram', true],
            ['anagram', 'abc', false]
        ])(
        'isAnagram(%s, %s)) should return %s', (s: string, t: string, expected: boolean): void => {
            expect(isAnagram(s, t)).toBe(expected);
        }
    );
});
