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

                //creation de la <div> description
                let productDescription = document.createElement('div');
                //injection du texte et du style
                productDescription.innerHTML = "<span style='font-size: 13px;  color: black; text-shadow: 2px 2px 2px white; margin-top: 1.4rem; text-align: center;'> " + produit.description + "</span>";

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
                select.setAttribute('id', 'options');
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
                    fieldset.appendChild(productDescription);
                    fieldset.appendChild(productPrice);
                    fieldset.appendChild(form);
                    form.appendChild(label);
                    form.appendChild(select);
                    select.appendChild(option0);
                    

                    for(let i=0; i<produit.colors.length;i++){
                        let option1 = document.createElement('option');
                        option1.setAttribute('value', produit.colors[i]);
                        option1.innerHTML = produit.colors[i];

                        select.appendChild(option1);
                     }

                    //creation bouton achat
                    let btnPanier = document.createElement ('button');
                    btnPanier.setAttribute('type', 'submit');
                    btnPanier.setAttribute('id','btn_panier');
                    btnPanier.innerHTML = "Ajouter au panier";
                    //style bouton achat
                    btnPanier.style.fontFamily = "Lobster', cursive";
                    btnPanier.style.fontWeight = "bold";
                    btnPanier.style.fontSize = "1rem";
                    btnPanier.style.marginTop = "2rem";
                    btnPanier.style.marginBottom = "0.5rem";
                    btnPanier.style.width = "10rem";
                    btnPanier.style.padding = "0.8rem";
                    btnPanier.style.backgroundColor = "white";
                    btnPanier.style.color = "black";
                    btnPanier.style.borderRadius = "15px 15px";
                    btnPanier.style.boxShadow = "1px 1px 1px black";

                    //creation lien retour
                    let lienContinuer = document.createElement ('a');
                    lienContinuer.setAttribute('href',"../index.html");
                    lienContinuer.innerHTML = "Continuer vos achats";
                    //style lien retour
                    lienContinuer.style.textDecoration = 'none';
                    lienContinuer.style.color = 'black';

                    //creation lien panier
                    let lienPanier = document.createElement('a');
                    lienPanier.setAttribute('href', "../pages/card.html");
                    lienPanier.innerHTML = "Voir mon panier";
                    //style lien panier
                    lienPanier.style.textDecoration = 'none';
                    lienPanier.style.marginTop = "0.5rem";
                    lienPanier.style.color = 'black';


                    fieldset.appendChild(btnPanier);
                    fieldset.appendChild(lienContinuer);
                    fieldset.appendChild(lienPanier);



                //*****************Gestion du Panier */
                //récupération des données selectionnées par l'utilisateur

                //selection de l'id du formulaire
                const idForm = document.querySelector("#options");
                console.log(idForm);


                //selection du bouton Ajouter au panier
                const btnAjouter = document.querySelector('#btn_panier');


                //-------------------------------------Ecouter le bouton et envoyer le panier

                btnAjouter.addEventListener('click', (event)=>{
                event.preventDefault(); //empêche la réactualisation de la page au clic

                
                //mettre l'option choisie dans une variable
                const choix = idForm.value;

                //récupération des valeurs du formulaire
                let optionProduit = {
                    imageProduit : produit.imageUrl,
                    nomProduit : produit.name,
                    descriptionProduit : produit.description,
                    idProduit : productId,
                    couleurProduit : choix,
                    prixProduit : produit.price.toFixed(2)/100,
                }

                console.log(optionProduit);


                //-------------------------------Le Local Storage-----------------------------------------
                //------Stocker la récupération des données dans le Local storage--

                //Declaration de la variable "produitEnregistrer" qui contient les "keys" et les "values" présentes dans le local storage :

                let produitEnregistrer = JSON.parse(localStorage.getItem("product"));

                //       (--JSON.parse convertit les données au format JSON dans le local storage en objet JavaScript--)


                //S'il y a déja des produits enregistrés dans le local storage :

                if(produitEnregistrer){
                    //----------ajout dans le tableau de l'objet avec les values choisies par l'utilisateur
                    produitEnregistrer.push(optionProduit);

                    //-----------la transformation en format JSON et envoi de la key "product" du local storage 
                    localStorage.setItem("product", JSON.stringify(produitEnregistrer));

                }
                //S'il n'y a pas de produits enregistrés dans le local storage:

                else{

                    //Création d'un tableau vide pour ajouter les values choisies
                    produitEnregistrer = [];

                     //-----------ajout dans le tableau de l'objet avec les values choisies par l'utilisateur
                    produitEnregistrer.push(optionProduit);

                    //-----------la transformation en format JSON et envoi de la key "product" du local storage 
                    localStorage.setItem("product", JSON.stringify(produitEnregistrer));

                }





                });

                





                
                




















                    



                


        })

    });




















        