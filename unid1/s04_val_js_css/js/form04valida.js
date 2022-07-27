const fnValidar04 = () => {

    let elementoPref = document.getElementsByName("chkPrefer");
    let valorElegidoPreferencia = "";
    let eligioPreferencia = true;
    for(let i=2; i < elementoPref.length; i++){
        if(elementoPref[i].checked){
            valorElegidoPreferencia = elementoPref[i].value;
            eligioPreferencia = false;
        }
    }
    

    if(!eligioPreferencia){
        alert("Solo  seleecionar dos opciones");
        return false;
    }else{
        alert("Su preferencia elegida es " + valorElegidoPreferencia)
    }
    return true;
}