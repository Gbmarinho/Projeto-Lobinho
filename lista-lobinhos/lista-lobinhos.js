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
            mostraradotados(arrayAdotados)
        }
    });
    
}
carregarpagina()
var alfandegadoid 

function show(id){
    sessionStorage.setItem('alfandegadoid', id);
    window.location.replace("../show-lobinho/show-lobinho.html")
}
function mostrarpadotar(array){
    const loboscontent = document.querySelector("#lobos-content")
    loboscontent.innerHTML = ``
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
                    <button type="submit" class="btn-show" onclick="show(${j.id})">Adotar</button value="${j.id}">
                </div>
                
                <h4>Idade: ${j.age} anos</h4>
                <p><b>${j.description}</b></p>
            </div>`
            loboscontent.appendChild(lobosleft)
        } else {
            const lobosright = document.createElement("div")
            lobosright.classList.add("bloco-lobo")
            lobosright.innerHTML = `<div class="info-lobo-right right-info">
                <div class="namebutton-right">
                    <button type="submit" class="btn-show" onclick="show(${j.id})" value="${j.id}">Adotar</button>
                    <h1><b>${j.name}</b></h1>
                </div>
                <h4>Idade: ${j.age} anos</h4>
                <p><b>${j.description}</b></p>
            
            </div>
            <div class="img-lobo">
                <img class="img-right" src=${j.image_url}>  
            </div>`
            loboscontent.appendChild(lobosright)
        }
        cont++
    }

}
function mostraradotados(array){
    const loboscontent = document.querySelector("#lobos-content")
    loboscontent.innerHTML = ``
    var cont = 1
    for(j of array){
        if( !(cont%2==0) ){
            const lobosleft = document.createElement("div")
            lobosleft.classList.add("bloco-lobo")
            lobosleft.innerHTML = `<div class="bloco-lobo left">
                <div class="img-lobo">
                    <img class="img-left" src=${j.image_url}>
                </div>
                <div class="info-lobo">
                    <div class="namebutton-left">
                        <h1><b>${j.name}</b></h1>
                        <button type="submit" class="btn-adotado" onclick="show(${j.id})" value = "${j.id}">Adotado</button>
                    </div>
                    
                    <h4>Idade: ${j.age} anos</h4>
                    <p><b>${j.description}</b></p>
                    <p><b>Adotado por: ${j.adopter_name}</b></p>
                </div>
            </div>`
            loboscontent.appendChild(lobosleft)
        }  else {
            const lobosright = document.createElement("div")
            lobosright.classList.add("bloco-lobo")
            lobosright.innerHTML = `<div class="bloco-lobo right">
                <div class="info-lobo-right right-info">
                    <div class="namebutton-right">
                        <button type="submit" class="btn-adotado" onclick="show(${j.id})" value = "${j.id}">Adotado</button>
                        <h1><b>${j.name}</b></h1>
                    </div>
                    <h4>Idade: ${j.age} anos</h4>
                    <p><b>${j.description}</b></p>
                    <p><b>Adotado por: ${j.adopter_name}</b></p>
                </div>
                <div class="img-lobo">
                    <img class="img-right" src=${j.image_url}>  
                </div>
            </div>`
            loboscontent.appendChild(lobosright)
        }
        cont++
    }
}