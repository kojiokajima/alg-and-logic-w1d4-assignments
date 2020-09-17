function hoursToSeconds(hours) {
    return hours * 3600;
}

let seconds = hoursToSeconds(1.2538).toFixed(2);

console.log(`It is ${seconds} seconds.`);