const btn = document.querySelector("#sendb")
const nome = document.querySelector("#nametext")
const anos = document.querySelector("#yeartext")
const linkFoto = document.querySelector("#linktext")
const descricao = document.querySelector("#descrtext")

btn.addEventListener("click", () => {
    var h = isNaN(anos.value)
    var n = nome.value
    var j = isNaN(nome.value)
    var l = isNaN(linkFoto.value)
    var d = isNaN(descricao.value)
    if((nome.value.trim() == "")||(anos.value.trim() == "")||(linkFoto.value.trim() == "")||(descricao.value.trim() == "")){
        alert("Nao deixe nada sem resposta!")
    }else if(h == true){
        alert("A idade apenas em numeros")
    }else if((j != true) || ((n.length < 4)||(n.length > 60))){
        alert("Nome invalido")
    }else if((anos.value < 0)||(anos.value > 100)){
        alert("Idade invalida")
    }else if(l != true){
        alert("Link invalido")
    }else if((d != true)||((descricao.value.length < 10)||(descricao.value.length > 255))){

    }else{
        var newLobo = new Object()
        newLobo.name = nome.value.trim()
        newLobo.age = anos.value.trim()
        newLobo.image_url = linkFoto.value.trim()
        newLobo.description = descricao.value.trim()
        newLobo.adopter_name = null
        newLobo.adopter_email = null
        newLobo.adopter_age = null
        newLobo.adopted = false
        console.log(newLobo)
        nome.value = ""
        anos.value = ""
        linkFoto.value = ""
        descricao.value = ""
    }
})