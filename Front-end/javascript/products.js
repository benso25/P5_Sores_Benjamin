//Récupération de la chaîne de requête dans l'url
const id = window.location.search;
console.log(id);

//methode pour extraire juste l'id (sans "?id=")
const productId = id.slice(4);
console.log(productId);

fetch(`http://localhost:3000/api/teddies/`+productId)
    .then((response)=> {
        response.json().then((results) =>{
            console.log(results);

            
        })

    });




















        