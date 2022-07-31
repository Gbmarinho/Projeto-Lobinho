const btn = document.querySelector("#sendb")
const nome = document.querySelector("#nametext")
const anos = document.querySelector("#yeartext")
const linkFoto = document.querySelector("#linktext")
const descricao = document.querySelector("#descrtext")

btn.addEventListener("click", () => {
    var h = isNaN(anos.value)
    var n = nome.value
    var j = isNaN(nome.value)
    if((nome.value.trim() == "")||(anos.value.trim() == "")||(linkFoto.value.trim() == "")||(descricao.value.trim() == "")){
        alert("Nao deixe nada sem resposta!")
    }else if(h == true){
        alert("A idade colocada esta errada")
    }else if((j != true) || ((n.length < 4)||(n.length > 60))){
        alert("Nome invalido")
    }else{
        var newLobo = new Object()
        newLobo.name = nome.value.trim()
        newLobo.age = anos.value.trim()
        newLobo.link_image = linkFoto.value.trim()
        newLobo.description = descricao.value.trim()
        console.log(newLobo)
    }
})