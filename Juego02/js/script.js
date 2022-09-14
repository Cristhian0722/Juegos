const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);
giros = 0;
function girar(){
  if (giros < 50) {
    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
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
         document.querySelector('.elije').innerHTML = 'SALIO : ';     
      }
    })
  }


function premio(premios){

  document.querySelector('.elije').innerHTML = 'SALIO : ' + premios;

}


 function calcular(rand) {

  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";

  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 45:
     premio("200 puntos");             //8
     break;
     case valor > 45 && valor <= 90:
     premio("Vocal o Consonate");      //1
     break;
     case valor > 90 && valor <= 135:
     premio("100 puntos");           //2
     break; 
     case valor > 135 && valor <= 180:
     premio("Comodin");    //3
     break;
     case valor > 180 && valor <= 225:
     premio("150 puntos");           //4
     break; 
     case valor > 225 && valor <= 270:
     premio("80 puntos");          //5
     break;
     case valor > 270 && valor <= 315:
     premio("30 puntos");        //6
     break;
     case valor > 315 && valor <= 360:
     premio("50 puntos");         //7
     break;
  }

 }, 5000);

}
}
