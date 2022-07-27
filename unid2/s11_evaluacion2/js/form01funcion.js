function verTablas(turnoElegido,mtzAlumnos,)
{
	contadorTurno = 0;
    orden =0;
    res="";
    
    t01 = "<table>";
    t01 += "<tr>";
    t01 += "<th class='titulo' colspan='4' >datos personales</th>";
    t01 += "</tr>";
    t01 += "<tr>";
    t01 += "<th>No...</th><th>Genero</th><th>Apellidos y nombres</th><th>Foto</th>";  
    t01 += "</tr>";

    if(mtzAlumnos.length>0){    
        for (var i=0; i < mtzAlumnos.length ; i++) {
            turnoMtz =mtzAlumnos[i][3];     //turno
             
            if (turnoMtz == turnoElegido){
                orden++;
                foto=mtzAlumnos[i][0];
                apeNom =mtzAlumnos[i][2] +"," +mtzAlumnos[i][1];
                genero = fnGenero(mtzAlumnos[i][4]);            
                t01 += "<tr>"; 
                t01 += "<td>" + orden+"</td><td>"+genero+"</td><td>"+apeNom+"</td><td><img src='img/f"+foto+".jpg'></td>";
                t01 += "</tr>";
                
                contadorTurno++;                    
            }
            
            
        }
    }
    t01 +="<table>";
    document.getElementById("marco").innerHTML=t01;
}

function verTablas1(generoElegido, mtzAlumnos,turnoElegido)
{
	contadorTurno = 0;
    orden =0;
    res="";
    
    t01 = "<table>";
    t01 += "<tr>";
    t01 += "<th class='titulo' colspan='4' >datos personales</th>";
    t01 += "</tr>";
    t01 += "<tr>";
    t01 += "<th>No...</th><th>Genero</th><th>Apellidos y nombres</th><th>Foto</th>";  
    t01 += "</tr>";

    if(mtzAlumnos.length>0){    
        for (var i=0; i < mtzAlumnos.length ; i++) {
            turnoMtz =mtzAlumnos[i][3];     //turno 
            generoMtz = mtzAlumnos[i][4];   //Genero 
            if(turnoMtz == turnoElegido && generoMtz==generoElegido){
                orden++;
                foto=mtzAlumnos[i][0];
                apeNom =mtzAlumnos[i][2] +"," +mtzAlumnos[i][1];
                genero = fnGenero(mtzAlumnos[i][4]);            
                t01 += "<tr>"; 
                t01 += "<td>" + orden+"</td><td>"+genero+"</td><td>"+apeNom+"</td><td><img src='img/f"+foto+".jpg'></td>";
                t01 += "</tr>";
                
                contadorTurno++;                    
            }
            
        }
    }
    t01 +="<table>";
    document.getElementById("marco").innerHTML=t01;
}

function fnGenero(xGenero){
    if(xGenero=="M"){
        return "Masculino";    
    }else if(xGenero=="F"){
        return "Femenino"
    }
	
}

function borrarMarco(){
   document.getElementById("marco").innerHTML="Resultado Borrado"
	
}