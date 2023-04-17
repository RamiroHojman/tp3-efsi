
function obtenerrespuesta(numero){
if(numero === 1){
    fetch("https://dummyjson.com/products/category/smartphones")
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })
    .catch(err => console.error("error", err))
console.log("Fin consulta - fetch")
} else if(numero === 2){
    fetch("https://dummyjson.com/products/category/laptops")
    .then(res => res.json())
    .then(res => {
        console.log()
    })
    .catch(err => console.error("error", err))
}
}
