import { isAnagram } from "./validAnagram";

describe("test isAnagram function", () => {
    test.each(
        [
            { s: "anagram", t: "nagaram", expected: true },
            { s : "rat", t : "car", expected: false },
            { s: "anagram", t: "anagram", expected: true },
            { s: "anagram", t: "abc", expected: false },
        ])(
            'isAnagram(s, t)) should return output', (input: { s: string, t: string, expected:boolean}): void => {
                expect(isAnagram(input.s, input.t)).toBe(input.expected);
            },
        );
});
