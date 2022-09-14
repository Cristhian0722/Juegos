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
    case valor > 0 && valor <= 72:
     premio("Ge");             //1
     break;
     case valor > 72 && valor <= 144:
     premio("Nestor");      //2
     break;
     case valor > 144 && valor <= 216:
     premio("Papi");           //3
     break; 
     case valor > 216 && valor <= 288:
     premio("Dany");    //4
     break;
     case valor >288 && valor <= 360:
     premio("Oscar");           //5
     break; 
  }

 }, 5000);

}
}
