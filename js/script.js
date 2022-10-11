const button = document.getElementById('button')
const scoreElement = document.getElementById('score_element')

/**LOCALSTORAGE
 * setItem('clave', 'valor')
 * getItem('clave', 'valor')
 * removeItem('clave') => eliminar el valor almacenado
 */

if (typeof (localStorage) === 'undefined'){
    console.log ('Su navegador no puede soportar el LocaStorage')
}

if(localStorage.getItem('score')){
    scoreElement.innerText = localStorage.getItem('score')

}else{
    localStorage.setItem('score', '0')
}

button.onclick = () => {
    const currentScore = localStorage.getItem('score')
    localStorage.setItem('score', parseInt (currentScore) + 1)
    scoreElement.innerText = localStorage.getItem('score')
}