
let vacio="";
let aster="";
let numero= parseInt(prompt("Escribe el número que será el ancho del rombo"));
let espacios;


do {
    vacio="";
    espacios=numero;
    while (espacios>1){
        vacio+=" ";
        espacios--;
        // console.log("espacios es", espacios);
    }
    numero--;
    aster+="*";
    // console.log("numero es", numero);
    console.log(vacio, aster);
}while (numero>=1); 
