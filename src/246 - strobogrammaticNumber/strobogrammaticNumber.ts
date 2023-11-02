function strobogrammaticNumber(number: string): boolean {

    var left = 0;
    var right = number.length - 1;
    var numberDigits = [...number];

    let numberMap = new Map<string, string>();
    numberMap.set("0", "0");
    numberMap.set("1", "1");
    numberMap.set("6", "9");
    numberMap.set("8", "8");
    numberMap.set("9", "6");

    while (left <= right) {
        if (numberMap.get(numberDigits[left]) != numberDigits[right])
            return false;

        left++;
        right--;
    }

    return true;
}



function strobogrammaticNumberBrute(number: string): boolean {

    var left = 0;
    var right = number.length - 1;
    var numberDigits = [...number];

    var badDigits = ["2", "3", "4", "5", "7"];

    while (left <= right) {
        if (!isStrobo(numberDigits[left], numberDigits[right]))
            return false;
        
        left++;
        right--;
    }

    return true;

    function isStrobo(left: string, right: string): boolean {
        if (badDigits.includes(left) || badDigits.includes(right))
            return false;
        if ((left === "6" && right === "9") ||
            (left === "9" && right === "6"))
            return true;
        if (left === right) {
            return (left !== "6" && left !== "9");
        }
        return true;
    }
}

export { strobogrammaticNumber as strobogrammaticNumber };

/*
246. Strobogrammatic Number
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Write a function to determine if a number is strobogrammatic. The number is represented as a string.

Example 1:
Input:  "69"
Output: true

Example 2:
Input:  "88"
Output: true

Example 3:
Input:  "962"
Output: true
*/
