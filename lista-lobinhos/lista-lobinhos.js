async function postWolve() {
    const urlAPI = 'https://lobinhos.herokuapp.com/wolves'

    const fetchConfig = {
        method: 'GET'
    }

    const response = await fetch(urlAPI, fetchConfig)
    const res = await response.json()
    return res
}


// const everything = async () =>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const {id} = await response.json();
//     return `https://cdn.test.com/${id}`
// }
// everything().then((res)=>console.log(res));




var checkbox = document.querySelector('#checkbox')

checkbox.addEventListener('change', async function() {
    if (!this.checked) {
        const arrayAdotados = await postWolve()
        console.log(arrayAdotados)

    } else {
      

    }
  });