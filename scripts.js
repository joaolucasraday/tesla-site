//variaveis: forma de identificar algo
//funções: um trecho de codigo que so executa quando é chamado
//documente = ir no html

let formulario = document.querySelector(".formulario")//ir até o html, procurar class chamada formulario(o . indica uma class)

function aparecerformulario(){
    formulario.style.left="50%"
}

function desaparecerformulario(){
    formulario.style.left="-50%"
}
