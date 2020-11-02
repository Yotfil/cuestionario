const respuestas = document.querySelectorAll('.lista__respuestas')
console.log(respuestas)


const respuestaCorrecta = (e) => {
    const respuesta = e.target
    console.log(respuesta)

    if(respuesta.classList.contains('correct')){
        let contador = document.getElementById('contador')
        contador.innerText = parseInt(contador.innerText) + 1
        limpiarClase()
        respuesta.classList.add('answerCorrect')
    }else{
        limpiarClase()
        respuesta.classList.add('answerError')
    }
}
const limpiarClase = ()=>{
    respuestas.forEach(respuesta=>{
        respuesta.classList.remove('answerCorrect', 'answerError')
    })
}

respuestas.forEach(respuesta => {
    respuesta.addEventListener('click', respuestaCorrecta)
})