function minutesToSeconds(minutes) {
    return minutes * 60;
}

let seconds = minutesToSeconds(5.99).toFixed(1);

console.log(`It is ${seconds} seconds.`);