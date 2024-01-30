export default function codeWars() {
    function fetchData() {
        fetch("https://www.codewars.com/api/v1/users/bytemefirst")
            .then(response => response.json())
            .then(data => {
                // Process the data
                console.log(data.ranks.overall.rank);
                console.log(data.honor)
                document.createElement('div').innerHTML += `
                
                    <span data-color="lime">overall rank</span>\n   
                    <span data-color="grey">-</span> 
                    <span data-color="yellow">${data.ranks.overall.rank}</span>
                    <span data-color="lime">honor</span>\n   
                    <span data-color="grey">-</span> 
                    <span data-color="yellow">${data.honor}</span>
                `;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Call the fetchData function when needed
    fetchData();
}