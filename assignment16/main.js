// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
//Initial List of Guests
var guestList = ["Misbah", "Esha", "Maryam", "Aisha"];
// let guestList :string[] = ["Misbah","Esha"];
//Information that only two people can be invited 
// console.log("Due to limited space ,only two people can be invited for dinner.");
// Removing guest until only two names remain
// while(guestList.length > 2) {
//     const removedGuest = guestList.pop();//remove the last guest from the list
//     console.log(`sorry, ${removedGuest}, you're no longer invited to diner`);
// }
//Printing invitations to the remaining two guest
// guestList.forEach((guest) =>{
//     console.log(`Dear ${guest}, you're still invited to dinner.`);
// })
//Removing the last two names from the list
guestList.pop();
guestList.pop();
// Printing the final list to confirm it's empty
console.log("Final guest list :", guestList);
