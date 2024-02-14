export default async function fetchData(output) {
  try {
    const res = await fetch("https://www.codewars.com/api/v1/users/bytemefirst/code-challenges/completed?page=0");
    const data = await res.json();

    for (let i = 0; i < data.data.length; i++) {
      const challenge = data.data[i];
      output.innerHTML += `\n <span data-color="#d06b33">${challenge.name}</span> <span data-color="#9072b7">${challenge.completedLanguages}</span> <span data-color="grey">|==>></span> ${challenge.completedAt}\n`;
    }

    // loop over each item in the data array
  } catch (err) {
    console.log(err);
  }
}
