/*class NumberArray {
  constructor(numbers) {
    this.numbers = numbers;
  }

  getPositiveSum() {
    let sum = 0;
    for (let number of this.numbers) {
      if (number > 0) {
        sum += number;
      }
    }
    return sum;
  }
} */

getPositiveSum = (numbers) => numbers.reduce((sum, number) => (number > 0 ? sum + number : sum), 0);
// Using reduce instead of a for loop and an if condition to check whether the number is positive or not,
//  and if it is positive, it will be added to the sum."

/* const numbers = [2, -4, 6, -8, 10, -12];
const numberArray = new NumberArray(numbers);
const positiveSum = numberArray.getPositiveSum(); */

const numbers = [2, -4, 6, -8, 10, -12];
console.log(`The sum of positive numbers\nin this array [${numbers}] is ${getPositiveSum(numbers)}.`);


// Input: [2, -4, 6, -8, 10, -12]
// Output: 18 "Checked" and sorry for being late :)
