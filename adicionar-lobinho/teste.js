const urlAPI = 'lobinhos.herokuapp.com/wolves'

function postWolve() {
    fetch('https://lobinhos.herokuapp.com/wolves')
    .then((response) => response.json())
    .then((data) => console.log(data))
}

postWolve()