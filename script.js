let conta = 0
let pessoas = 0

const contaInput = document.querySelector("#conta")
contaIntput.addEventlistener("input", receberValorConta)

function receberValorConta(evento) {
    conta = Number(evento.target.value)
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento){
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas #erro")
    
    if(evento.target.value === "D") {
       paragrafoErro.style.display = "block"
       divErro.setAttribute("id", "erro-div")
    } else{
       paragrafoErro.style.display = "none"
       divErro.setAttribute("id", "")
       pessoas = Number(evento.target.value)
    }
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", )
})

function receberPorcentagen(evento){
    
}