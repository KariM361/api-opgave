import getDogImages from "./module/api.js"
//importerer funktionen getDogImages fra din api.js modulfil.
getDogImages( 15)
.then((data)=>{
  view(data)
})
//kalder getDogImages med tallet 15 (henter 15 billeder).
//når billederne er hentet, kaldes view funktionen med data.


   
function view(data) {
  const output = document.getElementById('output');
  output.innerHTML = data
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
    .join('');//samler alle Html strenge til en stor streng og indsætter det i output-elementet.
}

