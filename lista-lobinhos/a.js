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
                <button type="submit" class="btn-adotado" onclick="changePage(${j.id})" value = "${j.id}">Adotado</button>
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
                <button type="submit" class="btn-adotado" onclick="changePage(${j.id})" value = "${j.id}">Adotado</button>
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