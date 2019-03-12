function validarForm(){
   //alert('Validando');
    var verificar = true; 
    var expRegNombre =/^[a-zA-ZÑñÁáÉÉÍíÓóÚúÜü\s]+$/;
    var expRegEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var expRegTel=/^[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/;
    var expRegCD=/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
    var expRegDNI = /^\d{8}[a-zA-Z]$/;
    var expRegNIE=/^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
    var expRegPS=/^[a-zA-Z0-9]{5,10}$/;
    var expRegIBAN=ES\d{2}\s*\d{4}\s*\d{4}\s*\d{4}\s*\d{4}\s*\d{2};
/*------------------------------------------------------
Si queremos asegurarnos que el teléfono empieza por nueve o
por seis como empiezan en españa entonces

var exRegTel=/^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/;
------------------------------------------------*/

function nif(dni) {
    var numero;
    var letr;
    var letra;
    var valid = false;
    if(expRegDNI.test (dni) == true){
       numero = dni.substr(0,dni.length-1);
       letr = dni.substr(dni.length-1,1);
       numero = numero % 23;
       letra='TRWAGMYFPDXBNJZSQVHLCKET';
       letra=letra.substring(numero,numero+1);
      if (letra!=letr.toUpperCase()) {
         alert('Dni erroneo, la letra del NIF no se corresponde');
       }else{
        verificar = false;
        valid = true;
       }
    }else{
       alert('Dni erroneo, formato no válido');
     }
     return valid;
  }


/*
Esta es la función válida para saber si el nif es
válido comprobando si la letra concuerda con los
números.
function nif(dni) {
  var numero
  var letr
  var letra
  var expresion_regular_dni
 
  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 
  if(expresion_regular_dni.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
       alert('Dni erroneo, la letra del NIF no se corresponde');
     }else{
       alert('Dni correcto');
     }
  }else{
     alert('Dni erroneo, formato no válido');
   }
}


*/
    var formulario = document.getElementById('contacto-frm');
    var nombre = document.getElementById('nombre');
    var edad = document.getElementById('edad');
    var email = document.getElementById('email');
    var telefono = document.getElementById('telefono');
    var cd = document.getElementById('cd');
    var dni = document.getElementById('dni');
    var nie = document.getElementById('nie');
    var ps = document.getElementById('ps');
    var masculino = document.getElementById('M');
    var femenino = document.getElementById('F');
    var asunto = document.getElementById('asunto');
    var comentarios = document.getElementById('comentarios');

    if(!nombre.value){
        alert('El campo nombre es obligatorio');
        nombre.focus();
        verificar = false;
    }
    else if(!expRegNombre.exec(nombre.value)){
        alert('Formato de nombre incorrecto');
        nombre.focus();
        verificar = false;
    }
    else if(!edad.value){
        alert('El campo edad es obligatorio');
        edad.focus();
        verificar = false;
    }
    else if(isNaN(edad.value)){
        alert('Escriba la edad en números');
        edad.focus();
        verificar = false;

    }
    else if(edad.value<18 || edad.value>110){
        alert('La edad no es válida');
        edad.focus();
        verificar = false;
    }
    else if(!email.value){
        alert('El campo email es obligatorio');
        email.focus();
        verificar = false;
    }
    else if(!expRegEmail.exec(email.value)){
        alert('Formato de email incorrecto');
        email.focus();
        verificar = false;
    }
    else if(!telefono.value){
        alert('El campo teléfono es obligatorio');
        telefono.focus();
        verificar = false;

    }
    else if(!expRegTel.exec(telefono.value)){
        alert('Formato del teléfono incorrecto');
        telefono.focus();
        verificar = false;
    }
    else if(!cd.value){
        alert('El campo Código Postal es obligatorio');
        cd.focus();
        verificar = false;

    }
    else if(!expRegCD.exec(cd.value)){
        alert('Formato del Código Postal incorrecto');
        cd.focus();
        verificar = false;
    }
    else if(!dni.value){
        alert('El campo NIF es obligatorio');
        dni.focus();
        verificar = false;

    }
    else if(!dni.value=='' && !nif(dni.value)){
        dni.focus();
        verificar = false;
    }
    else if(!nie.value){
        alert('El campo NIE es obligatorio');
        nie.focus();
        verificar = false;

    }
    else if(!expRegNIE.exec(nie.value)){
        alert('Formato del NIE incorrecto');
        nie.focus();
        verificar = false;
    }
    else if(!ps.value){
        alert('El campo Posaporte es obligatorio');
        ps.focus();
        verificar = false;

    }
    else if(!expRegPS.exec(ps.value)){
        alert('Formato del Posaporte incorrecto');
        ps.focus();
        verificar = false;
    }
    else if(!masculino.checked && !femenino.checked){
        alert('Debe seleccionar un sexo');
        femenino.focus();
        verificar = false;
    }
    else if(!asunto.value){
        alert('El campo asunto es obligatorio');
        asunto.focus();
        verificar = false;
    }
    else if(!comentarios.value){
        alert('El campo comentarios es obligatorio');
        comentarios.focus();
        verificar = false;
    }
    else if(comentarios.value.length > 255){
        alert('El campo comentarios no puede ser superior a 255 caracteres');
        comentarios.focus();
        verificar = false;
    }
    if(verificar){
        alert("Se ha enviado el formulario");
       document.contacto_frm.submit();
    }




}
function limpiarForm(){
    alert('Limpiando');
    document.getElementById('contacto-frm').reset();
}


window.onload = function(){   
    var botonEnviar, botonLimpiar;
    botonLimpiar = document.getElementById('limpiar');
    botonLimpiar.onclick = limpiarForm;
    botonEnviar = document.contacto_frm.enviar_btn;
    botonEnviar.onclick = validarForm;    
}