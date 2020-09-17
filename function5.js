function calcTriangle(base, height) {
    return base * height / 2;
}

let area = calcTriangle(2.32, 6.143);

console.log(`The area is ${area.toFixed(2)}.`);