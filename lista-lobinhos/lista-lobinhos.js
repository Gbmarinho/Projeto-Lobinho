async function getWolveToAdopt() {
    const urlAPI = 'https://lobinhos.herokuapp.com/wolves'

    const fetchConfig = {
        method: 'GET'
    }

    const response = await fetch(urlAPI, fetchConfig)
    const arrayJSON = await response.json()
    
    return arrayJSON
}

async function getWolveAdopted() {
    const urlAPI = 'https://lobinhos.herokuapp.com/wolves/adopted'

    const fetchConfig = {
        method: 'GET'
    }

    const response = await fetch(urlAPI, fetchConfig)
    const arrayJSON = await response.json()
    
    return arrayJSON
}

function LoadingListWolvesToAdopt(array){
    const lobosContent = document.querySelector("#lobos-content")
    const PageButton = document.querySelector("#paginacao")

    let CurrentPage = 1
    let itemsPerPage = 4

    function paginationWolve(items, selector, itemsPerPage, CurrentPage){
        selector.innerHTML = ``
        CurrentPage--

        var cont = 1
        let start = itemsPerPage * CurrentPage
        let end = start + itemsPerPage
        let paginationItems = items.slice(start, end)
        for (let i = 0; i < paginationItems.length; i++){
            let  objetoItem = paginationItems[i]
            console.log(i, paginationItems[i])
            

            if(!(cont%2==0) ){
                const lobosleft = document.createElement("div")
                lobosleft.classList.add("bloco-lobo")
                lobosleft.innerHTML = `<div class="bloco-lobo left">
                    <div class="img-lobo">
                        <img class="img-left" src=${objetoItem.image_url}>
                    </div>
                    <div class="info-lobo">
                        <div class="namebutton-left">
                            <h1><b>${objetoItem.name}</b></h1>
                            <button type="submit" class="btn-show" onclick="changePage(${objetoItem.id})" value = "${objetoItem.id}">Adotado</button>
                        </div>
                        
                        <h4>Idade: ${objetoItem.age} anos</h4>
                        <p><b>${objetoItem.description}</b></p>
                        
                    </div>
                </div>`
                selector.appendChild(lobosleft)
            } else {
                const lobosright = document.createElement("div")
                lobosright.classList.add("bloco-lobo")
                lobosright.innerHTML = `<div class="bloco-lobo right">
                    <div class="info-lobo-right right-info">
                        <div class="namebutton-right">
                            <button type="submit" class="btn-show" onclick="changePage(${objetoItem.id})" value = "${objetoItem.id}">Adotado</button>
                            <h1><b>${objetoItem.name}</b></h1>
                        </div>
                        <h4>Idade: ${objetoItem.age} anos</h4>
                        <p><b>${objetoItem.description}</b></p>
                        
                    </div>
                    <div class="img-lobo">
                        <img class="img-right" src=${objetoItem.image_url}>  
                    </div>
                </div>`
                selector.appendChild(lobosright)
            }

            cont++
        }
    }

    function configPagination (items, selector, itemsPerPage) {
        selector.innerHTML = ``
        let cont = Math.ceil(items.length / itemsPerPage);
        for (let i = 1; i < cont + 1; i++) {
            let btn = paginationButton(i, items);
            selector.appendChild(btn);
        }
    }
    function paginationButton (page, items) {
        let btn = document.createElement('button');
        btn.innerText = page;
    
        if (CurrentPage == page) btn.classList.add('active');
    
        btn.addEventListener('click', function () {
            CurrentPage = page;
            paginationWolve(items, lobosContent, itemsPerPage, CurrentPage);
    
            let currentButton = document.querySelector('.numero-paginas button.active');
            currentButton.classList.remove('active');
    
            btn.classList.add('active');
        });
    
        return btn;
    }

    
    paginationWolve(array, lobosContent, itemsPerPage, CurrentPage);
    configPagination(array, PageButton, itemsPerPage);
}

