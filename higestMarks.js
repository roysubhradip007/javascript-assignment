const marks = [10, 5, 32, 15, 40];

let maxVal = marks[0]
marks.forEach((e) => {
    e > maxVal ? maxVal = e : maxVal;
})

console.log(maxVal);