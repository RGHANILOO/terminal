// main function to execute here
// handle the user command

import { handler } from "./command.js";

const message = ` Welcome to Reza's terminal emulator. Type 'help' to get started`;
//  history store the excuted commands
const history = [];
const terminal = document.querySelector("pre");
terminal.textContent += message;

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
}, 200);

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

document.addEventListener("DOMContentLoaded", () => {
  const container = document.body;
  container.addEventListener("click", handleInputFocus);
  container.addEventListener("keydown", handleInputKeydown);
});
function handleInputFocus(e) {
  const target = e.target;
  if (target.tagName === "INPUT" && !window.getSelection().toString()) {
    target.focus();
  }
}

async function handleInputKeydown(e) {
  let prompts = document.querySelectorAll("input");
  let command = prompts[prompts.length - 1];

  switch (e.key) {
    case "Enter":
      handleEnterKey(command);
      break;
    case "ArrowUp":
      handleArrowUpKey(command);
      break;
    case "ArrowDown":
      handleArrowDownKey(command);
      break;
  }
}

async function handleEnterKey(command) {
  // prompts = document.querySelectorAll("input");
  command.setAttribute("placeholder", command.value);
  command.setAttribute("readonly", true);

  document
    .querySelectorAll(".help")
    .forEach((span) => span.parentElement.remove());

  if (command.value.includes("&&")) {
    let commands = command.value.split("&&");
    for (let cmd of commands) {
      await handler(cmd, terminal, history);
      terminal.textContent += "\n";
    }
  } else {
    await handler(command.value, terminal, history);
  }
  history.push(command.value);

  let commandTemplate = document
    .querySelector("#command-template")
    .content.cloneNode(true);
  terminal.appendChild(commandTemplate);

  let prompts = document.querySelectorAll("input");
  handleInputFocus({ target: prompts[prompts.length - 1] });

  document.documentElement.style.scrollBehavior = "smooth";
  window.scrollBy(0, window.innerHeight);
}

function handleArrowUpKey(command) {
  command.value = history[history.length - 1];
}

function handleArrowDownKey(command) {
  command.value = "";
}
