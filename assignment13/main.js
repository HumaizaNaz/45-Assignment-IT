// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var GuestList = ["Misbah", "Bushra", "Maryam"];
GuestList.map(function (items) { return (console.log("Dear ".concat(items, ", I would be honored to invite you to dinner. please join me for an evening of interesting conversations"))); });
