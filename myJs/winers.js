
const ruleta=document.querySelector('#ruleta');
ruleta.addEventListener('click',girar);
giros =0; 
var winner;

function girar(){
    if(giros<3){
    let rand=Math.random()*7200;
    calcular(rand);
    giros++;
    document.querySelector('.contadorParticipantes').innerHTML= 'N° de intentos '+giros;
    }
}

function premio(premios){
    let indexRandom=Math.round(Math.random()*(nom.length-1));//obtener de forma aleatoria el indice del ganador(le quite el -1 al nom length)
     //cambie el let por var para declararlo arriba
    winner=nom[indexRandom];//se obtiene al ganador en base al indice aleatorio
    document.querySelector('.mostrarGanador').innerHTML='participante: '+ winner +' ganaste un descuento de '+ premios;
   addGanadores(winner + " ganó " + premios);
}


function calcular(rand){
    valor = rand/360;
    valor=(valor - parseInt(valor.toString().split(".")[0]))*360;
    ruleta.style.transform="rotate("+rand+"deg)";
   //ruleta.style.display= inline;
   //https://www.w3schools.com/howto/howto_js_add_class.asp
   

    setTimeout(()=>{//para que dure 5 s
        switch(true){
            case valor >0 && valor <=45:
            premio("30% desc");
            break;
            case valor >45 && valor <=90:
            premio("60% desc");
            break;
            case valor >90 && valor <=135:
            premio("60% desc");
            break;
            case valor >135 && valor <=180:
            premio("50% desc");
            break;
            case valor >180 && valor <=225:
            premio("40% desc");
            break;
            case valor >225 && valor <=270:
            premio("30-% desc");
            break;//añadiendo valores
            case valor >270 && valor <=315:
            premio("60-% desc");
            break;
            case valor >315 && valor <=360:
            premio("50-% desc");
            break;
        }
    },5000);
}

function addGanadores(winnerAndPremio){
    let lista=document.getElementById('idWinners');
    //resultado.innerHTML='';
    
         let winnerElement = document.createElement('li');
         winnerElement.innerHTML = winnerAndPremio;
         lista.appendChild(winnerElement);
         //.removeChild(winner);
}


