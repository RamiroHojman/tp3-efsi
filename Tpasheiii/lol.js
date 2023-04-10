// consulta fetch!!!
fetch("http://www.omdbapi.com/?apikey=[7b62fa5d]&")
    .then(res => res.json())
    .then(res => {
        console.log("se consiguio")
    })
    .catch(err => console.log("error", err))

