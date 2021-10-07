//Declaration de la variable "produitEnregistrer" qui contient les "keys" et les "values" présentes dans le local storage :

let produitEnregistrer = JSON.parse(localStorage.getItem("product"));
console.log(produitEnregistrer);

//----------------------Affichage des produits dans le panier
//Selection de la classe pour injecter le code HTML
const affichageProduit = document.querySelector("#recapitulatif");
console.log(affichageProduit);

//Dans le cas ou le panier est vide : afficher "le panier est vide"
if (produitEnregistrer === null) {
  affichageProduit.innerHTML = "Votre panier est vide";
} else {
  //Dans le cas ou le panier n'est pas vide : afficher les produits du localStorage
  let contenuPanier = [];

  for (i = 0; i < produitEnregistrer.length; i++) {
    contenuPanier =
      contenuPanier +
      `
    <div class="commande">
    <img class="img_panier" src=" ${produitEnregistrer[i].imageProduit}" alt="ours en peluche"/>
    <div class= "nom_produit"> Nom - ${produitEnregistrer[i].nomProduit} </div><div class="option"> Option : ${produitEnregistrer[i].couleurProduit} </div>
    <div class="montant"> ${produitEnregistrer[i].prixProduit} €
    `;
  }
  if (i === produitEnregistrer.length) {
    //injection du code HTML dans la page panier
    affichageProduit.innerHTML = contenuPanier;
  }
}
