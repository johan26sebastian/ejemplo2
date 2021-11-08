window.onload = () => {
    const usuario = document.getElementById ("usuario");
    function valida () {if(usuario===""||usuario==null){
        console.log("variable vacia");
        }
        else
    };
    const registro = document.getElementById("registro-form");
    registro.onsubmit = (e) => {
        e.preventDefault();
        valida();
    }
}
