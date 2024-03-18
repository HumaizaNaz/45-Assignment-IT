// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Equality and Inequality test 1
console.log("Equality test with string : ", "Apple" === "Apple");
//Equality and Inequality test 2
console.log("Equality test with string : ", "Apple" != "Orange");
// Tests using the lower case function 
console.log("Lower case function test:", " Hello".toLowerCase() === "hello");
//Numerical tests involving equality 
console.log("Equality test with numbers :", 26 === 26);
// Numerical tests involving inequality
console.log("Equality test with numbers :", 26 != 35);
//greater than and less than 
console.log("Greater then test :", 10 > 5);
//less than test
console.log("less than test :", 5 < 10);
//greater than or equal to 
console.log("Greater than and equal to test :", 10 >= 10);
//less than or equal to
console.log("less than and equal to test :", 5 <= 10);
//Test using "and" operator
console.log("And operator test :", 5 === 5 && 10 > 5);
//Test using "or" operator 
console.log("or operator test :", 5 === 5 || false);
//Test whether an item is in  array
var fruits = ['pear', 'Banana', 'Guava', 'Pineapple'];
console.log('Test "pear" in the array :', fruits.includes("pear"));
//Test whether an item is not in a array
console.log('Testing "Apple" is not in array : ', !fruits.includes('Apple'));
