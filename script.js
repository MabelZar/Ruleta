//const section=document.querySelector("section")
function names(){
    let nom =[];
    let cont="";
    let ingresoName;
    for (let i=0;i<=1;i++){
        ingresoName =prompt("Ingresa tu nombre:"," ");
        nom.push(ingresoName)
        //nom[i]=ingresoName;
       cont+=nom[i]+"  ";
      
        //espacio del nombre de jugadores
        const myArticle = document.createElement("article");
        const play1=document.createElement('p');
        const play2=document.createElement('p');
        const play3=document.createElement('p');
         //creando lista de jugadores
       // const myList=document.createElement('ul');
        //asignando valor a mis espacios creados
        play1.textContent='Jugador Nº1:'+nom[0];
        play2.textContent='Jugador Nº2:'+nom[1];
        play3.textContent='Jugador Nº3:'+nom[i];

        myArticle.appendChild(play1);
        myArticle.appendChild(play2);
        myArticle.appendChild(play3);
        
        //section.appendChild(myArticle)

    }
    
   document.getElementById("area").innerHTML=cont;
}
names()
