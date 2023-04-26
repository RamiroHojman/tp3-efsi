fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(res => {
    console.log(res)
    res.products.forEach(element => {
      document.getElementById("lista").innerHTML += `
            <li>
        <div class="content objeto">
            <h4>${element.title}</h4>
            <h4>${element.price}</h4>
            <h4>${element.brand}</h4>
            <button type="button" class="open-modal" data-open="${element.id}" data-bs-toggle="modal" data-bs-target="#${element.id}">mas informacion</button>
            <div class="modal"  id="${element.id}"tabindex="-1">
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
  var objetos = document.getElementById("lista");
  objetos.style.display = "none"
  var busqueda = document.getElementById("lista2")
  busqueda.attributeStyleMap.delete('display')
  var nombre = document.getElementById("ingreso").value;
//si no encuentra tiene que poner "no se encontro!!!"
//busca por id los productos en la lista  y si no es pone en display none y sino lo muestra!!!!!!! 
  fetch(`https://dummyjson.com/products/search?q=${nombre}`)
    .then(res => res.json())
    .then(res => {
      var producto = res.products[0]
      console.log(producto)
    })
}
function reiniciar() {
  var objetos = document.getElementById("lista")
  objetos.attributeStyleMap.delete('display')
  var busqueda = document.getElementById("lista2")
  busqueda.style.display = "none"
}

function filtro(nombre) {
  var objetos = document.getElementById("lista");
  objetos.style.display = "none"
  var busqueda = document.getElementById("lista2")
  busqueda.style.display = "none"         
  fetch("https://dummyjson.com/products/category/" + nombre)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      res.products.forEach(element => {
        document.getElementById("lista3").innerHTML += `
            <li>
        <div class="content objeto">
            <h4>${element.title}</h4>
            <h4>${element.price}</h4>
            <h4>${element.brand}</h4>
            <button type="button" class="open-modal" data-open="${element.id}" data-bs-toggle="modal" data-bs-target="#${element.id}">mas informacion</button>
            <div class="modal"  id="${element.id}"tabindex="-1">
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
}    
