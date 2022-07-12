const fnValidar01 = () => {
        let datos = document.getElementById("txtTexto").value;
        if(datos=="" || /^\s+$/.test(datos)){
            alert("Por favor escriba un TEXTO");
            return false;
        }

        let xValor = document.getElementById("numNumero").value;
        if(xValor=="" || /^\s+$/.test(xValor)){
            alert("Por favor escriba un NUMERO...");
            return false;
        }
    }
