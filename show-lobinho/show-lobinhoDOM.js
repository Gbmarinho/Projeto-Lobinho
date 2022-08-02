async function getWolve(id) {
    const urlAPI = 'https://lobinhos.herokuapp.com/wolves/'

    const fetchConfig = {
        method: 'GET'
    }

    const response = await fetch(urlAPI + id, fetchConfig)
    const arrayJSON = await response.json()
    return arrayJSON
}

async function deleteWolve(id) {
    const urlAPI = 'https://lobinhos.herokuapp.com/wolves/'

    const fetchConfig = {
        method: 'DELETE'
    }

    await fetch(urlAPI + id, fetchConfig)
}

async function deleteTheWolve(id){
    deleteWolve(id);
    alert("ABANDONO DE ANIMAIS É CRIME")
    window.location.href = "../lista-lobinhos/lista-lobinhos.html"
}

async function ToAdopt(){
    window.location.href='../adotar-lobinho/adotar-lobinho.html'
}

async function funcsPage() {
    const id = sessionStorage.getItem('alfandegadoid')

    const objetoItem = await getWolve(id)
    const main = document.querySelector("main")

    main.innerHTML = `<h1>${objetoItem.name}</h1>
    <div class="container-lobo">
        <div class="img-btns"> 
            <img src="${objetoItem.image_url}" id="img-lobo">
            <div class="btns-adotar-excluir">
                <button type="submit" id="btn-adotar" onclick="ToAdopt()">ADOTAR</button>
                <button type="submit" id="btn-excluir" onclick="deleteTheWolve(${id})">EXCLUIR</button>
            </div>
        </div>
        <div  class="descrition">
            <p id="text">${objetoItem.description}</p>
        </div>
    </div>`
}

funcsPage()