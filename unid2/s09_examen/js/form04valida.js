function fnValidar04()
{
	 var xTurno = document.getElementById("lstTurno").ValueMax;
    if(xTurno=="")
    {
        alert("Seleccione Turno...");
        return false;
    }

    var xResult = document.getElementById("txtResult").value;
    if(xResult=="" || xResult ==0)
    {
        alert("Revice ... Resultado ¿0 o VACIO?)");
        return false;
    }

    /// Caso contraio///
    return true;

}

function verConteo(turno, mtzAlumnos)
{
	contadorTurno = 0 ;
    if(mtzAlumnos.length > 0){
        mtzAlumnos.forEach(element =>{
            if(element[3]==turno){
                contadorturno++;
            }
        });

        //Por que es equivalente
        /*
        for(var i = 0; 1< mtzAlumnos.length;i++){
            mtzTurno = mtzAlumnos[i][3];    //Turno
            if(mtzTurno == turno){
                contadorTurno++
            }
        }
        */
    }
    document.getElementById("txt Result").value = contadorTurno;
}