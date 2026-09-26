"use strict";
// let scores: number[] = [90, 87, 98];
// let names: string[] = ["ayub", "fuad", "mehammed"];
// // const wrong = scores.push("23");
// // console.log(wrong);
// let tasks: number[];
// // tasks.push("hdgsj");
// // console.log(tasks);
// // part2 A tuple is an array with a fixed length where each position has its own type.
// let person: [string, number];
// person = ["fuad", 23];
// console.log(person);
// //  Part 3: Functions
// let fruit: string[] = [];
// fruit.push(23);
// let student: [string, number, boolean];
// student = ["fuad", true, 34];
// function substract(a: number, b: number): number {
//   return a - b;
// }
// substract(2, "32");
function average(numbers) {
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }
    console.log(sum);
    console.log(numbers.length);
    const avg = sum / numbers.length;
    console.log(avg);
    return avg;
}
// average([27, 45, 13, 8, 107]);
function greetUser(name, city) {
    if (city) {
        return `hello ${name} from ${city}`;
    }
    return `hello ${name}`;
}
let result = greetUser("fuad", "wollo");
console.log(result);
// find max nu from arrays
function findMax(num) {
    let max;
    for (let index = 0; index < num.length; index++) {
        max = num[index];
        for (let index = 1; index < num.length; index++) {
            if (num[index] > max) {
                max = num[index];
            }
        }
    }
    console.log(`the maximuim number is ${max}`);
    return max;
}
findMax([2, 3, 45, 6, 67, 8, 79, 89, 89, 789, 3245678]);
function findmin(num) {
    let min = num[0];
    for (let index = 1; index < num.length; index++) {
        if (num[index] < min) {
            min = num[index];
        }
    }
    return min;
}
console.log(findmin([1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 89]));
//# sourceMappingURL=Arrays.js.map