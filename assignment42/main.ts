// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
  }
}

// var magician = ["ali","hamza","bilal"];
// show_magicians(magician);

function make_great(magicians: string[]): void {
  for (
    let i = 0;
    i < magicians.length;
    i++ //i stand for index string
  ) {
    magicians[i] = magicians[i] + " the great"; // Bilal + the great
  }
}
const magicians2: string[] = ["ali", "hamza", "bilal"];
make_great(magicians2);
show_magicians(magicians2);

//Task 43

function make_great2(Magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (let i = 0; i < Magicians.length; i++) {
    greatMagicians.push(Magicians[i] + " the Great");
  }
  return greatMagicians;
}
const magicians3: string[] = ["ali", "hamza", "bilal"];
const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