function LoadingListWolvesAdopted(array){
    const lobosContent = document.querySelector("#lobos-content")
    const PageButton = document.querySelector("#paginacao")

    let CurrentPage = 1
    let itemsPerPage = 4

    function paginationWolve(items, selector, itemsPerPage, CurrentPage){
        selector.innerHTML = ``
        CurrentPage--

        var cont = 1
        let start = itemsPerPage * CurrentPage
        let end = start + itemsPerPage
        let paginationItems = items.slice(start, end)
        for (let i = 0; i < paginationItems.length; i++){
            let  objetoItem = paginationItems[i]
            console.log(i, paginationItems[i])
            

            if(!(cont%2==0) ){
                const lobosleft = document.createElement("div")
                lobosleft.classList.add("bloco-lobo")
                lobosleft.innerHTML = `<div class="bloco-lobo left">
                    <div class="img-lobo">
                        <img class="img-left" src=${objetoItem.image_url}>
                    </div>
                    <div class="info-lobo">
                        <div class="namebutton-left">
                            <h1><b>${objetoItem.name}</b></h1>
                            <button type="submit" class="btn-adotado" onclick="changePage(${objetoItem.id})" value = "${objetoItem.id}">Adotado</button>
                        </div>
                        
                        <h4>Idade: ${objetoItem.age} anos</h4>
                        <p><b>${objetoItem.description}</b></p>
                        <p><b>Adotado por: ${objetoItem.adopter_name}</b></p>
                    </div>
                </div>`
                selector.appendChild(lobosleft)
            } else {
                const lobosright = document.createElement("div")
                lobosright.classList.add("bloco-lobo")
                lobosright.innerHTML = `<div class="bloco-lobo right">
                    <div class="info-lobo-right right-info">
                        <div class="namebutton-right">
                            <button type="submit" class="btn-adotado" onclick="changePage(${objetoItem.id})" value = "${objetoItem.id}">Adotado</button>
                            <h1><b>${objetoItem.name}</b></h1>
                        </div>
                        <h4>Idade: ${objetoItem.age} anos</h4>
                        <p><b>${objetoItem.description}</b></p>
                        <p><b>Adotado por: ${objetoItem.adopter_name}</b></p>
                    </div>
                    <div class="img-lobo">
                        <img class="img-right" src=${objetoItem.image_url}>  
                    </div>
                </div>`
                selector.appendChild(lobosright)
            }

            cont++
        }
    }

    function configPagination (items, selector, itemsPerPage) {
        selector.innerHTML = ``
        let cont = Math.ceil(items.length / itemsPerPage);
        for (let i = 1; i < cont + 1; i++) {
            let btn = paginationButton(i, items);
            selector.appendChild(btn);
        }
    }
    function paginationButton (page, items) {
        let btn = document.createElement('button');
        btn.innerText = page;
    
        if (CurrentPage == page) btn.classList.add('active');
    
        btn.addEventListener('click', function () {
            CurrentPage = page;
            paginationWolve(items, lobosContent, itemsPerPage, CurrentPage);
    
            let currentButton = document.querySelector('.numero-paginas button.active');
            currentButton.classList.remove('active');
    
            btn.classList.add('active');
        });
    
        return btn;
    }

    
    paginationWolve(array, lobosContent, itemsPerPage, CurrentPage);
    configPagination(array, PageButton, itemsPerPage);
}

function searchToAdopt(array, value){
    const newArray = Object.values(array)
    const arrayFiltered = newArray.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))

    LoadingListWolvesToAdopt(arrayFiltered)

}

function searchAdopted(array, value){
    const newArray = Object.values(array)
    const arrayFiltered = newArray.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))

    LoadingListWolvesAdopted(arrayFiltered)
}

function changePage(id){
    sessionStorage.setItem('alfandegadoid', id);
    window.location.replace("../show-lobinho/show-lobinho.html")
}

async function funcsPage(){
    
    const arrayToAdopt = await getWolveToAdopt()
    const arrayAdotados = await getWolveAdopted()
    
    const checkbox = document.querySelector('#checkbox')
    const searchValue = document.querySelector("#searchtext") 
    const searchButton = document.querySelector("#searchimg")
    
    LoadingListWolvesToAdopt(arrayToAdopt)

    searchButton.addEventListener('click', () => {
        searchToAdopt(arrayToAdopt, searchValue.value.trim())


    })


    checkbox.addEventListener('change', async function() { 
        const searchValue = document.querySelector("#searchtext") 
        const searchButton = document.querySelector("#searchimg")
        
        if (!checkbox.checked) {
            LoadingListWolvesToAdopt(arrayToAdopt)

            searchButton.addEventListener('click', () => {
                searchToAdopt(arrayToAdopt, searchValue.value.trim())
            })

        } else {
            LoadingListWolvesAdopted(arrayAdotados)

            searchButton.addEventListener('click', () => {
                searchAdopted(arrayAdotados, searchValue.value.trim())
            })

        }
    });
    
}

funcsPage()