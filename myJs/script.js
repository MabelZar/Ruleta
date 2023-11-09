window.onload=function(){    
}

const nom =[];

/* function names(){
    let ingresoName;
    for (let i=0;i<=3;i++){
        ingresoName =prompt("Ingresa tu nombre:"," ");
        nom.push(ingresoName)
    }
} */
  
function mostrarPersonas(){
    let resultado=document.getElementById('gamers');
    resultado.innerHTML='';

     for(let persona of nom){
        let datoNombre=document.createElement('li');
        datoNombre.innerHTML=persona
        resultado.appendChild(datoNombre);
         }

}

function aniadirParticipante() {
    let nombreParticipante = document.getElementById('participanteTxt').value;
    nom.push(nombreParticipante);
    mostrarPersonas();
    document.getElementById('participanteTxt').value = '';
    if (nom.length == 3) {
        document.getElementById('aniadirParticipanteBtn').disabled = true;
    }
}

(function(){//funcion anonima autoinvocada, se ejecuta automaticamente/eliminarlo luego
    nom.push('Eddi');
    nom.push('Mabel');
    nom.push('Shande');
    mostrarPersonas();
    document.getElementById('aniadirParticipanteBtn').disabled = true;
})();
