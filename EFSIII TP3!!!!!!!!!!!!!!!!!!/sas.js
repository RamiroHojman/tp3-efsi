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


function filtrar() {
    var objetos = document.getElementById("lista");
    objetos.style.display = "none"
    var nombre = document.getElementById("ingreso").value;
    fetch(`https://dummyjson.com/products/search?q=${nombre}`)
        .then(res => res.json())
        .then(res => {
            var producto = res.products[0]
            console.log(producto)
            document.getElementById("lista2").innerHTML = `
            <ul>
            <li>

        <div class="content objeto">
        <h4>${producto.title}</h4>
        <h4>${producto.price}</h4>
        <h4>${producto.brand}</h4>
        <button type="button" class="open-modal" data-open="${producto.id}" data-bs-toggle="modal" data-bs-target="#${producto.id}">mas informacion</button>
        <div class="modal"  id="${producto.id}"tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${producto.title}</h5>
            </div>
            <div class="modal-body">
              <p>Descripcion: ${producto.description}</p>
              <p>Stock: ${producto.stock}</p>
              <p>Precio: ${producto.price}</p>
              <p>Rating: ${producto.rating}</p>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>  
    </li>
    </ul>

        `
        })
}
function reiniciar()[
    
]