function tempConvert(temp, oriType) {
    if (oriType === 'c') {
        return `It is ${(1.8 * temp + 32).toFixed(1)} degrees Fahrenheit.` ;
    } else if (oriType === 'f') {
        return `It is ${((temp - 32) / 1.8).toFixed(1)} degrees Celsius.`;
    } else {
        return 'Invalid input. Try again.';
    }
}

let convertedTemp = tempConvert(112.23, 'f');

console.log(convertedTemp);