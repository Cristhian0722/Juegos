function aleatorio(){
var aleatorio = Math.floor(Math.random() * 25) + 1;

var intentos = 0;

var acierto = false;

var dificultad = 0;

var select_dificultad = prompt("Selecciona la dificultad: para todos = 1 - Intermedio = 2 - Difícil = 3 -UltraDifícil = 4");

if (select_dificultad == 1){
	dificultad = 1;
}

if (select_dificultad == 2){
	dificultad = 2;
}

if (select_dificultad == 3){
	dificultad = 3;
}
if (select_dificultad == 4){
		dificultad = 4;
}

if(dificultad == 1){
	alert("SUERTE Y QUE GANE EL MEJOR");
	
	while(acierto == false){
		var entrada = prompt("Introduce un número del 1 al 25 .");
		intentos++;
		if (entrada == aleatorio){
			alert("Enhorabuena, has acertado el número ,GANASTES.");
			acierto = true;
			document.write("El número era: " + aleatorio);
		}else
			{
				alert("Lo siento, no has acertado el número.");
			}
	}
}

if(dificultad == 2){
	alert("Has seleccionado el modo intermedio, solo tienes 8 intentos.");
	
	while(acierto == false && intentos < 10){
		var entrada = prompt("Introduce un número del 1 al 25.");
		intentos++;
		if (entrada == aleatorio){
			alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
			acierto = true;
			document.write("El número era: " + aleatorio);
		}else
			{
				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
			}
	if (intentos == 8){
		alert("Has fallado. Game over.");
		document.write("El número era: " + aleatorio);
	}
	}
}

if(dificultad == 3){
	alert("Has seleccionado el modo difícil, solo tienes 5 intentos.");
	
	while(acierto == false && intentos < 5){
		var entrada = prompt("Introduce un número del 1 al 25.");
		intentos++;
		if (entrada == aleatorio){
			alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
			acierto = true;
			document.write("El número era: " + aleatorio);
		}else
			{
				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
			}
	if (intentos == 3){
		alert("Has fallado. Game over.");
		document.write("El número era: " + aleatorio);
	}
	}
}
if(dificultad == 4){
		alert("Has seleccionado el modo difícil, solo tienes 3 intentos.");
		
		while(acierto == false && intentos < 2){
			var entrada = prompt("Introduce un número del 1 al 25.");
			intentos++;
			if (entrada == aleatorio){
				alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
				acierto = true;
				document.write("El número era: " + aleatorio);
			}else
				{
					alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
				}
		if (intentos == 3){
			alert("Has fallado. Game over.");
			document.write("El número era: " + aleatorio);

		}
	}
}
}