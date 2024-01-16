const container = document.getElementById("container");
const cart = [];

productos.forEach((el, idx) => {
    const card = document.createElement("div");
    card.className = "card";

    const nameConsola = document.createElement("h4");
    nameConsola.innerText = `${el.name}`;
   

    const imgConsola = document.createElement("img");
    imgConsola.src = el.img;
    

    const buyButton = document.createElement("button");
    buyButton.innerText = "Comprar";
    buyButton.onclick = () => alert("Agregaste al caarrito una " + el.name);

    card.appendChild(nameConsola);
    card.appendChild(imgConsola);
    card.appendChild(buyButton);

    container.appendChild(card);

    buyButton.addEventListener("click", ()=> {
        cart.push({
          id: el.id,
          name: el.name,
          price: el.price,
          cant: el.cant,
          img: el.img,
        });
        console.log(cart)
    })
})

