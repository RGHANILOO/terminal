export default async function fetchData(output, _hist, ...args) {
  let userName;
  
  if (args.length) {
      userName = 'bytemefirst';
      output.innerHTML += '<span data-color="orange">Opening Codewars...</span>';
      window.open(`https://www.codewars.com/api/v1/users/${userName}code-challenges/completed?page=0`);
  } else {
      try {
          const response = await fetch(`https://www.codewars.com/api/v1/users/${userName}code-challenges/completed?page=0`);
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
          const userData = await response.json();
          
          const overallRank = userData.ranks.overall.name;
         
          
          // Update this part according to your data structure or remove it if not needed
          output.innerHTML += `
              View More On My <span><a href='https://www.codewars.com/api/v1/users/${userName}'>Codewars</a></span>\n
          `;
      } catch (error) {
          output.innerHTML += `<span data-color="red">${error.message}</span>`;
      }
  }}