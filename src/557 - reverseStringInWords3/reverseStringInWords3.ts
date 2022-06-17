function reverseWords(s: string): string {
    return s
        .split(' ')
        .map(w => reverseString(w))
        .join(' ');
}

function reverseString(str: string): string {
    let s = str.split('');
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s.join('');
}

export { reverseWords as reverseStringInWords3 };

/*
557. Reverse Words in a String III
Given a string s, reverse the order of characters in each word within a sentence while still
preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "God Ding"
Output: "doG gniD"

Constraints:
1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
*/
