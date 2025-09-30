//starter en netværksanmodning
fetch('https://dog.ceo/api/breeds/image/random/50') 
//håndtere det rå svar fra serveren
.then(response => response.json()) // =>response.json() (konvaterer svaret til et javascript-objekt.)
 //adgang til den faktiske  data
  .then(data => { 
    view(data);
  })
  .catch(error => { //fanger fejl(server og netværk)
    console.error('Fejl:', error);
  });
   
function view(data) {
  const output = document.getElementById('output');
  output.innerHTML = data.message
    .map((url, i) => {
      // Udtræk racen fra URL'en
      const match = url.match(/breeds\/([a-zA-Z-]+)\//);
      const breed = match ? match[1].replace('-', ' ') : 'Ukendt';
      return `
        <div id="img-container">
          <img src="${url}" alt="Dog image">
          <div id="img-text">${breed.charAt(0).toUpperCase() + breed.slice(1)}</div>
        </div>
      `;
    })
    .join('');
}

