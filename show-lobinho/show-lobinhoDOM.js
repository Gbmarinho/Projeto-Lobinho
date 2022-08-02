
async function deleteWolve(id) {
    const urlAPI = 'https://lobinhos.herokuapp.com/wolves/'

    const fetchConfig = {
        method: 'DELETE'
    }

    const response = await fetch(urlAPI + id, fetchConfig)
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

async function inserirHTML(id) {

    const arrayAdotados = await getWolve(id)
    const main = document.querySelector("main")

    main.innerHTML = `<h1>${arrayAdotados['name']}</h1>
    <div class="container-lobo">
        <div class="img-btns"> 
            <img src="${arrayAdotados['image_url']}" id="img-lobo">
            <div class="btns-adotar-excluir">
                <button type="submit" id="btn-adotar" onclick="adotar()">ADOTAR</button>
                <button type="submit" id="btn-excluir" onclick="deletar(${id})">EXCLUIR</button>
            </div>
        </div>
        <div  class="descrition">
            <p id="text">${arrayAdotados['description']}</p>
        </div>
    </div>`
}
const id = sessionStorage.getItem('alfandegadoid')
console.log(id)
inserirHTML(id)

const btnExcluir = document.querySelector('#btn-excluir')

async function deletar(id){
    deleteWolve(id);
    alert("ABANDONO DE ANIMAIS É CRIME")
    window.location.href = "../lista-lobinhos/lista-lobinhos.html"
}

async function adotar(){
    window.location.href='../adotar-lobinho/adotar-lobinho.html'
}