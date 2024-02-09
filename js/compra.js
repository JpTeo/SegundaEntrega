const finalizar = document.getElementById("finalizar");

const btn3 = document.createElement("button");
btn3.className = "btn btn-outline-success";
btn3.innerText = "Finalizar";
btn3.onclick = () => terminarCompra();


function terminarCompra() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Tu compra se realizo con éxito",
    showConfirmButton: false,
    timer: 2000,
  });
}

finalizar.appendChild(btn3);
