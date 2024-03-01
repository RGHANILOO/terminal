export default function help (output) {
  console.log(`i am the help function`);
  output.innerHTML += `
    \
    
    <span data-color="grey">Key Application Commands: </span>
    <span data-color="grey">-------------------------</span>

    <span data-color="#2bad5d">who</span>\n  <span data-color="grey">-</span> <span data-color="#d06b33">Information about who i am</span>
    <span data-color="#2bad5d">why</span>\n  <span data-color="grey">-</span> <span data-color="#d06b33">Why Founders and Coders and why career in software development</span>
    <span data-color="#2bad5d">what</span>\n  <span data-color="grey">-</span> <span data-color="#d06b33">What i have built and learned along the way</span>
    <span data-color="#2bad5d">contact</span>\n  <span data-color="grey">-</span> <span data-color="#d06b33">Here is how you can reach me</span>

    <span data-color="grey">Additional Commands: </span>
    <span data-color="grey">--------------------</span>

    <span data-color="#2bad5d">codewars</span>\n  <span data-color="grey">-</span> <span data-color="#d06b33">A list of all the completed かた having reached ごきゅう</span>
    <span data-color="#2bad5d">cv</span>\n  <span data-color="grey">-</span> <span data-color="#d06b33">You can download a copy of my CV here</span>
    <span data-color="#2bad5d">clear</span>\n  <span data-color="grey">-</span> <span data-color="#d06b33">Clear the terminal</span>
    
    `;
}
