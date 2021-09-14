// let imgProduit = document.getElementsByClassName("produit_img")[0];
let blocProduit = document.getElementsByClassName("choix_teddies")[0];
// let imageProduit = document.getElementsByClassName("produit_img")[0];

//Récupération de la chaîne de requête dans l'url
const id = window.location.search;
console.log(id);

//methode pour extraire juste l'id (sans "?id=")
const productId = id.slice(4);
console.log(productId);

fetch(`http://localhost:3000/api/teddies/`+productId)
    .then((response)=> {
        response.json().then((produit) =>{
            console.log(produit);

                //creation de l'image
                let productImg = document.createElement('img');
                productImg.setAttribute('src', produit.imageUrl);
                //style de l'image
                productImg.style.marginBottom = "1rem";
                productImg.style.marginTop = "1rem";
                productImg.style.height =  "15rem";
                productImg.style.width = "18rem";
                productImg.style.borderRadius = "25px 25px";
                productImg.style.objectFit = "cover";

                //creation fieldset 
                let fieldset = document.createElement('fieldset');
                fieldset.style.width =  "13rem";
                fieldset.style.height = "13rem";
                fieldset.style.paddingTop = "0.5rem";
                fieldset.style.border =  "1px solid black";
                fieldset.style.backgroundColor = "rgb(215, 217, 247)";
                fieldset.style.borderRadius = "25px 25px";
                fieldset.style.marginTop = "1rem";
                fieldset.style.marginBottom = "1rem";
                fieldset.style.boxShadow = "1.5px 1.5px 1.5px black";

                //creation de la <div> nom
                let productName = document.createElement ('div');
                //injection du nom et du style
                productName.innerHTML = "<span style='font-size: 30px;  color: black; text-shadow: 2px 2px 2px white; margin-top: 1.4rem; text-align: center; font-weight: 200;'> " + produit.name + "</span>";

                //creation de la <div> prix
                let productPrice = document.createElement('div');
                //injection du prix et du style
                productPrice.innerHTML = "<span style= 'font-size: 20px; color: black; text-shadow: 2px 2px 2px white; margin-top: 1rem; text-align: center; font-weight: 200;'>" +  produit.price.toFixed(2)/100 + '€' + "</span>";

                //creation du formulaire
                let form = document.createElement('form');

                //creation du <label> 
                let label = document.createElement('label');
                label.setAttribute('for', 'options');
                label.innerHTML = "Choississez votre couleur";
                label.style.marginTop = "0.4rem";

                //creation du <select>
                let select = document.createElement('select');
                select.setAttribute('name', 'options');
                select.style.borderRadius = "15px 15px";
                select.style.border = "1px solid black";

                

                //creation des <option>
                    //creation option0
                let option0 = document.createElement('option');
                option0.setAttribute('value',"");
                option0.innerHTML = "selectionnez une option";


                    blocProduit.appendChild(productImg);
                    blocProduit.appendChild(fieldset);
                    fieldset.appendChild(productName);
                    fieldset.appendChild(productPrice);
                    fieldset.appendChild(form);
                    form.appendChild(label);
                    form.appendChild(select);
                    select.appendChild(option0);

                    for(let i=0; i<produit.colors.length;i++){
                        let option1 = document.createElement('option');
                        option1.setAttribute('value',"");
                        option1.innerHTML = produit.colors[i];

                        select.appendChild(option1);
                     }

                    //creation bouton achat
                    

                    



                


        })

    });




















        