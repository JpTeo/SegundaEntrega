const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");

const diplayCart = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "block";
  modalOverlay.style.display = "block";
  // modal header
  const modalHeader = document.createElement("div");

  const modalTitle = document.createElement("div");
  modalTitle.innerText = "Carrito";
  modalTitle.ClassName = "modal-title";
  modalHeader.append(modalTitle);

  const modalClose = document.createElement("button");
  modalClose.className = "btn btn-danger";
  modalClose.innerText = "Cerrar carrito";
  modalHeader.append(modalClose);

  modalClose.addEventListener("click", () => {
    modalContainer.style.display = "none";
    modalOverlay.style.display = "none";
  });

  modalContainer.append(modalHeader);

  // modal Body

  cart.forEach((el) => {
    const modalBody = document.createElement("div");
    modalBody.className = "modal-body";
    modalBody.innerHTML = `<div class="product">
    <img class ="product-img" src="${el.img}"/>
    <div class = "product-info">
    <h4>${el.name}</h4>
    </div>
    <div class= "cantidad">
    <button class= "cantidad-btn-decrese"> - </button>
    <span class= "cantidad-input">${el.cant}</span>
   <button class= "cantidad-btn-increse"> + </button>
    </div>
    <div class="price">${el.price * el.cant} $</div>
    <button class="delete-product">❌</button>
    
    </div>
   `;
    modalContainer.append(modalBody);

    const decrese = modalBody.querySelector(".cantidad-btn-decrese")
    decrese.addEventListener("click", () => {
     if(el.cant !== 1){
       el.cant--;
       diplayCart();
     }
    })

const increse = modalBody.querySelector(".cantidad-btn-increse");
 increse.addEventListener("click", () => {
       el.cant++;
       diplayCart();
      })
 

  
  const deleteProduct = modalBody.querySelector(".delete-product");
  deleteProduct.addEventListener ("click", ()=>{
    deleteCartProduct(el.id);
  });
  });

  
  // modal footer
const total = cart.reduce((acc, el) => acc + el.price * el.cant, 0);
 


const modalFooter = document.createElement("div");
modalFooter.className = "modal-footer";
modalFooter.innerHTML = `
  <div class="total-price">Total ${total}</div>
  <button id="datos-btn" class="btn btn-primary">Comprar</button>
`;
modalContainer.append(modalFooter);

const datosBtn = document.getElementById("datos-btn");
datosBtn.addEventListener("click", () => {
  window.location.href = "datos.html";
});

};



cartBtn.addEventListener("click", diplayCart);


const deleteCartProduct = (id) => {
  const foundIndex = cart.findIndex((el) => el.id === id);
  if (foundIndex !== -1) {
    cart.splice(foundIndex, 1);
    diplayCart(); 
  } else {
    console.log("Producto no encontrado en el carrito");
  }
};
