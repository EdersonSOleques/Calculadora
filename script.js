function clicou(numer) {
    document.querySelector("[name='resultado']").value += numer
}
function limpar() {
    document.querySelector("[name='resultado']").value = ""  
}
function tirar() {
   var tiraUm = document.querySelector("[name='resultado']").value
   document.querySelector("[name='resultado']").value = tiraUm.substring(0, tiraUm.length -1 )
}
function calcular() {
    var resultado = document.querySelector("[name='resultado']").value
    if(resultado) {
        document.querySelector("[name='resultado']").value = eval(resultado)
    }
}
function percent() {
    var resultado = document.querySelector("[name='resultado']").value += '/ 100'
    if(resultado) {
        document.querySelector("[name='resultado']").value = eval(resultado)
    }
}