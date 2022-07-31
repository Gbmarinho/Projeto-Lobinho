const btn = document.querySelector("#sendb")
const nome = document.querySelector("#nametext")
const anos = document.querySelector("#yeartext")
const linkFoto = document.querySelector("#linktext")
const descricao = document.querySelector("#descrtext")

btn.addEventListener("click", () => {
    var h = isNaN(anos.value)
    if((nome.value.trim() == "")||(anos.value.trim() == "")||(linkFoto.value.trim() == "")||(descricao.value.trim() == "")){
        alert("Nao deixe nada sem resposta!")
    }else if(h == true){
        alert("A idade colocada esta errada")
    }else{
        var newLobo = new Object()
        newLobo.nome = nome.value.trim()
        newLobo.anos = anos.value.trim()
        newLobo.linkFoto = linkFoto.value.trim()
        newLobo.descricao = descricao.value.trim()
        console.log(newLobo)
    }
    
})