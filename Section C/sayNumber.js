let single = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

let double = {
  10: "ten",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

let teens = {
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "ninety",
};

let length = ["trillion", "billion", "million", "thousand"];

function sayNumber(num) {
  let numbers = num
    .toString()
    .split("")
    .reverse()
    .join("")
    .match(/\d{1,3}/g)
    .reverse()
    .map((number) => number.split("").reverse().join(""));
  let usable = length.slice(length.length - numbers.length + 1);
  let number = [];

  for (let i = 0; i < numbers.length; i++) {
    // Find the name of every number
    let toWord = numToWord(numbers[i]);
    if (toWord.length < 3) continue; // If the number was 000, skip it.
    if (usable[i] !== undefined) toWord += " " + usable[i];
    if (
      i === numbers.length - 1 &&
      !toWord.includes("hundred") &&
      numbers.length > 1
    )
      toWord = "and " + toWord;
    number.push(toWord);
  }

  number = number.join(", ");
  let word = number.charAt(0).toUpperCase() + number.slice(1) + ".";
  return word.replace(/, (?=and)/, " ");
}

// Given a 3 digit number, convert it to words
function numToWord(number) {
  let tempString = "";
  if (number === "000") return "";

  // Remove all leading 0s if the number is not exactly 0
  while (number.startsWith("0") & (number.length !== 1)) {
    number = number.slice(1);
  }

  if (number.length === 3) {
    // If it is 3 digits long, find the hundreth
    tempString += single[number.slice(0, 1)] + " hundred and ";
    number = number.slice(1);
  }
  if (number.length === 2 && teens[number]) {
    // If it is a teen add it
    tempString += teens[number];
  } else if (number.length === 2) {
    // 2 digit long, but not a teen
    if (number.slice(-1) === "0") {
      // If it ends with 0, add it
      tempString += double[number];
    } else {
      // otherwise
      let [twoDigit, oneDigit] = number.split("");
      tempString += double[twoDigit.slice(0, 1) + "0"] + "-" + single[oneDigit];
    }
  } else if (number.length === 1) {
    // If it is only 1 digit add it
    tempString += single[number];
  }

  return tempString;
}

module.exports = sayNumber;
