// const getFactorial = (number) => {
//   if (number < 2) return number;
//   return number * getFactorial(number - 1);
// };
// const arrayOfFactorials = [];
// for (let index = 0; index <= 9; index += 1) {
//   arrayOfFactorials.push(getFactorial(index));
// }
// let result;
// arrayOfFactorials.forEach((factorial) => {
//   result = 500000 - factorial;
//   console.log('loop', result);
// });

function getFactorialSubtraction(arrayLength, initialValue) {
  const getFactorial = (number) => {
    if (number < 2) return number;
    return number * getFactorial(number - 1);
  };

  const arrayOfFactorials = [];
  for (let index = 0; index <= arrayLength; index += 1) {
    arrayOfFactorials.push(getFactorial(index));
  }

  let result;

  arrayOfFactorials.forEach((factorial) => {
    result = initialValue - factorial;
  });

  return result;
}

console.log(getFactorialSubtraction(9, 500000));
