const urlAPI = 'https://lobinhos.herokuapp.com/wolves/'

async function postWolve(id, fetchBody) {
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


const btn = document.querySelector("#sendb")
const adptnome = document.querySelector("#nametext")
const adptanos = document.querySelector("#yeartext")
const adptemail = document.querySelector("#emailtext")
btn.addEventListener("click", () => {
    var h = isNaN(adptanos.value)
    if((adptnome.value.trim() == "")||(adptanos.value.trim() == "")||(adptemail.value.trim() == "")){
        alert("Nao deixe nada sem resposta!")
    }else if(h == true){
        alert("A idade colocada esta errada")
    }else{
        var putBody = new Object()
        putBody.adapter_name = adptnome.value.trim()
        putBody.adapter_age = adptanos.value.trim()
        putBody.adpter_email = adptemail.value.trim()
        console.log(putBody)
        

        postWolve(id, putBody)
    }
    
})
