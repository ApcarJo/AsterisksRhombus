
console.clear();
let vacio="";
let aster="";
let numero= parseInt(prompt("Escribe el número que será el ancho del rombo"));
let numero2=numero;
let espacios;


// Pirámide izquierda

// do {
//     vacio="";
//     espacios=numero-1;
//     while (espacios>=1){
//         vacio+=" ";
//         espacios--;
//         // console.log("espacios es", espacios);
//     }
//     numero--;
//     aster+="*"; // con un solo * se hace la parte izquierda del rombo, con 2 * se hace la pirámide
//     // console.log("numero es", numero);
//     console.log(vacio + aster);
// }while (numero>=1); 

// Pirámide arriba

// do {
//     vacio="";
//     espacios=numero-1;
//     while (espacios>=1){
//         vacio+=" ";
//         espacios--;
//         // console.log("espacios es", espacios);
//     }
//     numero--;
//     aster+="**"; // con un solo * se hace la parte izquierda del rombo, con 2 * se hace la pirámide
//     // console.log("numero es", numero);
//     console.log(vacio + aster + vacio);
// }while (numero>=1); 

// Pirámide completa

do {
    vacio="";
    espacios=numero-1;
    while (espacios>=1){
        vacio+="@";
        espacios--;
        // console.log("espacios es", espacios);
    }
    numero--;
    aster+="**"; // con un solo * se hace la parte izquierda del rombo, con 2 * se hace la pirámide
    // console.log("numero es", numero);
    console.log(vacio + aster + vacio);
}while (numero>=1); 


       vacio="";
do {
    aster="";
    espacios=numero2-1;
    while (espacios>=1){
        aster+="**";
        espacios--;
        // console.log("espacios es", espacios);
    }
    numero2--;
    vacio+="@";
    // console.log("numero es", numero);
    console.log(vacio + aster + vacio);
}while (numero2>=1); 
