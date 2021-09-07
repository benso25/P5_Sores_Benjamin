// Appel des données depuis l'API
let divTeddies = document.getElementsByClassName("teddies")[0];



fetch ('http://localhost:3000/api/eddies')
    .then(res => {
        console.log(res);
        if(res.ok){
            res.json().then(data => {


                data.forEach(element => {
                    console.log(element);

                    //creation du lien 
                    let lien = document.createElement('a');
                    lien.setAttribute('href', "./pages/product.html?id="+element._id);
                    //style du lien 
                    lien.style.border = "1px solid transparent";
                    lien.style.borderRadius = "25px 25px";
                    lien.style.height = "15rem";
                    lien.style.width = "15rem";
                    lien.style.marginBottom = "3rem";
                    lien.style.backgroundColor = "#8dc1f5";
                    lien.style.boxShadow ="2px 2px 2px black";


                    //creation de l'image
                    let image = document.createElement('img');
                    image.setAttribute('src', element.imageUrl);
                    //style de l'image
                    image.style.height =  "11rem";
                    image.style.width = "15rem";
                    image.style.borderRadius = "25px 25px 0 0";
                    image.style.objectFit = "cover";
                    

                    //creation du nom
                    let nom = document.createElement('div');
                    //injection du nom + style
                    nom.innerHTML = "<span style='font-size: 30px;  color: black; text-shadow: 2px 2px 2px white; margin-top: -0.4rem; text-align: center; font-weight: 200;'> " + element.name + "</span>";


                    //creation du prix 
                    let prix = document.createElement('div');
                    //injection du prix + style
                    prix.innerHTML ="<span style= 'font-size: 20px; color: black; text-shadow: 2px 2px 2px white; margin-top: -0.1rem; text-align: center; font-weight: 200;'>" +  element.price.toFixed(2)/100 + '€' + "</span>";


                    lien.appendChild(image);
                    lien.appendChild(nom);
                    lien.appendChild(prix);
                    divTeddies.appendChild(lien);

                    
                    
                });
            })

        } else{
            // console.log("ERREUR");
            let erreurs = document.getElementsByClassName('error');
            for(let i = 0; i< erreurs.length; i++){
                erreurs[i].innerHTML = "Désolé nous rencontrons un problème lors du chargement de la page. <br>Veuillez réessayer plus tard.<br> Si le problème persiste, n'hésitez pas à nous contacter ";
            }
            
        }

})



















