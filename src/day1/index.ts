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
      const distance = parseInt(rotation.slice(1));

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
      dialNumber += rotation % 100;
      if (dialNumber > 99) {
        dialNumber -= 100;
      } else if (dialNumber < 0) {
        dialNumber += 100;
      }

      if (dialNumber === 0) {
        result++;
      }
    }

    return result.toString();
  }

  solveForPartTwo(input: string): string {
    let dialNumber = 50;
    const parsedInput = StringParser.ToStringArray(input);
    const rotations = this.getRotations(parsedInput);

    let result = 0;
    for (let i = 0; i < rotations.length; i++) {
      // Can't quite get modulo working, let's try simulation instead
      const fullRotation = rotations[i];
      const direction = fullRotation < 0 ? 'L' : 'R';

      for (let j = 0; j < Math.abs(fullRotation); j++) {
        if (direction === 'L') {
          dialNumber--;
          if (dialNumber === -1) {
            dialNumber = 99;
          }
        } else {
          dialNumber++;
          if (dialNumber === 100) {
            dialNumber = 0;
          }
        }
        if (dialNumber === 0) {
          result++;
        }
      }
    }

    return result.toString();
  }
}

export default new Day1();
