window.onload=function(){    
}

const nom =[];

function mostrarPersonas(){
   let resultado=document.getElementById('gamers');
    resultado.innerHTML='';

     for(let persona of nom){
        let datoNombre=document.createElement('li');
        datoNombre.innerHTML=persona
       resultado.appendChild(datoNombre);

//provando
//let prueba1=document.getElementById('li')
        //if(datoNombre==winner){
         //resultado.removeChild(datoNombre)
           // }else{
            //console.info("que hay aqui")
            //}
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
