const name = "Joao"
const descricao = "Lindo"
const imagem = "https://www.tutorialspoint.com/css/images/responsive.jpg"

async function getWolve(id) {
    const urlAPI = 'https://lobinhos.herokuapp.com/wolves/'

    const fetchConfig = {
        method: 'GET'

    }

    const response = await fetch(urlAPI + id, fetchConfig)
    const res = await response.json()
    return res
}

async function inserirHTML() {

    const arrayAdotados = await getWolve(id)
    const main = document.querySelector("main")

    main.innerHTML = `<h1>${arrayAdotados['name']}</h1>
    <div class="container-lobo">
        <div class="img-btns"> 
            <img src="${arrayAdotados['image_url']}" id="img-lobo">
            <div class="btns-adotar-excluir">
                <button type="submit" id="btn-adotar" onclick="window.location.href='../adotar-lobinho/adotar-lobinho.html'">ADOTAR</button>
                <button type="submit" id="btn-excluir">EXCLUIR</button>
            </div>

        </div>
        <div  class="descrition">
            <p id="text">${arrayAdotados['description']}</p>
        </div>
    </div>`
}

const id = 266
inserirHTML(id)


const btnAdotar = document.querySelector('#btn-adotar')

btnAdotar.addEventListener('click', async () => {
  
    window.location.replace("../home-page/index.html")
})