fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(res => {
    console.log(res)
    res.products.forEach(element => {
      document.getElementById("lista").innerHTML += `
            <li id="${element.id}" class="${element.category}">
        <div class="content objeto">
            <h4>${element.title}</h4>
            <h4>${element.price}</h4>
            <h4>${element.brand}</h4>
            <button type="button" class="open-modal" data-open="${element.id + 1}" data-bs-toggle="modal" data-bs-target="#${element.id + 1}">mas informacion</button>
            <div class="modal" id="${element.id + 1}" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">${element.title}</h5>
                </div>
                <div class="modal-body">
                  <p>Descripcion: ${element.description}</p>
                  <p>Stock: ${element.stock}</p>
                  <p>Precio: ${element.price}</p>
                  <p>Rating: ${element.rating}</p>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
             </li>
            `
      const openEls = document.querySelectorAll("[data-open]");
      const isVisible = "is-visible";
      for (const el of openEls) {
        el.addEventListener("click", function () {
          const modalId = this.dataset.open;
          document.getElementById(modalId).classList.add(isVisible);
        });
      }

    });
  })


function buscar() {
  var nombre = document.getElementById("ingreso").value
  fetch(`https://dummyjson.com/products/search?q=${nombre}`)
    .then(res => res.json())
    .then(res => {
      try {
        var producto = res.products[0]
        var elementos = Array.from(document.getElementsByTagName("li"));;
        for (let index = 0; index < 30; index++) {
          if (elementos[index].id != producto.id) {
            elementos[index].style.display = "none"

          }
        }

      } catch (error) {
        alert("No se encontro el elemento")
      }
    })
}
function reiniciar() {
  var objetos = Array.from(document.getElementsByTagName("li"))
  objetos.forEach(element => {
    element.attributeStyleMap.delete('display')
  })
}

function filtro(nombre) {

  var elementos = Array.from(document.getElementsByTagName("li"));;
  for (let index = 0; index < 30; index++) {
    if (!elementos[index].classList.contains(nombre)) {
      elementos[index].style.display = "none"

    }
  }

}

