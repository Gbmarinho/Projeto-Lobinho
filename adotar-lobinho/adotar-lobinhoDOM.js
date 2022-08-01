

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
    
})
