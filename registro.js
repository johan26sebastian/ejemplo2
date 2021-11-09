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


// aca abajo se hace para que cuando pones un espacio o mas en el formulario de usuario no lo registre como lleno sino como vacio osea que nada hay, hay

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