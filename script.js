function clicou(numer) {
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + numer
}
function limpar() {
  document.getElementById('resultado').innerHTML = ""  
}
function tirar() {
   var tiraUm = document.getElementById('resultado').innerHTML
   document.getElementById('resultado').innerHTML = tiraUm.substring(0, tiraUm.length -1 )
}
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}