// handler function to handle the user input,proicessing it and returning the results

/**
 * logic:
 * and asynchronous function to handle the user input
 * take and `input` string param reperesting the commands
 * the output is a html element displayed in the terminal
 * history is an array of the commands stored
 *
 *
 *
 */

export async function handler(input, output, history) {
  input = input.toLowerCase();
    console.log({input})
  let exec = input.split(" ");
  let cmd = exec.shift();
  let args = exec.slice(1);

  if (!cmd) return;

  try {
    let handler = await import(`./commands/${cmd}.js`);
    await handler.default(output, history, ...args);
  } catch (err) {
    output.textContent += `\n Command "${cmd}": not found!`;


    
  }
}
