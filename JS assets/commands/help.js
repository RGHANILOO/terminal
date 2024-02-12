export default function help (output) {
  console.log(`i am the help function`);
  output.innerHTML += `
    \
    
    <span data-color="grey">Key Application Commands: </span>
    <span data-color="grey">-------------------------</span>

    <span data-color="lime">Who</span>\n  <span data-color="grey">-</span> <span data-color="yellow">Information about who i am.</span>
    <span data-color="lime">Why</span>\n  <span data-color="grey">-</span> <span data-color="yellow">Why Founders and Coders and why career in software development </span>
    <span data-color="lime">What</span>\n  <span data-color="grey">-</span> <span data-color="yellow">What i have buit and learned along the way.</span>
    <span data-color="lime">Contact: </span>\n  <span data-color="grey">-</span> <span data-color="yellow">Here is how you can reach me</span>

    <span data-color="grey">Additional Commands: </span>
    <span data-color="grey">--------------------</span>

    <span data-color="lime">Codewars:</span>\n  <span data-color="grey">-</span> <span data-color="yellow">A list of all the completed かた having reached きゅうご</span>
    <span data-color="lime">CV:</span>\n  <span data-color="grey">-</span> <span data-color="yellow">What i have buit and learned along the way.</span>
    <span data-color="lime">Clear</span>\n  <span data-color="grey">-</span> <span data-color="yellow">Clear the terminal</span>
    
    `;
}
