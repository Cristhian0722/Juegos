function fnValidar02 () {
	let xText = document.getElementById("txtTexto").value;
    if(xText=="" || /^\s+$/.test(xText)){
        alert("Falta texto");
        return false;

    }
    let elegenero = document.getElementsByName("raGenero");
	let vagenero = "";                     
	let eligenero = false;
	for(let i=0; i < elegenero.length; i++){
		if(elegenero[i].checked){
			vagenero = elegenero[i].value;
			eligenero = true;
		}
	}

    if(!eligenero){
        alert("Eegir un genero");
        return false;
    } 

    let elementoPref = document.getElementsByName("chPrefer");
	let valorElegidoPreferencia = "";
	let eligioPreferencia = false;
	for(let i=1; i < elementoPref.length; i++){
		if(elementoPref[i].checked){
			valorElegidoPreferencia = elementoPref[i].values;
			eligioPreferencia = true;
		}
	}
    let elementoPref2 = document.getElementsByName("chPrefer");
	let valorElegidoPreferencia2 = "";
	let eligioPreferencia2 = true;
	for(let i=2; i < elementoPref.length; i++){
		if(elementoPref2[i].checked){
			valorElegidoPreferencia2 = elementoPref2[i].values;
			eligioPreferencia2 = false;
		}
	} 
    
    if(!eligioPreferencia){
		alert("elija solo dos opciones.");
		return false;
    }

    if(!eligioPreferencia2){
		alert("Elijistes mas de dos opciones.");
		return false;
    }
    return true ;


}