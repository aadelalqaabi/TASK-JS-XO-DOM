// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
    document.location.reload(true);
  }
}
let toggle = true;

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let array = [];
function clickButton(index) {
  if (toggle) {
    if (!array.includes(array.find((num) => num === index))) {
      array.push(index);
      fillButton(index, "X");
      toggle = false;
    }
  }
  if (!toggle) {
    if (!array.includes(array.find((num) => num === index))) {
      fillButton(index, "O");
      array.push(index);
      toggle = true;
    }
  }
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
