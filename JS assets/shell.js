// main fnction to exceute here
//   handle the user command

/**
 * logic:
 * . display welcome message
 * . drop in the command template
 *  . imediate foxus on the input area on load
 * key down on enter key for excuting command
 * adding the excuted command to the history
 * clearing the input area and waitinf for new command
 *
 * key events:
 * up key to show the last command
 * down to clear
 * enter to exceute
 *
 */

// impoirt rhe handler functuion here
import { handler } from "./command.js";

const wellcomeMessage = ` Welcome to Reza's Terminal, type 'help' to get started !`;
const history = [];
let command = document
  .querySelector("#command-template")
  .content.cloneNode(true);



window.addEventListener("DOMContentLoaded", () => {
  let commandPrompts = document.querySelector("input");
});
console.log(wellcomeMessage);
