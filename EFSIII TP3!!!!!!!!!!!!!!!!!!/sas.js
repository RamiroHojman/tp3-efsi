
fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(res => {
        console.log(res)
        res.products.forEach(element => {
            document.getElementById("lista").innerHTML += `
            <li>
        <div class="content">
            <h4>${element.title}</h4>
            <h4>${element.price}</h4>
            <h4>${element.brand}</h4>
            <button type="button" class="open-modal" data-open="modal1">mas informacion</button>
        </div>
             </li>
            `

        });
    })
