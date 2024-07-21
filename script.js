function convertToRoman(num) {
    const romanSymbols = [
        ['M', 1000], 
        ['CM', 900],
        ['D', 500], 
        ['CD', 400],
        ['C', 100], 
        ['XC', 90],
        ['L', 50], 
        ['XL', 40],
        ['X', 10], 
        ['IX', 9],
        ['V', 5], 
        ['IV', 4],
        ['I', 1]
    ];

    let romanNumeral = '';

    for (let [symbol, value] of romanSymbols) {
        while (num >= value) {
            romanNumeral += symbol;
            num -= value;
        }
    }

    return romanNumeral;
}

const input = prompt("Enter a number to convert to Roman numeral:");
alert(convertToRoman(Number(input)));
