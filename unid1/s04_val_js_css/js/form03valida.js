const fnValidar03 = () => {

	let elementoPref = document.getElementsByName("chkPrefer");
	let valorElegidoPreferencia ="";
	let elegidoPreferencia = false;
	for (let i = 0;i< elementoPref.length; i++){
		if(elementoPref[i].checked) {
			valorElegidoPreferencia = elementoPref[i].value;
			elegidoPreferencia = true;
		}
	}
	
	let elementoEstado = document.getElementsByName("radEstado");
	let valorElegidoPreEstado ="";
	let elegidoEstado= false;
	for (let i = 0;i< elementoEstado.length; i++){
		if(elementoEstado[i].checked) {
			valorElegidoPreEstado = elementoEstado[i].value;
			elegidoEstado=true;
		}
	}
	
	if (!elegidoPreferencia){
		alert("elija UNA PREFERENVIA...");
		return true;
	}else{
		alert("Su preferencia elegida es"+valorElegidoPreferencia);
	}

	if(!elegidoEstado){
		alert("Elija UN ESTADO civil...")
		return false;
	}else{
		alert("Su estado civil es " + valorElegidoPreEstado)
	}
	
	///Caso contrario ///
	return true;
}