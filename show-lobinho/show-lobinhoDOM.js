
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