// main function to execute here
// handle the user command

import { handler } from "./command.js";

const message = ` Welcome to Reza's terminal emulator. Type 'help' to get started`;
//  history store the excuted commands
const history = [];
const terminal = document.querySelector('pre')

// initlising the command template from html file
let commandTemplate = document.querySelector("#command-template").content.cloneNode(true);

// to help with delay of triggering the animation of the introduction to the site
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
setTimeout(async () => {
  for (let i = 0; i < message.length; i++) {
    terminal.textContent += message[i];
    await sleep(100);
  }
  terminal.appendChild(commandTemplate);
}, 500);

/**
 * event listenersto handle the user input and command execustions 
 * 
 * to implement focus listener to the input field
 * to implement keydown listener to the input field
 * keydown event for enter, arrowup aND DOWN
 * ENTER TO EXECUTE THE COMMAND
 * arrow up to get the previous command
 * arrow down to clear
 * 
 */