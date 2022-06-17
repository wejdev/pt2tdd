import { keysAndRooms } from './keysAndRooms';

describe('test keysAndRooms function', () => {
    test.each(
        [
            [
                [[1], [1]],
                true
            ],
            [
                [[1], [1], [1]],
                false
            ],
            [
                [[1], [2], [3], []],
                true
            ],
            [
                [[1, 3], [3, 0, 1], [2], [0]],
                false
            ]
        ])(
        'keysAndRooms() should alter %j to be %s', (
            rooms: number[][],
            expected: boolean
        ) => {
            const result = keysAndRooms(rooms);
            expect(result).toEqual(expected);
        });
});
