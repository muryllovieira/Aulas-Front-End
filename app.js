'use strict'

const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const buttonCalcular = document.getElementById('buttonCalcular')
const resultado = document.getElementById('resultado')
const formulario = document.getElementById('formulario')
const aprovado = 'Aprovado'
const reprovado = 'Reprovado'

function somar() {
    resultado.value = ((Number(numero1.value) + Number(numero2.value)) / 2)

    if (resultado.value < 7) {
        formulario.classList.add('sombra-vermelha')
        resultado.value = (Number(numero1.value) + Number(numero2.value)) / 2 + ' - ' + reprovado
    } else {
        formulario.classList.toggle('sombra-azul')
        resultado.value = (Number(numero1.value) + Number(numero2.value)) / 2 + ' - ' + aprovado
    }
    if (Number(numero1.value) < 0 || Number(numero1.value) > 10 || Number(numero2.value) < 0 || Number(numero2.value) > 10) {
        formulario.classList.add('sombra-amarela')
        resultado.value = 'Só é possível calcular se os números for entre 0 e 10'
    }
}

buttonCalcular.addEventListener('click', somar)