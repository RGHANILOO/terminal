export default function (output) {
  console.log(`i am the help function`);
  output.innerHTML += `
    \
<span data-color="grey">Key Application Commands: </span>
    <span data-color="grey">-------------------------</span>

    <span data-color="lime">Who?</span>\n   <span data-color="grey">-</span> <span data-color="yellow">Information about who i am.</span>
    <span data-color="lime">Why?</span>\n   <span data-color="grey">-</span> <span data-color="yellow">Why do i want career as software developer </span>
    <span data-color="lime">What?</span>\n  <span data-color="grey">-</span> <span data-color="yellow">What i have buit and learned along the way.</span>
    <span data-color="lime">Contact: </span>\n  <span data-color="grey">-</span> <span data-color="yellow">Here is how to reach me?</span>

    <span data-color="grey">Additional Commands: </span>
    <span data-color="grey">-------------------------</span>

    <span data-color="lime">Games: </span>\n   <span data-color="grey">-</span> <span data-color="yellow">series of mini games</span>
    <span data-color="lime">Code Wars:</span>\n   <span data-color="grey">-</span> <span data-color="yellow">Why do i want career as software developer </span>
    <span data-color="lime">CV:</span>\n  <span data-color="grey">-</span> <span data-color="yellow">What i have buit and learned along the way.</span>
    `;
}
