//si pones el ++ primero se suma 1 deuna
let variable = 0;
console.log(variable);
console.log(++variable);
// resultado
//0
//1

//si pones el ++ de ultimo se suma 1 deultimo por lo que aparece la variable primero
let variable = 0;
console.log(variable);
console.log(variable++);
// resultado:
//0
//0

//2.0 en esta al poner otra linea(console.log(variable);)me muestra el valor de la suma=1, mas no muestra el valor de la nueva variable que es igual a =0
let variable = 0;
console.log(variable);
console.log(variable++);
console.log(variable);
//resultado:
//0
//0
//1

// Siempre se tiene que identificar la variable o si no:
console.log(variable);
console.log(variable++);
//resultado:
// ¡¡¡¡¡error¡¡¡¡

alert