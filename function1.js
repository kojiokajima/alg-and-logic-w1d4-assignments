function calcRemainder(num1, num2) {
    if(num1 % 1 !== 0 || num2 % 1 !== 0) {
        return 'Invalid input. Try again.';
    } else {
        return  `The remainder is ${num1 % num2}.`
    }
}

let remainder = calcRemainder(10, 3);

console.log(remainder);