// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList : string [] = ["Misbah","Bushra","Maryam","Aisha"];

let guestUnableToAttend : string = "Bushra";

let newGuest :string = "Laiba";

guestList[guestList.indexOf(guestUnableToAttend)] = newGuest;
console.log(guestList);

// guestList.map((items) => 
// console.log(`Dear ${items} ,Good news! we found a bigger dinner table.so we are invited more people`));

//Beginning 
let guestBeg : string = "Esha";
guestList.unshift(guestBeg);
console.log(guestList);

//middle guest
let middleGuest : string ="Fatima";
let middleIndex = guestList.length/3
guestList.splice(middleIndex,0,middleGuest);
console.log(guestList);

//end guest
guestList.push("Rameessa");
console.log(guestList);