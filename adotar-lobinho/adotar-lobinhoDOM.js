

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
        putBody.adopted = true
    }

    const response = await fetch(urlAPI + id, fetchConfig)
    const res = await response.json()
    return res
}

async function inserirImgTitle(id){
    
    // TEM QUE MUDAR O ID 
    const arrayAdotados = await getWolve(id)
    const imgtitle = document.querySelector("#imgtitle")

    imgtitle.innerHTML = 
    `<div id="imgbox"><img src="${arrayAdotados['image_url']}" id="img"></div>
     <div id="title">
        <h1 id="tit">Adote o(a) ${arrayAdotados['name']}</h1>
        <p id="id">ID:${arrayAdotados['id']}</p>
     </div>`
}

const btn = document.querySelector("#sendb")
const adptnome = document.querySelector("#nametext").value.trim()
const adptanos = document.querySelector("#yeartext").value.trim()
const adptemail = document.querySelector("#emailtext").value.trim()

inserirImgTitle(21)

btn.addEventListener("click", async() => {
    
    if((adptnome == "")||(adptanos == "")||(adptemail == "")){
        
        alert("Nao deixe nada sem resposta!")

    }else if(isNaN(adptanos)){
        
        alert("A idade colocada esta errada")

    }else{
        
        var putBody = new Object()
        putBody.adapter_name = adptnome
        putBody.adapter_age = adptanos
        putBody.adpter_email = adptemail
        // console.log(putBody)

        // postWolve(id, putBody)
    }
})
