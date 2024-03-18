// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car: string = 'subaru';
//test no 1
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

//Test no 2
console.log("Is car == 'subaru'? I predict False.");
console.log(car == 'subaru');

//Test no 3
console.log("Is car != 'Honda'? I predict True.");
console.log(car != 'Honda');

//Test no 4
console.log("Is car !== 'Ford'? I predict True.");
console.log(car !== 'Ford');

//Test no 5
console.log("Is car .Upper case == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() !== 'SUBARU');

//Test no 6
console.log("Is car == 'SUBARU'? I predict False.");
console.log(car == 'SUBARU');

//Test no 7 
console.log("Is car === 'SUBARU'? I predict False.");
console.log(car === 'SUBARU');

//Test no 8
console.log("Is car === 'train'? I predict False.");
console.log(car === 'train');

//Test no 9
console.log("Is car === 'Bus'? I predict False.");
console.log(car === 'Bus');

//Test no 10
console.log("Is car === 'cycle'? I predict False.");
console.log(car === 'cycle');

// = kisi bhi value ko set /assign krne ke liye use hota hai.
// == kisi bhi value ko check krne k liy use hota hai.
// ===kisi bhi value ko datatype ke sath check karne k liy use hota he .
// != mot equal
//  2 != 2 false
