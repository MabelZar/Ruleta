
const ruleta=document.querySelector('#ruleta');
ruleta.addEventListener('click',girar);
giros =0; 
//const nom=[];

function girar(){
  
    if(giros<5){
    let rand=Math.random()*7200;
    calcular(rand);
    giros++;
    document.querySelector('.contadorParticipantes').innerHTML= 'Jugada n° '+giros;
    }
}
girar();

function premio(premios){
    let indexRandom=Math.round(Math.random()*(nom.length)-1);//obtener de forma aleatoria el indice del ganador(le quite el -1 al nom length)
    let winner=nom[indexRandom];//se obtiene al ganador en base al indice aleatorio
document.querySelector('.mostrarGanador').innerHTML='participante: '+ winner +' ganaste un descuento de '+ premios;
//crear aqui
}
function calcular(rand){
    valor = rand/360;
    valor=(valor - parseInt(valor.toString().split(".")[0]))*360;
    ruleta.style.transform="rotate("+rand+"deg)";
   //ruleta.style.display= inline;

    setTimeout(()=>{//para que dure 5 s
        switch(true){
            case valor >0 && valor <=45:
            premio("40% desc");
            break;
            case valor >45 && valor <=90:
            premio("8% desc");
            break;
            case valor >90 && valor <=135:
            premio("60% desc");
            break;
            case valor >135 && valor <=180:
            premio("no hay premio");
            break;
            case valor >180 && valor <=225:
            premio("15% desc");
            break;
            case valor >225 && valor <=270:
            premio("50% desc");
            break;//añadiendo valores
            case valor >270 && valor <=315:
            premio("nuevo 1");
            break;
            case valor >315 && valor <=360:
            premio("nuevo 2");
            break;
        }
    },5000);
}

function addGanadores(){//añadir el parametro para mostrar //que debo crear en crear aqui
    let resultado=document.getElementById('idWinners');
    resultado.innerHTML='';

     for(let ganador of nom){
        let datoNombre=document.createElement('li');
        datoNombre.innerHTML=ganador
        resultado.appendChild(datoNombre);
         }

}
//mostrarGanadores()
