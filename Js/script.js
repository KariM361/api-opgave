fetch('https://dog.ceo/api/breeds/image/random/50')
  .then(response => response.json())
  .then(data => {
    view(data);
  })
  .catch(error => {
    console.error('Fejl:', error);
  });

function view(data) {
  const output = document.getElementById('output');
  // Tilføj klassen "dog-image" til hvert billede
  const imagesHtml = data.message.map(url => `<img src="${url}" alt="Dog" id="image">`).join('');
  output.innerHTML = `
    <h2>Dog pictures</h2>
    ${imagesHtml}
  `;
}