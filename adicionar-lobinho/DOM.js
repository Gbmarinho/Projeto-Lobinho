const btn = document.querySelector("#sendb")
const nome = document.querySelector("#nametext")
const anos = document.querySelector("#yeartext")
const linkFoto = document.querySelector("#linktext")
const descricao = document.querySelector("#descrtext")

btn.addEventListener("click", () => {
    if((nome.value.trim() == "")||(anos.value.trim() == "")||(linkFoto.value.trim() == "")||(descricao.value.trim() == "")){
        alert("Nao deixe nada sem resposta!")
    }else if(anos.value.trim()){
        
    }
    
})