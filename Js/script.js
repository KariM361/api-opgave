fetch('https://dog.ceo/api/breeds/image/random/3')
  .then(response => response.json())
  .then(data => {
    view(data);
  })
  .catch(error => {
    console.error('Fejl:', error);
  });

function view(data) {
  const output = document.getElementById('output');
  // Lav HTML for billederne
  const imagesHtml = data.message.map(url => `<img src="${url}" alt="Dog" style="max-width:200px;">`).join('');
  output.innerHTML = `
    <h2>Hundebilleder</h2>
    ${imagesHtml}
  `;
}