const pasarTexto = () => {
    var xValor = document.getElementById("Texto1").value;
    document.getElementById("Texto2").value = xValor;
}

const fnConcatenar = () => {
    var xTexto1 = document.getElementById("Texto1").value;
    var xTexto3 = document.getElementById("Texto3").value;
    document.getElementById("Texto4").value = xTexto1 + "/" + xTexto3 ;
}
