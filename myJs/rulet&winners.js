let giros = 0;
let girosRuletaMinimo = 10;

function girar() {
  let listaParticipantes = document
    .getElementById("gamers")
    .getElementsByTagName("li");
  if (listaParticipantes.length < 2) {
    alert("se necesitan  2 participantes");
    return;
  }

  let rand = parseInt(Math.random() * 360);
  calcular(rand);
  giros++;
  document.querySelector(".contadorParticipantes").innerHTML =
    "N° de intentos " + giros;
}

function calcular(rand) {
  ruleta.style.transform = "rotate(" + (rand + ((girosRuletaMinimo * 360) * (giros + 1))) + "deg)";

  console.info('grados del premio ganador => ' + rand);
  setTimeout(() => {
    //para que dure 5 s
    let gradosIniciales = -20;
    let premio = '';
    if (rand >= gradosIniciales && rand < gradosIniciales + 45) {
      premio = "30% de descuento";
    } else if (rand >= gradosIniciales + 45 && rand < gradosIniciales + 90) {
      premio = "40% de descuento";
    } else if (rand >= gradosIniciales + 90 && rand < gradosIniciales + 135) {
      premio = "50% de descuento";
    } else if (rand > gradosIniciales + 135 && rand < gradosIniciales + 180) {
      premio = "60% de descuento";
    } else if (rand > gradosIniciales + 180 && rand < gradosIniciales + 225) {
      premio = "30% de descuento";
    } else if (rand > gradosIniciales + 225 && rand < gradosIniciales + 270) {
      premio = "40% de descuento";
    } else if (rand > gradosIniciales + 270 && rand < gradosIniciales + 315) {
      premio = "50% de descuento";
    } else {
      premio = "60% de descuento";
    }
    premiar(premio);
  }, 5000);
}

function premiar(premios) {
  let listaParticipantes = document
    .getElementById("gamers")
    // obteniendo todos los tags 'li' de la lista gamers
    .getElementsByTagName("li");

  console.info("tamaño de la lista => " + listaParticipantes.length);
  //obtener de forma aleatoria el indice del ganador(le quite el -1 al nom length)
  let indiceGanador = Math.round(
    Math.random() * (listaParticipantes.length - 1)
  );
  console.info("el indice ganador es => " + indiceGanador);

  let contador = 0;
  let winner = "";
  for (let li of listaParticipantes) {
    if (contador === indiceGanador) {
      winner = li.innerHTML;
      li.remove();
      console.info("se encontro al ganador => " + winner);
      break;
    }
    contador++;
  }

  document.querySelector(".mostrarGanador").innerHTML =
    "participante: " + winner + " ganaste un descuento de " + premios+ "!!!!!!!!!!!";

  addGanadores(winner + " obtuvo el " + premios);
}

function addGanadores(winnerAndPremio) {
  let lista = document.getElementById("idWinners");
  //resultado.innerHTML='';
  let winnerElement = document.createElement("li");
  winnerElement.innerHTML = winnerAndPremio;
  lista.appendChild(winnerElement);
}

document.querySelector("#ruleta").addEventListener("click", girar);