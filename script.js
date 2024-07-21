// script.js

function firstWord(str) {
    // Trim leading and trailing spaces
    str = str.trim();
    
    // If the string is empty after trimming, return an empty string
    if (str === '') {
        return '';
    }
    
    // Find the index of the first space
    const firstSpaceIndex = str.indexOf(' ');
    
    // If no space is found, return the entire string
    if (firstSpaceIndex === -1) {
        return str;
    }
    
    // Return the substring up to the first space
    return str.substring(0, firstSpaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
