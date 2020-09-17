function evenOdd(num) {
    if (num % 1 !== 0) {
        return 'Invalid input. Try again';
    } else if (num % 2 === 0) {
        return 'It is an even number.';
    } else {
        return 'It is an odd number.';
    }
}

let result = evenOdd(9);

console.log(result);