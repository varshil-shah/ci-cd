/**
 * Division
 */
function divide(firstNum, secondNum) {
  if (secondNum === 0) {
    throw new Error("Can't divide by 0");
  }
  return firstNum / secondNum;
}

module.exports = divide;
