//¡¡¡¡23/08/2021¡¡¡

//¡¡¡¡¡programacion imperativa¡¡¡
// da ordenes al computador.

//si pones el ++ primero se suma 1 deuna osea se suma el valor de la variable + 1 y de una se pone el resultado.
let variable = 0; // con esto le dice al computador permitame una variable que se llama (variable) y que se cree con un valor =0.

console.log(variable); // ahora en el espacio de consola lleneme un espacio donde este elcontenido de variable.

console.log(++variable); // ahora en la consola muestrame un espacio en la cual le sume 1 y me muestre variable  
// resultado
//0
//1

//si pones el ++ de ultimo se suma 1 deultimo por lo que aparece la variable primero
let variable = 0;
console.log(variable);
console.log(variable++); // ahora en la consola muestrame un espacio en la cual me muestre variable y le sume 1
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

// lo unica razon por la que no se necesita poner let(variable); es porque ya se halla definido de una vez anterior


// alert (""); se usa para hacer un aviso o advertencia, el enunciado deseado se pone dentro de las comillas y los parentecis.
alert("hola");

//¡¡¡¡¡¡¡programacion funcional¡¡¡
// todo se hace atraves de funciones

function ______ () {           // lo que va hay (______) es lo que queremos hacer (suma,resta,division, multiplicacion); los() es el espacio para los argumentos

}                              // los argumentos son variables que se le pasan a la funcion


function sumar (argumento1, argumento2) {           // aqui pusimos sumar
    let suma = argumento1+argumento2;
    console.log(suma);
}

sumar (3,4);       // estos son los numeros que se suman
// resultado = 7

// para poner {} hay que undir alt gr + {

    function sumar (argumento1, argumento2) {           // aqui pusimos sumar
        let suma = argumento1+argumento2;
        console.log(suma);
    }

    let num1= prompt ("escribe un numero");        // se usa para hacer preguntas en el navegador en este ejemplo habla de un numero
    let num2= prompt ("escribe otro numero");    
    
    sumar (num1,num2);              // esto junta los numeros = num1 y num2 = num1num2/ con un ejemplo seria =10 y 7 = 107
                                      // esto es porque prompt es un tipo texto cadena por lo que junta normalmente textos/ un ejemplo seria = toma + te = tomate.
//////////////////////////////////////////////////////////////////////////////////////
//2.0

function sumar (argumento1, argumento2) {           // aqui pusimos sumar
        let suma = argumento1+argumento2;
        console.log(suma);
    }

    let num1= parseInt( prompt ("escribe un numero"));        // con parseint () me ayuda a que sea una suma
    let num2= parseInt( prompt ("escribe otro numero"));    
    
    sumar (num1,num2);  

    num1= parseInt( prompt ("escribe un numero"));        // con parseint () me ayuda a que sea una suma
    num2= parseInt( prompt ("escribe otro numero"));    
    
    sumar (num1,num2);  

    num1= parseInt( prompt ("escribe un numero"));        // con parseint () me ayuda a que sea una suma
    num2= parseInt( prompt ("escribe otro numero"));    
    
    sumar (num1,num2);  

    // esto me da 3 resultados / ejemplo:
    //11
    //20
    //19

    ///////////////////////////////////////////////////////////////
    //3.0 aqui aremos el mismo de arriva pero mas reducido
    function sumar () {           // aqui pusimos sumar.
        let num1= parseInt( prompt ("escribe un numero"));        // con parseint () me ayuda a que sea una suma
        let num2= parseInt( prompt ("escribe otro numero")); 
        let suma = num1+num2;
        console.log(suma);
    }
    sumar ();  
    sumar ();
    sumar ();



    //4.0
    // aqui sumamos 4 numeros en total juntos

    function sumar (argumento1, argumento2, argumento3, argumento4) {           // aqui pusimos sumar
        let suma = argumento1+argumento2+argumento3+argumento4;
        console.log(suma);
    }

    let num1= parseInt( prompt ("escribe un numero"));        // con parseint () me ayuda a que sea una suma
    let num2= parseInt( prompt ("escribe otro numero"));    
    let num3= parseInt (prompt ("escribe el tercer numero"));
    let num4= parseInt (prompt ("escribe el cuarto numero"));


    sumar (num1,num2,num3,num4); 

    // ejemplo: 2+2+2+2= 8


//////¡¡¡¡¡24/08/2021¡¡¡¡¡¡¡¡¡

// diseñar una funcion que capture el nombre del usuario y despues lo salude con dicho nimbre capturado.

function saludo () {
    let nombre = prompt ("por favor escribe tu nombre");
    let apellido = prompt ("por favor escribe tu apellido");
    let completo = nombre +" "+ apellido;
    alert ("bienvenido " + completo)
}
saludo ();                                      /* resultado : nombre digitado + apellido digitado = nombre completo, -> nombre= johan apellido gutierrez
                                                -> alert= bienvenido johan gutierrez */
// escribir el color y tono preferido de una persona y luego informe con dicho color y tono juntos
function color () {
    let color = prompt ("por favor escribe el color con el que mas te familiarisas");
    let tono = prompt ("por favor escribe un tono que te guste");
    let completo = color +" "+ tono;
    alert ("tu color preferido es el " + completo)
}
color (); 


/////////////
// escribir un nombre y escribir un color y luego saludarte con dicho nombre y decirte cual color y tono son sus preferidos 

function saludo () {
    let nombre = prompt ("por favor escribe tu nombre");
    let apellido = prompt ("por favor escribe tu apellido");
    let completos = nombre +" "+ apellido;
    let color = prompt ("por favor escribe el color con el que mas te familiarisas");
    let tono = prompt ("por favor escribe un tono que te guste");
    let completo = color +" "+ tono;
    alert ("bienvenido " + completos)
    alert ("al parecer tu color preferido es el " + completo)
}
saludo ();  
 
////////// poner el nimbre clase de membresia y producto con su ranga de precio y dependeiendo la memebrecia un saludo distinto y avisos de lo otro

function comprar () {
    let nombre = prompt ("por favor escribe tu nombre");
    let apellido = prompt ("por favor escribe tu apellido");
    let completos = nombre +" "+ apellido;
    let cliente = prompt (" por favor dijite el grado de su membrecia en minuscula");
    let tratamiento;

    if ( cliente == "vip") {
        tratamiento = "doctor";
    }
    if ( cliente == "diamante") {
        tratamiento = "doctor";
    }
    if ( cliente == "platino") {
        tratamiento = "señor";
    }
    else {
        tratamiento = "cliente";
    }
    
    let desear = prompt ("por favor escriba lo que desea comprar");
    let rango = prompt ("por favor escribe un rango de precio para su compra");
    let completo = desear +" desde $ "+ rango;
    alert ("bienvenido " + completos)
    alert ("que gusto tenerlo en nuestras tiendas querido " + tratamiento)
    alert ("al parecer lo que necesitas es un/una " + completo)
}
comprar (); 

// ¡¡¡programacion orientado a objetos¡¡¡¡
// automatiza mucho de lo que se hace