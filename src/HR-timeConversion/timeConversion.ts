function timeConversion(s: string): string {
    let hour = parseInt(s.slice(0, 2));
    const minuteSecond = s.slice(2, 8);
    const amPm = s.slice(-2);

    if (amPm.toUpperCase() === 'PM') {
        if (hour < 12) {
            hour += 12;
        }
    }
    else { // AM
        if (hour === 12) {
            hour = 0;
        }
    }

    const formattedHour = hour.toString().padStart(2, '0');
    return `${formattedHour}${minuteSecond}`;
}

export { timeConversion as timeConversion };

/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
s = '12:01:00PM'
Return '12:01:00'.

s = '12:01:00AM'
Return '00:01:00'.

Function Description
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):
string s: a time in 24 hour format

Returns
string: the time in 24 hour format

Input Format
A single string s that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

Constraints
All input times are valid

Sample Input
07:05:45PM

Sample Output
19:05:45
*/
