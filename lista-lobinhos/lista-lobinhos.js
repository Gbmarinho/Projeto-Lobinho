async function getWolve() {
    const urlAPI = 'https://lobinhos.herokuapp.com/wolves'

    const fetchConfig = {
        method: 'GET'
    }

    const response = await fetch(urlAPI, fetchConfig)
    const res = await response.json()
    return res
}
async function getWolvea() {
    const urlAPI = 'https://lobinhos.herokuapp.com/wolves/adopted'

    const fetchConfig = {
        method: 'GET'
    }

    const response = await fetch(urlAPI, fetchConfig)
    const res = await response.json()
    return res
}
async function carregarpagina(){
    var checkbox = document.querySelector('#checkbox')
    const arrayLobinhos = await getWolve()
    const arrayAdotados = await getWolvea()
    mostrarpadotar(arrayLobinhos)
    checkbox.addEventListener('change', async function() { 
        if (!this.checked) {
            mostrarpadotar(arrayLobinhos)
        } else {
            mostraradotados()
        }
    });
    
}
carregarpagina()
function show(){
    window.location.replace("../show-lobinho/show-lobinho.html")
    console.log("to clickando")
}
function mostrarpadotar(array){
    const loboscontent = document.querySelector("#lobos-content")
    // loboscontent.innerHTML = `<p>AGUARDE</p>`
    var cont = 1
    for(j of array){
        if( !(cont%2==0) ){
            const lobosleft = document.createElement("div")
            lobosleft.classList.add("bloco-lobo")
            lobosleft.innerHTML = `<div class="img-lobo">
                <img class="img-left" src=${j.image_url}>
            </div>
            <div class="info-lobo">
                <div class="namebutton-left">
                    <h1><b>${j.name}</b></h1>
                    <button type="submit" class="btn-show" onclick="show()">Adotar</button value="${j.id}">
                </div>
                
                <h4>Idade: ${j.age} anos</h4>
                <p><b>${j.description}</b></p>
            </div>`
            loboscontent.appendChild(lobosleft)
            console.log(j.image_url)
            console.log(j.name)
            console.log(j.id)
            console.log(j.description)
        } else {
            const lobosright = document.createElement("div")
            lobosright.classList.add("bloco-lobo")
            lobosright.innerHTML = `<div class="info-lobo-right right-info">
                <div class="namebutton-right">
                    <button type="submit" class="btn-show" onclick="show()" value="${j.id}">Adotar</button>
                    <h1><b>${j.name}</b></h1>
                </div>
                <h4>Idade: ${j.age} anos</h4>
                <p><b>${j.description}</b></p>
            
            </div>
            <div class="img-lobo">
                <img class="img-right" src=${j.image_url}>  
            </div>`
            loboscontent.appendChild(lobosright)
            console.log(j.image_URL)
            console.log(j.name)
            console.log(j.id)
            console.log(j.description)
        }
        cont++
    }

}