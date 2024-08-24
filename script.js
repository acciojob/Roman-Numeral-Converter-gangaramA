// script.js

function romanNumerals(num) {
  const symbols = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
  ];

  let result = '';

  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i][0];
    const value = symbols[i][1];

    while (num >= value) {
      result += symbol;
      num -= value;
    }

    if (num >= value - (value / 5)) {
      result += symbol + symbols[i - 1][0];
      num -= value - (value / 5);
    }
  }

  return result;
}

// Do not change the code below
const s = prompt("Enter a number (0-100000):");
alert(romanNumerals(parseInt(s)));