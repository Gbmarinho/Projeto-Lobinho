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
    
    const input = document.querySelector("#searchtext") 
    const btn = document.querySelector("#searchimg")
    
    mostrarpadotar(arrayLobinhos)

    btn.addEventListener('click', () => {
        pesquisaAdotar(arrayLobinhos, input.value.trim())


    })


    checkbox.addEventListener('change', async function() { 
        const inputText = document.querySelector("#searchtext") 
        const btnPesquisar = document.querySelector("#searchimg")
        
        if (!checkbox.checked) {
            mostrarpadotar(arrayLobinhos)

            btnPesquisar.addEventListener('click', () => {
                pesquisaAdotar(arrayLobinhos, inputText.value.trim())



            })

        } else {
            const Text = document.querySelector("#searchtext") 
            const Pesquisar = document.querySelector("#searchimg")

            mostraradotados(arrayAdotados)

            Pesquisar.addEventListener('click', () => {
                pesquisaAdotados(arrayAdotados, Text.value.trim())


            })

        }
    });
    
}
function show(id){
    sessionStorage.setItem('alfandegadoid', id);
    window.location.replace("../show-lobinho/show-lobinho.html")
}

function mostrarpadotar(array){
    const loboscontent = document.querySelector("#lobos-content")
    const botaolist = document.querySelector("#paginacao")

    let pagina_atual = 1
    let itens_por_pagina = 4

    function paginacacaoLobinho(itens, seletor, itens_por_pagina, pagina_atual){
        seletor.innerHTML = ``
        pagina_atual--

        var cont = 1
        let inicio = itens_por_pagina * pagina_atual
        let fim = inicio + itens_por_pagina
        let paginacao_itens = itens.slice(inicio, fim)
        for (let i = 0; i < paginacao_itens.length; i++){
            let  j = paginacao_itens[i]
            console.log(i, paginacao_itens[i])
            

            if(!(cont%2==0) ){
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
                seletor.appendChild(lobosleft)
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
                seletor.appendChild(lobosright)
            }

            cont++
        }
    }

    function configPagination (items, seletor, itens_por_pagina) {
        seletor.innerHTML = ``
        let contador = Math.ceil(items.length / itens_por_pagina);
        for (let i = 1; i < contador + 1; i++) {
            let btn = paginacaoBotao(i, items);
            seletor.appendChild(btn);
        }
    }
    function paginacaoBotao (pagina, items) {
        let btn = document.createElement('button');
        btn.innerText = pagina;
    
        if (pagina_atual == pagina) btn.classList.add('active');
    
        btn.addEventListener('click', function () {
            pagina_atual = pagina;
            paginacacaoLobinho(items, loboscontent, itens_por_pagina, pagina_atual);
    
            let atual_btn = document.querySelector('.numero-paginas button.active');
            atual_btn.classList.remove('active');
    
            btn.classList.add('active');
        });
    
        return btn;
    }

    
    paginacacaoLobinho(array, loboscontent, itens_por_pagina, pagina_atual);
    configPagination(array, botaolist, itens_por_pagina);
}

function mostraradotados(array){
    const loboscontent = document.querySelector("#lobos-content")
    const botaolist = document.querySelector("#paginacao")

    let pagina_atual = 1
    let itens_por_pagina = 4

    function paginacacaoLobinho(itens, seletor, itens_por_pagina, pagina_atual){
        seletor.innerHTML = ``
        pagina_atual--

        var cont = 1
        let inicio = itens_por_pagina * pagina_atual
        let fim = inicio + itens_por_pagina
        let paginacao_itens = itens.slice(inicio, fim)
        for (let i = 0; i < paginacao_itens.length; i++){
            let  j = paginacao_itens[i]
            console.log(i, paginacao_itens[i])
            

            if(!(cont%2==0) ){
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
                seletor.appendChild(lobosleft)
            } else {
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
                seletor.appendChild(lobosright)
            }

            cont++
        }
    }

    function configPagination (items, seletor, itens_por_pagina) {
        seletor.innerHTML = ``
        let contador = Math.ceil(items.length / itens_por_pagina);
        for (let i = 1; i < contador + 1; i++) {
            let btn = paginacaoBotao(i, items);
            seletor.appendChild(btn);
        }
    }
    function paginacaoBotao (pagina, items) {
        let btn = document.createElement('button');
        btn.innerText = pagina;
    
        if (pagina_atual == pagina) btn.classList.add('active');
    
        btn.addEventListener('click', function () {
            pagina_atual = pagina;
            paginacacaoLobinho(items, loboscontent, itens_por_pagina, pagina_atual);
    
            let atual_btn = document.querySelector('.numero-paginas button.active');
            atual_btn.classList.remove('active');
    
            btn.classList.add('active');
        });
    
        return btn;
    }

    
    paginacacaoLobinho(array, loboscontent, itens_por_pagina, pagina_atual);
    configPagination(array, botaolist, itens_por_pagina);
}

function pesquisaAdotar(array, value){
    const arrayA = Object.values(array)
    const newArray = arrayA.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))

    mostrarpadotar(newArray)

}

function pesquisaAdotados(array, value){
    const arrayA = Object.values(array)
    const newArray = arrayA.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))

    mostraradotados(newArray)
}

carregarpagina()
var alfandegadoid 