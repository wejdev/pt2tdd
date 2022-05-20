function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length)
        return false;

    let sCounts = new Map<string, number>();
    let tCounts = new Map<string, number>();

    [...s].forEach(val => {
        sCounts.set(val, sCounts.has(val) ? sCounts.get(val)! + 1 : 1);
    });

    [...s].forEach(val => {
        tCounts.set(val, tCounts.has(val) ? tCounts.get(val)! + 1 : 1);
    });

    for (let [key, val] of sCounts.entries()) {
        const isMissingThisLetter = !tCounts.has(key);
        const hasDifferentLetterCount = tCounts.get(key) !== val;
        if (isMissingThisLetter || hasDifferentLetterCount)
            return false;
    }

    return true;
};

export { isAnagram as isAnagram }

export function isAnagram2(s: string, t: string): boolean {
    return [...s].sort().join('') === [...t].sort().join('');
    // or return s.split('').sort().join('') === t.split('').sort().join('');
}

/*
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/
