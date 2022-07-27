const fnValidar10 = () => {
    let elementoPref = document.getElementsByName("chkPrefer");
    let valorElegidoPreferencia = "";
    let eligioPreferencia = false;
    for(let i=1; i < elementoPref.length; i++){
        if(elementoPref[i].checked){
            valorElegidoPreferencia = elementoPref[i].value;
            eligioPreferencia = true
        }
    }
    if(!eligioPreferencia){
        alert("Elija Minimo DOS PREFERENCIAS...")
        return false;
    
    }else{
        alert("Su preferencia elegia es "+ valorElegidoPreferencia)
    }
    return true;
}