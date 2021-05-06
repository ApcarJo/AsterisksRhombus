
console.clear();
let vacio="";
let aster="";
let numero= parseInt(prompt("Escribe el número que será el ancho del rombo"));
let numero2=numero;
let espacios;
let acumulador1;



do {
    vacio="";
    espacios=numero;
    while (espacios>=1){
        vacio+=" ";
        espacios--;
        // console.log("espacios es", espacios);
    }
    numero--;
    aster+="**"; // con un solo * se hace la parte izquierda del rombo, con 2 * se hace la pirámide
    // acumulador=vacio;
    // console.log("numero es", numero);
    console.log(vacio, aster);
}while (numero>=1); 

    vacio="";
do {
    aster="";
    espacios=numero2;
    while (espacios>=1){
        aster+="**";
        espacios--;
        // console.log("espacios es", espacios);
    }
    numero2--;
    vacio+=" ";
    // acumulador=vacio;
    // console.log("numero es", numero);
    console.log(vacio, aster);
}while (numero2>=1); 
