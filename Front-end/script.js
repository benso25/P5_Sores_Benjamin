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
 





