import { towerBreakers } from './towerBreakers';

describe('test towerBreakers function', () => {
    test.each(
        [
            {
                n: 2,
                m: 6,
                expected: 2,
            },
            {
                n: 2,
                m: 2,
                expected: 2,
            },
            {
                n: 1,
                m: 4,
                expected: 1,
            },
            {
                n: 100000,
                m: 1,
                expected: 2,
            },
            {
                n: 100001,
                m: 1,
                expected: 2,
            },
            {
                n: 374625,
                m: 796723,
                expected: 1,
            },
            {
                n: 950929,
                m: 183477,
                expected: 1,
            },
            {
                n: 732159,
                m: 779867,
                expected: 1,
            },
            {
                n: 598794,
                m: 596985,
                expected: 2,
            },
            {
                n: 156054,
                m: 445934,
                expected: 2,
            },
            {
                n: 156030,
                m: 99998,
                expected: 2,
            },
            {
                n: 58097,
                m: 459353,
                expected: 1,
            },
            {
                n: 866372,
                m: 333784,
                expected: 2,
            },
            {
                n: 601251,
                m: 142899,
                expected: 1,
            },
            {
                n: 708233,
                m: 651036,
                expected: 1,
            },
            {
                n: 20590,
                m: 56425,
                expected: 2,
            },
            {
                n: 970129,
                m: 722162,
                expected: 1,
            },
            {
                n: 832631,
                m: 938765,
                expected: 1,
            },
            {
                n: 212387,
                m: 779,
                expected: 1,
            },
        ])(
            'towerBreakers(%s) should alter input to be %s', (example: { n: number, m: number, expected: number }) => {
                const result = towerBreakers(example.n, example.m);
                expect(result).toEqual(example.expected);
            }
        );
});

/*
*/


2
2
1
1
1
2
2
2
1
2
1
1
2
1
1
1
2
2
1
