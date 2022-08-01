const name = "Joao"
const descricao = "Lindo"
const imagem = "https://i.em.com.br/2Md-OjVI5nxR3eoNI9vsPVRyiEA=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2017/09/01/897198/20170901183847385809e.caveirao"

const main = document.querySelector("main")
main.innerHTML = `<h1>${name}</h1>
<div class="container-lobo">
    <div class="img-btns"> 
        <img src="${imagem}" id="img-lobo">
        <div class="btns-adotar-excluir">
            <button type="submit" id="btn-adotar" onclick="window.location.href='../adotar-lobinho/adotar-lobinho.html'">ADOTAR</button>
            <button type="submit" id="btn-excluir">EXCLUIR</button>
        </div>

    </div>
    <div  class="descrition">
        <p id="text">${descricao}</p>
    </div>


</div>`