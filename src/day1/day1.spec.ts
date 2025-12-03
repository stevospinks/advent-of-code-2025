import day1 from './index';

const example = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

describe('On Day 1', () => {
  it(`part 1 solves for the example input`, () => {
    expect(day1.solveForPartOne(example)).toBe('3');
  });

  xit(`part 2 solves for the example input`, () => {
    expect(day1.solveForPartTwo(example)).toBe('hello');
  });
});
