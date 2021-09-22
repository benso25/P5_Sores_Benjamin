//Declaration de la variable "produitEnregistrer" qui contient les "keys" et les "values" présentes dans le local storage :

let produitEnregistrer = JSON.parse(localStorage.getItem("product"));
console.log(produitEnregistrer);