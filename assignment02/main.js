"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = " Humaiza Naz";
//LowerCase
console.log("loweCase:" + personName.toLowerCase());
//UpperCase
console.log("UpperCase:" + personName.toUpperCase());
//TitleCase
// function toTitleCase(str:string):string{return str.replace(/\b\w/g,char =>char.toUpperCase());}
// console.log("TitleCase;"+ toTitleCase(personName));
console.log("TitleCase", personName.replace(/\b\w/g, c => c.toUpperCase()));
