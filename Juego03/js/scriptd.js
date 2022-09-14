const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);
giros = 0;
function girar(){
  if (giros < 3) {
    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros; 
  }else{
    Swal.fire({
      icon: 'success',
      title: 'VUELVA PRONTO EL JUEGO TERMINO!!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 0;
         document.querySelector('.elije').innerHTML = 'EL GANADOR ES : ';
         document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;        
      }
    })
  }


function premio(premios){

  document.querySelector('.elije').innerHTML = 'EL GANADOR ES : ' + premios;

}


 function calcular(rand) {

  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";

  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 45:
     premio("Nestor");             //8
     break;
     case valor > 45 && valor <= 90:
     premio("Dany");      //1
     break;
     case valor > 90 && valor <= 135:
     premio("Papi");           //2
     break; 
     case valor > 135 && valor <= 180:
     premio("Pierde 50");    //3
     break;
     case valor > 180 && valor <= 225:
     premio("Pierde Turno");           //4
     break; 
     case valor > 225 && valor <= 270:
     premio("Beneficio");          //5
     break;
     case valor > 270 && valor <= 315:
     premio("Oscar");        //6
     break;
     case valor > 315 && valor <= 360:
     premio("Ge");         //7
     break;
  }

 }, 5000);

}
}
