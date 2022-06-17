import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
    test.each(
        [

            [[-1, 0, 3, 5, 9, 12], 9, 4],
            [[-1, 0, 3, 5, 9, 12], 2, -1]
        ])(
        'binarySearch %s for %i returns %i', (nums, target, expected) => {
            expect(binarySearch(nums, target)).toStrictEqual(expected);
        }
    );

});
