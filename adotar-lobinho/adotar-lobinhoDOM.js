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
    const res = await response.json()
    return res
}

async function inserirImgTitle(id){
    
    const arrayAdotados = await getWolve(id)
    const imgtitle = document.querySelector("#imgtitle")

    imgtitle.innerHTML = 
    `<div id="imgbox"><img src="${arrayAdotados['image_url']}" id="img"></div>
     <div id="title">
        <h1 id="tit">Adote o(a) ${arrayAdotados['name']}</h1>
        <p id="id">ID:${arrayAdotados['id']}</p>
     </div>`
}

//  SO MUDAR ESSE ID 
const id = 68

const btn = document.querySelector("#sendb")
const adptnome = document.querySelector("#nametext")
const adptanos = document.querySelector("#yeartext")
const adptemail = document.querySelector("#emailtext")

inserirImgTitle(id)

btn.addEventListener("click", async () => {
    
    if((adptnome.value.trim() == "")||(adptanos.value.trim() == "")||(adptemail.value.trim() == "")){
        
        alert("Nao deixe nada sem resposta!")

    }else if(isNaN(adptanos.value.trim())){
        
        alert("A idade colocada esta errada")

    }else{
        
        var putBody = {
            
            "wolf":{
            "adopter_name": adptnome.value.trim(),
            "adopter_age": adptanos.value.trim(),
            "adopter_email": adptemail.value.trim()
        }
    }

        console.log(putBody)
        putWolve(id, putBody)

        alert("Parabens seu lobinho foi adotado com sucesso!!")
        window.location.replace("../home-page/index.html")
    }
})
