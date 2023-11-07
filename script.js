window.onload=function(){    
}

const nom =[];

function names(){
    let ingresoName;
    for (let i=0;i<=1;i++){
        ingresoName =prompt("Ingresa tu nombre:"," ");
        nom.push(ingresoName)
    }
}
names()

  
function mostrarPersonas(){
    let resultado=document.getElementById('gamers');
    resultado.innerHTML='';

     for(let persona of nom){
        let datoNombre=document.createElement('li');
        datoNombre.innerHTML=persona
        resultado.appendChild(datoNombre);
         }

}
mostrarPersonas()
