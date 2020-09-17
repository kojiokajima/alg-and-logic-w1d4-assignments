function tempConvert(temp, oriType) {
    if (oriType === 'c') {
        return `It is ${(1.8 * temp + 32).toFixed(3)} degrees Celsius.` ;
    } else if (oriType === 'f') {
        return `It is ${((temp - 32) / 1.8).toFixed(3)} degrees Fahrenheit.`;
    } else {
        return 'Invalid input';
    }
}

let convertedTemp = tempConvert(112.23, 'f');

console.log(convertedTemp);