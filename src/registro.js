/*
const usuario = document.getElementById ("usuario");
function valida () {if(usuario.value===""||usuario.value==null){
    console.log("variable vacia");
    }
    else {
        console.log ("variable llena")
    }
};

window.onload = () => {
    const registro = document.getElementById("registro-form");
    registro.onsubmit = (e) => {
        e.preventDefault();
        valida();
    }
}
*/
// tanto lo de arriba como abajo hacen lo mismo solo que abajo el vlue se pone en una sola parte para ahorrar espacio

/*
function valida () {
    let usuario = document.getElementById ("usuario").value;
    if(usuario.length==0) {
    console.log("variable vacia");
    }
    else {
        console.log ("variable llena")
    }
};

window.onload = () => {
    const registro = document.getElementById("registro-form");
    registro.onsubmit = (e) => {
        e.preventDefault();
        valida();
    }
}
*/

//expresiones regulares, una expresion regular inicia y termina con una barra diagonal "/"
// la barra diagonal "\s" simboliza un espacio algr + |
// el mas "+" simboliza uno o mas espacio


// aca abajo se hace para que cuando pones un espacio o
// mas en el formulario de usuario no lo registre como lleno sino como vacio osea que nada hay, haì

/*
function valida () {
    let usuario = document.getElementById ("usuario").value;
    if(/^\s+$/.test(usuario)||usuario.length==0) {
    console.log("variable vacia");
    }
    else {
        console.log ("variable llena")
    }
};

window.onload = () => {
    const registro = document.getElementById("registro-form");
    registro.onsubmit = (e) => {
        e.preventDefault();
        valida();
    }
}

*/

/*
function valida () {
    let usuario = document.getElementById ("usuario").value;
    console.log(/[0-9]{1}/.test(usuario));
    if(/[0-9]/.test(usuario)) {
    console.log("variable vacia");
    }
    else {
        console.log ("variable llena")
    }
};

window.onload = () => {
    const registro = document.getElementById("registro-form");
    registro.onsubmit = (e) => {
        e.preventDefault();
        valida();
    }
}

*/
// para "[]" se unde alt gr + `
/* /[0-9]{9}/ esto me muestra que para validarse tiene que tener numeros del 0-9 y almenos 9 numeros en total */


// / [0-9]/  ,  [a-zA-Z0-9]{4,15},   "\d" matches a digit (equivalent to [0-9]

// \w matches any word character (equivalent to [a-zA-Z0-9_])

// \s matches any whitespace character (equivalent to [\r\n\t\f\v \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff])

// \w{3,15}


function valida () {
  //  let usuario = document.getElementById ("usuario").value;
    let password = document.getElementById ("password").value;
    console.log(/\w{3,15}/.test(password));
    if(/[0-9]/.test(password)) {
    console.log("variable vacia");
    }
    else {
        console.log ("variable llena")
    }
};

window.onload = () => {
    const registro = document.getElementById("registro-form");
    registro.onsubmit = (e) => {
        e.preventDefault();
        valida();
    }
}