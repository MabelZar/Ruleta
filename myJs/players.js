window.onload = function () {};

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

//(functionbmvbm () {
  //funcion anonima autoinvocada, se ejecuta automaticamente/eliminarlo luego
  
  //let resultado = document.getElementById("gamers");
  //let participante01 = document.createElement("li");
  //participante01.innerHTML = 'Eddi';
  //let participante02 = document.createElement("li");
  //participante02.innerHTML = 'Mabel';
  //let participante03 = document.createElement("li");
  //participante03.innerHTML = 'Shandé';
  //resultado.appendChild(participante01);
  //resultado.appendChild(participante02);
  //resultado.appendChild(participante03);
//})();
