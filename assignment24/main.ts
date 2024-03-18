// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

//Alien color #1

//Alien shot down in the game
let alienColorPass : string ="green";

//version that passes the if test
if (alienColorPass === "green"){
    console.log("Congratulations! You just earned 5 points");

}

//the version that fails the if test(no  output)

let alienColorFail:string = "yellow";
if(alienColorFail == "green"){
    console.log("no comment")

}