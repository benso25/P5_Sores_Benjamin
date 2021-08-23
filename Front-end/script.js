// declaration des constantes pour les images 

// const img1 = document.getElementById('img1');
// const img2 = document.getElementById('img2');
// const img3 = document.getElementById('img3');
// const img4 = document.getElementById('img4');
// const img5 = document.getElementById('img5');

// declaration des constantes pour les noms

// const name = document.getElementById('name1', 'name2', 'name3', 'name4', 'name5');
// const name2 = document.getElementById('name2');
// const name3 = document.getElementById('name3');
// const name4 = document.getElementById('name4');
// const name5 = document.getElementById('name5');

// declaration des constantes pour les prix

// const price1 = document.getElementById('price1');
// const price2 = document.getElementById('price2');
// const price3 = document.getElementById('price3');
// const price4 = document.getElementById('price4');
// const price5 = document.getElementById('price5');


// Appel des données depuis l'API

fetch ('http://localhost:3000/api/teddies')
    .then(res => {
        if(res.ok){
            res.json().then(data => {

                // premier produit

                img1.src = data[0].imageUrl
                name1.innerHTML = data[0].name
                price1.innerHTML = data[0].price.toFixed(2)/100
                
                // deuxieme produit

                img2.src = data[1].imageUrl
                name2.innerHTML = data[1].name
                price2.innerHTML = data[1].price.toFixed(2)/100  
                
                // troisieme produit

                img3.src = data[2].imageUrl
                name3.innerHTML = data[2].name
                price3.innerHTML = data[2].price.toFixed(2)/100 

                // quatrieme produit
                
                img4.src = data[3].imageUrl
                name4.innerHTML = data[3].name
                price4.innerHTML = data[3].price.toFixed(2)/100
                
                // cinquieme produit

                img5.src = data[4].imageUrl
                name5.innerHTML = data[4].name
                price5.innerHTML = data[4].price.toFixed(2)/100  
            })
        } else{
            console.log("ERREUR");
            document.getElementById('error').innerHTML = "Désolé, une erreur est survenue durant le chargement de la page"
        }

     })
 





