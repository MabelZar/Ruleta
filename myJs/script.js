window.onload = function () {};
/*const nom = [];

function mostrarPersonas() {
  let resultado = document.getElementById("gamers");
  resultado.innerHTML = "";

  for (let persona of nom) {
    let datoNombre = document.createElement("li");
    datoNombre.innerHTML = persona;
    resultado.appendChild(datoNombre);
  }
}
*/

function aniadirParticipante() {//onclic del boton 
  let nombreParticipante = document.getElementById("participanteTxt").value.trim();
  if (!nombreParticipante) {
    alert('se necesita de un nombre');
    document.getElementById("participanteTxt").value = '';
    return;
  }
  let resultado = document.getElementById("gamers");
  let datoNombre = document.createElement("li");
  datoNombre.innerHTML = nombreParticipante;
  resultado.appendChild(datoNombre);
  document.getElementById("participanteTxt").value = '';
}

(function () {
  //funcion anonima autoinvocada, se ejecuta automaticamente/eliminarlo luego
  
  let resultado = document.getElementById("gamers");
  let participante01 = document.createElement("li");
  participante01.innerHTML = 'Eddi';
  let participante02 = document.createElement("li");
  participante02.innerHTML = 'Mabel';
  let participante03 = document.createElement("li");
  participante03.innerHTML = 'Shandé';
  resultado.appendChild(participante01);
  resultado.appendChild(participante02);
  resultado.appendChild(participante03);
})();

//---------
//function eliminar(winner) {
//for (var i =0; i < nom.length; i++) {
//if (nom[i].winner === winner) {
//  nom.splice(nom.indexOf,1);
//  break;
//}
//}
//  console.info(winner);
//}
