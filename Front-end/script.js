// const img = document.getElementById('img1');

fetch ('http://localhost:3000/api/teddies')
    .then(res => res.json())
    .then(data => console.log(data))

    // .then(data => img.src = data[0].url)
