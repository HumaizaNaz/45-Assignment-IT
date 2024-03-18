// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//ass 14
// let GuestList : string [] = ["Misbah","Bushra","Maryam"];

// GuestList.map((items) => (console.log(`Dear ${items}, I would be honored to invite you to dinner. please join me for an evening of interesting conversations`)));

//Task 15
let GuestList : string [] = ["Misbah","Bushra","Maryam"];
// Identify the guest who can't make it
let guestWhoCantMakeIt = "Bushra";
console.log(`Unfortunately, ${guestWhoCantMakeIt} can not attend `);


// Replace the guest who can't make it with a new person
let newPerson = "Wania";
GuestList[GuestList.indexOf(guestWhoCantMakeIt)] =  newPerson;
console.log(GuestList)

// Print second set of invitations with the updated guest list
GuestList.map((items) =>
console.log(`Dear ${GuestList}, You are cordially invited to dinner at my place. It would be an honor to have your company.Humaiza`))