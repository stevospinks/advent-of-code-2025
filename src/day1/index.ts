import { Day } from '../day';
import { StringParser } from '../utils/string-parser';

class Day1 extends Day {
  constructor() {
    super(1);
  }

  getRotations(rotationStrings: string[]): number[] {
    const rotations: number[] = [];

    for (let i = 0; i < rotationStrings.length; i++) {
      const rotation = rotationStrings[i];
      const direction = rotation[0];
      const distance = parseInt(rotation.slice(1)) % 100;

      switch (direction) {
        case 'R':
          rotations.push(distance);
          break;
        case 'L':
          rotations.push(-distance);
          break;
        default:
          console.log('Unexpected rotation direction', direction);
          break;
      }
    }

    return rotations;
  }

  solveForPartOne(input: string): string {
    let dialNumber = 50;
    const parsedInput = StringParser.ToStringArray(input);
    const rotations = this.getRotations(parsedInput);

    let result = 0;
    for (let i = 0; i < rotations.length; i++) {
      const rotation = rotations[i];
      dialNumber += rotation;
      if (dialNumber > 99) {
        dialNumber -= 100;
      } else if (dialNumber < 0) {
        dialNumber += 100;
      }

      if (dialNumber === 0) {
        result += 1;
      }
    }

    return result.toString();
  }

  solveForPartTwo(input: string): string {
    return input;
  }
}

export default new Day1();
