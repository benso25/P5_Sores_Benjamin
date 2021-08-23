// declaration des constantes pour les images 

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');

// declaration des constantes pour les noms

const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const name3 = document.getElementById('name3');
const name4 = document.getElementById('name4');
const name5 = document.getElementById('name5');

// declaration des constantes pour les prix

const price1 = document.getElementById('price1');
const price2 = document.getElementById('price2');
const price3 = document.getElementById('price3');
const price4 = document.getElementById('price4');
const price5 = document.getElementById('price5');


// Appel des données depuis l'API

fetch ('http://localhost:3000/api/teddies')
    .then(res => {
        if(res.ok){
            res.json().then(data => {
                img1.src = data[0].imageUrl
                name1.innerHTML = data[0].name
                price1.innerHTML = data[0].price  
            })
        } else{
            console.log("ERREUR");
            document.getElementById('error1').innerHTML = "Erreur"
        }
    
    })


fetch ('http://localhost:3000/api/teddies')
.then(res => {
    if(res.ok){
        res.json().then(data => {
            img2.src = data[1].imageUrl
            name2.innerHTML = data[1].name
            price2.innerHTML = data[1].price  
        })
    } else{
        console.log("ERREUR");
        document.getElementById('error2').innerHTML = "Erreur"
    }

})


fetch ('http://localhost:3000/api/teddies')
.then(res => {
    if(res.ok){
        res.json().then(data => {
            img3.src = data[2].imageUrl
            name3.innerHTML = data[2].name
            price3.innerHTML = data[2].price  
        })
    } else{
        console.log("ERREUR");
        document.getElementById('error3').innerHTML = "Erreur"
    }

})


fetch ('http://localhost:3000/api/teddies')
.then(res => {
    if(res.ok){
        res.json().then(data => {
            img4.src = data[3].imageUrl
            name4.innerHTML = data[3].name
            price4.innerHTML = data[3].price  
        })
    } else{
        console.log("ERREUR");
        document.getElementById('error4').innerHTML = "Erreur"
    }

})

fetch ('http://localhost:3000/api/teddies')
.then(res => {
    if(res.ok){
        res.json().then(data => {
            img5.src = data[4].imageUrl
            name5.innerHTML = data[4].name
            price5.innerHTML = data[4].price  
        })
    } else{
        console.log("ERREUR");
        document.getElementById('error5').innerHTML = "Erreur"
    }

})





