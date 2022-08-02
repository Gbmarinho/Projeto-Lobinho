async function putWolve(id, fetchBody) {
    const urlAPI = 'https://lobinhos.herokuapp.com/wolves/'

    let fetchConfig = {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(fetchBody)
    }

    let urlPUTApi = urlAPI + id
    await fetch(urlPUTApi, fetchConfig)
    .then(resposta => resposta.json()
        .then(resp => {console.log(resp)}))
    .catch(error => console.log(error))
}

async function getWolve(id) {
    const urlAPI = 'https://lobinhos.herokuapp.com/wolves/'

    const fetchConfig = {
        method: 'GET'
    }

    const response = await fetch(urlAPI + id, fetchConfig)
    const arrayJSON = await response.json()
    return arrayJSON
}

async function insertImgAndName(id){
    
    const arrayToAdopt = await getWolve(id)
    const imgAndName = document.querySelector("#imgtitle")

    imgAndName.innerHTML = 
    `<div id="imgbox"><img src="${arrayToAdopt.image_url}" id="img"></div>
     <div id="title">
        <h1 id="tit">Adote o(a) ${arrayToAdopt.name}</h1>
        <p id="id">ID:${arrayToAdopt.id}</p>
     </div>`
}

function funcsPage(){
    const id = sessionStorage.getItem('alfandegadoid')

    const button = document.querySelector("#sendb")
    const toAdoptName = document.querySelector("#nametext")
    const toAdoptAge = document.querySelector("#yeartext")
    const toAdoptEmail = document.querySelector("#emailtext")

    insertImgAndName(id)

    button.addEventListener("click", async () => {
        
        if((toAdoptName.value.trim() == "")||(toAdoptAge.value.trim() == "")||(toAdoptEmail.value.trim() == "")){
            
            alert("Nao deixe nada sem resposta!")

        }else if(isNaN(toAdoptAge.value.trim())){
            
            alert("A idade colocada esta errada")

        }else{
            
            var putBody = {
                
                "wolf":{
                "adopter_name": toAdoptName.value.trim(),
                "adopter_age": toAdoptAge.value.trim(),
                "adopter_email": toAdoptEmail.value.trim()
            }
        }
        
            await putWolve(id, putBody)

            alert("Parabens seu lobinho foi adotado com sucesso!!")
            window.location.replace("../home-page/index.html")
        }
    })
}

funcsPage()