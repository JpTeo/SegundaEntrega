const container = document.getElementById("container");

const cart = [];
let carrito = [];
let todosLosProductos = [];






prductos.forEach((el) => {
      const card = document.createElement("div");
      card.className = "card";
      card.style = "width: 18rem";

      const nameConsola = document.createElement("h5");
      nameConsola.innerText = `${el.name}`;
      nameConsola.className = "card-title";

      const imgConsola = document.createElement("img");
      imgConsola.src = el.img;
      imgConsola.className = "card-img-top";

      const buyButton = document.createElement("button");
      buyButton.innerText = "Comprar";
      buyButton.className = "btn btn-primary";
      buyButton.onclick = () => agregarAlCarrito(el.id);
      buyButton.id = el.id;

      card.appendChild(imgConsola);
      card.appendChild(nameConsola);
      card.appendChild(buyButton);

      container.appendChild(card);

      buyButton.addEventListener("click", () =>{
        const repeat = cart.some((repeatProduct) => repeatProduct.id === el.id);
        if (repeat) {
          cart.map((prod) =>{ 
          if(prod.id === el.id){
            prod.cant++; }
          });
        } else {
        cart.push({
          id: el.id,
          name: el.name,
          img: el.img,
          price: el.price,
          cant: el.cant,
        });  
        }

      })

      todosLosProductos.push(el);
    });

  

function agregarAlCarrito(id) {
  const productoAAgregar = todosLosProductos.find((el) => el.id === id);

  if (!carrito.some((el) => el.id === id)) {
    carrito.push({
      ...productoAAgregar,
      cantidad: 1,
    });
  } else {
    let indiceDelProducto = carrito.findIndex((el) => el.id === id);
    carrito[indiceDelProducto].cantidad += 1;
  }

  Toastify({
    text: `Agregaste ${productoAAgregar.name} al carrito`,
    duration: 2000,
  }).showToast();
}

finalizar.appendChild(btn3);







