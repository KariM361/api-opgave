//controller code.
export default async function getDogImages(count){


//starter en netværksanmodning
 return fetch('https://dog.ceo/api/breeds/image/random/'+count) 
//håndtere det rå svar fra serveren
.then(response => response.json()) // =>response.json() (konvaterer svaret til et javascript-objekt.)
 //adgang til den faktiske  data
  .then(data => { 
   return data.message;//her laver vi return i stedet for view, den sender data ud igen.
  })
  .catch(error => { //fanger fejl(server og netværk)
    console.error('Fejl:', error);//hvis der vises en fejl ses det i konsolen.
  });
  }