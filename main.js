function fetchPitches() {
    fetch("https://backend-website-jeel.onrender.com/pitches")
        .then((res) => res.json())
        .then((data) => cardlist(data))
        .catch((err) => console.log(err));
}

fetchPitches();

function cardlist(data) {
    const store = data.map((el) => card(el.id, el.image, el.title, el.description, el.price, el.percentage));
    let main = document.getElementById("data"); // Ensure 'main' refers to an existing DOM element
    main.innerHTML = store.join('');
}

function card(id, image, title, description, price, percentage) {
    return `
    <a href="discription.html?id=${encodeURIComponent(id)}&image=${encodeURIComponent(image)}&title=${encodeURIComponent(title)}
    &price=${encodeURIComponent(price)}&percentage=${encodeURIComponent(percentage)}&description=${encodeURIComponent(description)}">
    <div class="card" data-id="${id}">
    <div class="card-img">
        <a><img src="${image}"  style="height:468px;width:470px; display:flex; " alt="">
        
    </div></a>
    <div class="card-body">
        <h4 class="card-title" style=" font-family: "Space Grotesk", sans-serif;
        font-optical-sizing: auto;
        font-weight: 1000;
        font-style: normal;" style="margin-left:280px">${title}</h4>
        <p class="card-price" style="margin-left:280px">${price}</p>
        <button style=" padding:10px">BUY NOW</button>
        <a href="discription.html" class="p-3 cd text-end"style="margin-left:280px"><i class="bi bi-bag-heart ci"></i></a>
        
    </div>
        </div>
    </a>    `
}