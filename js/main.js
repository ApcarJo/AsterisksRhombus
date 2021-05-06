
let vacio="";
let aster="";
let numero= parseInt(prompt("Escribe el número que será el ancho del rombo"));
let espacios=numero;


// for (let i=0; i<5; i++){
//     vacio+="1";
// }
// console.log(vacio, aster);

// for (let j=0; j<5; j++){
//     vacio-="1";
//     console.log(vacio, aster);
// }

// for (let i=0; i<5; i++){

//     for (j=0; j<5; j++){
//         vacio-=" ";
//     }
//     aster+="*";
//     console.log(vacio, aster);
// }

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
}while (numero>1); 
