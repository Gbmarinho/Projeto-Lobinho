async function getWolve() {
    const urlAPI = 'https://lobinhos.herokuapp.com/wolves'

    const fetchConfig = {
        method: 'GET'
    }

    const response = await fetch(urlAPI, fetchConfig)
    const res = await response.json()
    return res
}


var checkbox = document.querySelector('#checkbox')

checkbox.addEventListener('change', async function() {
    if (!this.checked) {
        const arrayAdotados = await postWolve()
        console.log(arrayAdotados)

    } else {
      

    }
  });