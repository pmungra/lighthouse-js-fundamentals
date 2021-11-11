// X Marks the Perfect Shot 📸

/*For this challenge you'll have to implement a function called finalPosition(moves), which will calculate the position of the parade based on an array of directional moves. The parade will move on an X-Y grid like the following.

X Y coordinate grid

Your function will receive an array of moves, which are strings that say either north, south, west, or east, these represent the parade moving in a particular direction by a single space on the grid. By looking at the path that the parade moves in, your function should calculate and then return an array representing the position of the parade after completing all of the moves. The first element of the array should be the X position, and the second element of the array should be the Y position. The parade begins at [0,0].

If we called the function with the following arguments.

*/


const finalPosition = function (moves) {
  let position = [0,0];

  // Loops through each direction in the moves array
  for (const direction of moves) {
    if (direction === "north") {
      position[1] += 1; // Increase Y by 1
    } else if (direction === "south") {
      position[1] -= 1; // Decrease Y by 1
    } else if (direction === "east") {
      position[0] += 1; // Increase X by 1
    } else if (direction === "west") {
      position[0] -= 1; // Decrease X by 1
    }
  } 
  return position;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves)); 