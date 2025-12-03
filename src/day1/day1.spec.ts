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

  it(`part 2 solves for the example input`, () => {
    expect(day1.solveForPartTwo(example)).toBe('6');
  });

  describe('One reading', () => {
    it(`end on 0, R only`, () => {
      expect(day1.solveForPartTwo(`R50`)).toBe('1');
    });

    it(`end on 0, L only`, () => {
      expect(day1.solveForPartTwo(`L50`)).toBe('1');
    });

    it(`end on 0, R only, multiple turns`, () => {
      expect(day1.solveForPartTwo(`R150`)).toBe('2');
    });

    it(`end on 0, L only, multiple turns`, () => {
      expect(day1.solveForPartTwo(`L150`)).toBe('2');
    });
  });

  describe('Two readings', () => {
    it(`end on 0, both, R first`, () => {
      expect(
        day1.solveForPartTwo(`R50
L100`),
      ).toBe('2');
    });

    it(`end on 0, both, L first`, () => {
      expect(
        day1.solveForPartTwo(`L50
R100`),
      ).toBe('2');
    });

    it(`end on 0, both, single turn`, () => {
      expect(
        day1.solveForPartTwo(`R1
L51`),
      ).toBe('1');
    });
  });
});
