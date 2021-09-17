// function sin_titulo() {
  //  var action, actual, apellido, completo, dos, estado, expresion, nacimiento, nombre, numbers, numero1, numero2, resultado, uno, variable;
  //  document.write("Hola como estas?",'<BR/>');
  //  estado = prompt();
  //  document.write("Oh! me alegra saber eso ",'<BR/>');
  //  document.write(" digita tu nombre porfa",'<BR/>');
   // nombre = prompt();
  //  document.write(" digita tu apellido",'<BR/>');
  //  apellido = prompt();
  //  variable = expresion;
  //  completo = "Bienvenido "+nombre+" "+apellido;
  //  document.write(completo,'<BR/>');
  //  document.write("acontinuacion sacaremos tu edad:",'<BR/>');
  //  document.write("por favor digite el año actual:",'<BR/>');
  //  actual = Number(prompt());
  //  document.write("por favor digite año en que nacio",'<BR/>');
  //  nacimiento = Number(prompt());
  //  document.write("tu edad en años es de",'<BR/>');
  //  variable = expresion;
  //  resultado = actual-nacimiento;
  //  document.write(resultado,'<BR/>');
  //  document.write("acontinuacion sabremos si tu salalrio actual es mayor o igual que al del año pasado:",'<BR/>');
  //  document.write("por favor digite el salario que tienes:",'<BR/>');
  //  numero1 = prompt();
  //  document.write("por favor digite el salario del año pasado",'<BR/>');
  //  numero2 = prompt();
  //  document.write("tu salario actual es mayor o gual al del año pasado?",'<BR/>');
   // variable = expresion;
   // action = numero1>=numero2;
  //  document.write(action,'<BR/>');
  //  document.write("ahora vamos a saber, si tu divides el salario en partes iguales, para darlo a otras personas cunto le corresponde a cada una de las personas y a ti:",'<BR/>');
  //  document.write("por favor digite el salario actual:",'<BR/>');
  //  uno = Number(prompt());
  //  document.write("por favor digite la cantidad de personas a las cuales les das dinero",'<BR/>');
  //  dos = Number(prompt());
  //  document.write("la cantidad de dinero que le corresponde a cada persona en parte igual es de:",'<BR/>');
  //  variable = expresion;
  //  numbers = uno/dos;
   // document.write(numbers,'<BR/>');
// }
// sin_titulo();

// DOM = Document Object Model

// <script src="main.js"></script> es un enlace entre html y js; es una etiqueta que une a la pagian principal de html con la de js seleccionada y se pone dentro del body
// cuando se pone por fuera se automatiza como un Dom pero no se muestra
// al poner window.onload me pone solo lo que me dice el enunciado de la funcion, no pone titulos ni nada


// window.onload = () => {
 //   var action, actual, apellido, completo, dos, estado, expresion, nacimiento, nombre, numbers, numero1, numero2, resultado, uno, variable;
 //   document.write("Hola como estas?",'<BR/>');
 //   estado = prompt();
 //   document.write("Oh! me alegra saber eso ",'<BR/>');
 //   document.write(" digita tu nombre porfa",'<BR/>');
 //   nombre = prompt();
 //   document.write(" digita tu apellido",'<BR/>');
 //   apellido = prompt();
 //   variable = expresion;
 //   completo = "Bienvenido "+nombre+" "+apellido;
 //   document.write(completo,'<BR/>');
 //   document.write("acontinuacion sacaremos tu edad:",'<BR/>');
 //   document.write("por favor digite el año actual:",'<BR/>');
 //   actual = Number(prompt());
 //   document.write("por favor digite año en que nacio",'<BR/>');
 //   nacimiento = Number(prompt());
 //   document.write("tu edad en años es de",'<BR/>');
 //   variable = expresion;
 //   resultado = actual-nacimiento;
 //   document.write(resultado,'<BR/>');
 //   document.write("acontinuacion sabremos si tu salalrio actual es mayor o igual que al del año pasado:",'<BR/>');
 //   document.write("por favor digite el salario que tienes:",'<BR/>');
 //   numero1 = prompt();
 //   document.write("por favor digite el salario del año pasado",'<BR/>');
 //   numero2 = prompt();
 //   document.write("tu salario actual es mayor o gual al del año pasado?",'<BR/>');
 //   variable = expresion;
 //   action = numero1>=numero2;
 //   document.write(action,'<BR/>');
 //   document.write("ahora vamos a saber, si tu divides el salario en partes iguales, para darlo a otras personas cunto le corresponde a cada una de las personas y a ti:",'<BR/>');
 //   document.write("por favor digite el salario actual:",'<BR/>');
 //   uno = Number(prompt());
 //   dos = Number(prompt());
 //   dos = Number(prompt());
 //   document.write("por favor digite la cantidad de personas a las cuales les das dinero",'<BR/>');
 //   dos = Number(prompt());
 //   document.write("la cantidad de dinero que le corresponde a cada persona en parte igual es de:",'<BR/>');
 //   variable = expresion;
 //   numbers = uno/dos;
 //   document.write(numbers,'<BR/>');
// }

// esto da igual que el de arriva lo unico que cabia e que lo unico que va a aparecer en la pagina es el contenido de la funcion mas no de la pagina como tal
// encambio el otro muestra todo: titulos imagenes + funcion , etc 

//111111111111111111111111111111111111111111111111111111111111111111111111111111111111


//window.onload = () => {
//    const titulo = document.getElementById("titulo");
//    console.log(titulo.innerHTML);
//}

// esto ayudara que el que tenga id ="titulo" aparesaca despues de inspeccionar en gogle, osea en la pagina html hay diferentes etiquetas y en la etiqueta h1 puse el id titulo por lo que  hace que el contenido de esta etiqueta se vea en consolo

// aca es para que el parrafo salga "       "

//window.onload = () => {
//    const parrafo = document.getElementById("parrafo")
//    console.log(parrafo.innerHTML);
//} 

// con la  de abajo me sale las que tengan tanto el id de parrafo como el de titulo
//window.onload = () => {
  //const parrafo = document.getElementById("parrafo")
  //console.log(parrafo.innerHTML);
  //const titulo = document.getElementById("titulo")
  //console.log(titulo.innerHTML);
//}

/* vamos a insertar nuevo texto osea si donde esta el id de titulo dice img el contenido de este se cambiara
por lo que se le escriba aca donde esta ese id y asi mismo con lo del parrafo */
//window.onload = () => {
//  const parrafo = document.getElementById("parrafo")
//  parrafo.innerText = "mi nuevo parrafo";
//  const titulo = document.getElementById("titulo")
// titulo.innerText = "Nuevo texto";
//}

/* en esta le estoy diciendo primero cabieme el texto del parrafo o donde tenga el id parrafo por "mi nuevo parrafo",
 pero luego le estoy diciendo que cabie "mi nuevo parrafo" por "elemento 1 y elemnto 2" en formal de lista  */
//window.onload = () => {
  //const parrafo = document.getElementById("parrafo")
  //parrafo.innerText = "mi nuevo parrafo";
  //parrafo.innerHTML = "<ul><li>elemento 1</li><li>elemento 2</li></ul>"
//}

// lista de pendientes - to do list
//<input type="submit" value="añadir"></input> esto es para poner el boton y lo que se desea poner en el boton se pone en 
// value.

//<input type="text" id="pendiente" placeholder="Escribe tu pendiente"></input> este me siver para poner el recuadro para escribir
//la respuestas y placeholder es para poner un pedazo de texto que deseas que aparesca pero al tratar de llenar el texto se borra automaticamente

// un ejemplo de un formulario completo es asi:
/*<form id="formulario-pendiente">
<input type="text" id="pendiente" placeholder="Escribe tu pendiente">
<input type="submit" value="añadir">
</form>*/

// ojo todo va en html
// la funsion acontinuacion si es en js y es una funcion de formulario
//window.onload = () => {
  //const formulario = document.getElementById("formulario-pendiente");
  //formulario.onsubmit = (e) => {
  //const pendiente = document.getElementById("pendiente");
    //contenidopendiente = pendiente.value;
    //pendiente.value = ""; 
    //console.log(contenidopendiente);
  //}
//}

// para evitar la autorecarga de la pagina y que nos quede evidencia en console se pone lo sgte
// el argumento (e) se le pone e.preventDefault();, todo eso debajo de donde dice formulario.onsubmit

//window.onload = () => {
  //const formulario = document.getElementById("formulario-pendiente");
  //formulario.onsubmit = (e) => {
    //e.preventDefault();
    //const pendiente = document.getElementById("pendiente");
    //contenidopendiente = pendiente.value;
    //pendiente.value = ""; 
    //console.log(contenidopendiente);
  //}
//}
// en la anterior ya esta hecha la modificacion

//  const formulario = document.getElementById("formulario-pendiente");
//la parte de formulario pdte es el id que se tomo en el form y si tiene otras cosas se pone las otras cosas

// const pendiente = document.getElementById("pendiente"); la palabra pendiente se saca de la parte del id del html
// de <input type="text" id="pendiente"

////////////// aca se va a poner const pendientes, pendientes.push y console.log se le modifica lo de adentro con pdtes
// esto lo que hara es que cada respuesta que se de se muestre[ aca adentreo cada una separada con una , y cada uno entre comillas " " ] como si fuera 
// un espacio muestral y cada respuesta se va agregando al espacio muestral ej: ["hola", "como", "estas".....]
//const pendientes = [];
//window.onload = () => {
  //const formulario = document.getElementById("formulario-pendiente");
  //formulario.onsubmit = (e) => {
    //e.preventDefault();
    //const pendiente = document.getElementById("pendiente");
    //contenidopendiente = pendiente.value;
    //pendientes.push(contenidopendiente);
    //pendiente.value = ""; 
    //console.log(pendientes);
  //}
//}
// [] para esto es alt gr + tilde
/////////////// ahora vamos a tratar de que se aparezca ese acumulado en la pagina y en console a la vez
// ej: si escribo 1 me aparece 1 y si escribo 2 me aparece ["1","1","2"]

//const pendientes = [];
//window.onload = () => {
  //const formulario = document.getElementById("formulario-pendiente");
  //formulario.onsubmit = (e) => {
    //e.preventDefault();
    //const pendiente = document.getElementById("pendiente");
    //contenidopendiente = pendiente.value;
    //pendientes.push(contenidopendiente);
    //pendiente.value = ""; 
    //console.log(pendientes);
    //const listado = document.getElementById("lista-pendiente");
    //for (let i = 0; i < pendientes.length; i++) {
        //listado.innerHTML += "<li>" + pendientes[i] + "</li>";
      
    //}
  //}
//}
// el arrive es pendientes
// const listado = document.getElementById("lista-pendiente"), se pone lo que hayas escrito en el id del <ul> en la pag html


/*  1)   ahora trataremos que solo aparezca el ultimo acumulado en la pagina y no todo* ej: si escribo 1 me aparece 1 y 
si escribo 2 me aparezaca ["1","2"] */

/*const pendientes = [];
window.onload = () => {
  const formulario = document.getElementById("formulario-pendiente");
  formulario.onsubmit = (e) => {
    e.preventDefault();
    const pendiente = document.getElementById("pendiente");
    contenidopendiente = pendiente.value;
    pendientes.push(contenidopendiente);
    pendiente.value = ""; 
    console.log(pendientes);
    const listado = document.getElementById("lista-pendiente");
    listado.innerHTML = "";
    for (let i = 0; i < pendientes.length; i++) {
        listado.innerHTML += "<li>" + pendientes[i] + "</li>";
      
    }
  }
}*/

// ahora vamos a simplificar el codigo de arriva, pero lo que pasa es que solo se puede ver en console y muestra todo el acumulado
// y si se cambia el ultimo pendientes por plantilla se mostrara el li + p + li contextualmente
/*const pendientes = [];
window.onload = () => {
  const formulario = document.getElementById("formulario-pendiente");
  formulario.onsubmit = (e) => {
    e.preventDefault();
    const pendiente = document.getElementById("pendiente");
    contenidopendiente = pendiente.value;
    pendientes.push(contenidopendiente);
    pendiente.value = ""; 
    const listado = document.getElementById("lista-pendiente");
    const plantilla = pendientes.map(p => "<li>" + p + "</li>");
    console.log(pendientes);
  }
}*/

// esto me hara lo del 1) pero resumido  la funcion como tal
// y ademas solo se mostrara una clase de lista en la pagina mas no en console

/*const pendientes = [];
window.onload = () => {
  const formulario = document.getElementById("formulario-pendiente");
  formulario.onsubmit = (e) => {
    e.preventDefault();
    const pendiente = document.getElementById("pendiente");
    contenidopendiente = pendiente.value;
    pendientes.push(contenidopendiente);
    pendiente.value = ""; 
    const listado = document.getElementById("lista-pendiente");
    const plantilla = pendientes.map(p => "<li>" + p + "</li>");
    listado.innerHTML = plantilla.join("");
  }
}
*/

/// 15/09/2021
/*
const pendientes = [];
window.onload = () => {
  const formulario = document.getElementById("formulario-pendiente");
  formulario.onsubmit = (e) => {
    e.preventDefault();
    const pendiente = document.getElementById("pendiente");
    contenidopendiente = pendiente.value;
    pendientes.push(contenidopendiente);
    pendiente.value = ""; 
    const listado = document.getElementById("lista-pendiente");
    const plantilla = pendientes.map(p => "<li>" + p + "</li>");
    listado.innerHTML = plantilla.join("");
    document.querySelectorAll("#lista-pendiente");

  }
}
*/
// document.querySelectorAll("#lista-pendiente");la oracion lista pendientes es el id del ul
// y ademas siempre lleva un # adelante del ide al llenarse, 
// y si se pone li al final de lo que va entre comillas me muestra la cantidad de cosas que tiene la lista dada y su li correspondiente pero se repite el espacio muestral
// ej: document.querySelectorAll("#lista-pendiente li");

/*
const pendientes = [];
window.onload = () => {
  const formulario = document.getElementById("formulario-pendiente");
  formulario.onsubmit = (e) => {
    e.preventDefault();
    const pendiente = document.getElementById("pendiente");
    contenidopendiente = pendiente.value;
    pendientes.push(contenidopendiente);
    pendiente.value = ""; 
    const listado = document.getElementById("lista-pendiente");
    const plantilla = pendientes.map(p => "<li>" + p + "</li>");
    listado.innerHTML = plantilla.join("");
    const elementos = document.querySelectorAll("#lista-pendiente li");
    elementos.forEach((elemento, i) => {
      console.log(elemento,i);
      
      });
    })


    const elementos = document.querySelectorAll("#lista-pendiente li");
    Array.from(elementos); aqui se muestra el il de cada uno mas no muy detallado.

    elementos.forEach(x => console.log(x)), esta etiqueta me muestra cual il detalladamente, le corresponde a cual parte de la lista 
    
     esto se mete en console para que se pueda ejecutar

  }
}

*/

// acontinuacion lo que nos va a hacer es que al dar click sobre la palabra o al lado me generara el <il> 
//correspondiente de la palabra solamente y no generalizara todo el espacio muestral sino un solo elemento ,
// todo eso en console



/*const pendientes = [];
window.onload = () => {
  const formulario = document.getElementById("formulario-pendiente");
  formulario.onsubmit = (e) => {
    e.preventDefault();
    const pendiente = document.getElementById("pendiente");
    contenidopendiente = pendiente.value;
    pendientes.push(contenidopendiente);
    pendiente.value = ""; 
    const listado = document.getElementById("lista-pendiente");
    const plantilla = pendientes.map(p => "<li>" + p + "</li>");
    listado.innerHTML = plantilla.join("");
    const elementos = document.querySelectorAll("#lista-pendiente li");
    elementos.forEach((elemento, i) => {
      elemento.addEventListener('click',()=>{
        console.log(elemento,i);
      });
    })
 
    // esto se mete en console para que se pueda ejecutar

  }
}

*/

// acontinuacion haremos una funcion que al pararse en un elemento de la lista y darle click desaparezca de la vista temporalmente 
//pero al agregar un nuevo elemento vuelve a aparecer


/*const pendientes = [];
window.onload = () => {
  const formulario = document.getElementById("formulario-pendiente");
  formulario.onsubmit = (e) => {
    e.preventDefault();
    const pendiente = document.getElementById("pendiente");
    contenidopendiente = pendiente.value;
    pendientes.push(contenidopendiente);
    pendiente.value = ""; 
    const listado = document.getElementById("lista-pendiente");
    const plantilla = pendientes.map(p => "<li>" + p + "</li>");
    listado.innerHTML = plantilla.join("");
    const elementos = document.querySelectorAll("#lista-pendiente li");
    elementos.forEach((elemento, i) => {
      elemento.addEventListener('click',()=>{
        elemento.parentNode.removeChild(elemento);
      });
    })
 
    // esto se mete en console para que se pueda ejecutar

  }
}*/
// esto hace e¡que al dar click aparezca en console y lo describa y desaparezca en la pagina web
// pero al agregar uno nuevo se carga el ultimo eliminado
/*
const pendientes = [];
window.onload = () => {
  const formulario = document.getElementById("formulario-pendiente");
  formulario.onsubmit = (e) => {
    e.preventDefault();
    const pendiente = document.getElementById("pendiente");
    contenidopendiente = pendiente.value;
    pendientes.push(contenidopendiente);
    pendiente.value = ""; 
    const listado = document.getElementById("lista-pendiente");
    const plantilla = pendientes.map(p => "<li>" + p + "</li>");
    listado.innerHTML = plantilla.join("");
    const elementos = document.querySelectorAll("#lista-pendiente li");
    elementos.forEach((elemento, i) => {
      elemento.addEventListener('click',()=>{
        elemento.parentNode.removeChild(elemento);
        console.log(elemento);
        pendientes.splice(i,1);
        console.log(pendientes, i);
      });
    })
 
    // esto se mete en console para que se pueda ejecutar

  }
}
*/

// acontinuacion haremos uno muy parecido al de arriva lo unico que cambia
// es que si le agregamos uno nuevo no va a volver el ultimo eliminado y ademas no va a aparecer el espacio muestral de todos los que eliminemos 
// ej: si elimino hola y luego como estas, el espacio muestral nos mostrara hola y en otro aparte el como esta

/*
const pendientes = [];
const render = () => {
  const listado = document.getElementById("lista-pendiente");
  const plantilla = pendientes.map(p => "<li>" + p + "</li>");
  listado.innerHTML = plantilla.join("");
  const elementos = document.querySelectorAll("#lista-pendiente li");
  elementos.forEach((elemento, i) => {
    elemento.addEventListener('click',()=>{
      elemento.parentNode.removeChild(elemento);
        console.log(elemento);
        pendientes.splice(i,1);
        render();
    });
  })
}
window.onload = () => {
  const formulario = document.getElementById("formulario-pendiente");
  formulario.onsubmit = (e) => {
    e.preventDefault();
    const pendiente = document.getElementById("pendiente");
    contenidopendiente = pendiente.value;
    pendientes.push(contenidopendiente);
    pendiente.value = ""; 
    render();
 // esto se mete en console para que se pueda ejecutar

  }
}

*/
// || para esto es alt gr + 1
// esto hace que al recargar la pagina los elementos de la lista no se vea,
// pero cuando agregas otro elemento aparecen los elementos de antes de recargar la pagina + el elemento nuevo 
// mas cuando se toca aparece en console y se borra de la pagina web como la funcion de arriva

/*
const pendientes = JSON.parse(localStorage.getItem('pendientes')) || [];
const render = () => {
  const listado = document.getElementById("lista-pendiente");
  const plantilla = pendientes.map(p => "<li>" + p + "</li>");
  listado.innerHTML = plantilla.join("");
  const elementos = document.querySelectorAll("#lista-pendiente li");
  elementos.forEach((elemento, i) => {
    elemento.addEventListener('click',()=>{
      elemento.parentNode.removeChild(elemento);
        console.log(elemento);
        pendientes.splice(i,1);
        render();
    });
  })
}
window.onload = () => {
  const formulario = document.getElementById("formulario-pendiente");
  formulario.onsubmit = (e) => {
    e.preventDefault();
    const pendiente = document.getElementById("pendiente");
    contenidopendiente = pendiente.value;
    pendiente.value = ""; 
    pendientes.push(contenidopendiente);
    const pendientescadena = JSON.stringify(pendientes);
    localStorage.setItem('pendientes', pendientescadena)
    render();
 // esto se mete en console para que se pueda ejecutar

  }
}


*/

// window.onload = () => {    al ponerle render en esa parte a la funcion de arriva hace que al recargar la pagina no desaparezcan los elementos de la lista.
  //render();
/*
const pendientes = JSON.parse(localStorage.getItem('pendientes')) || [];
const render = () => {
  const listado = document.getElementById("lista-pendiente");
  const plantilla = pendientes.map(p => "<li>" + p + "</li>");
  listado.innerHTML = plantilla.join("");
  const elementos = document.querySelectorAll("#lista-pendiente li");
  elementos.forEach((elemento, i) => {
    elemento.addEventListener('click',()=>{
      elemento.parentNode.removeChild(elemento);
        console.log(elemento);
        pendientes.splice(i,1);
        render();
    });
  })
}
window.onload = () => {
  render();
  const formulario = document.getElementById("formulario-pendiente");
  formulario.onsubmit = (e) => {
    e.preventDefault();
    const pendiente = document.getElementById("pendiente");
    contenidopendiente = pendiente.value;
    pendiente.value = ""; 
    pendientes.push(contenidopendiente);
    const pendientescadena = JSON.stringify(pendientes);
    localStorage.setItem('pendientes', pendientescadena)
    render();
 // esto se mete en console para que se pueda ejecutar

  }
}
*/

//// con esa pasa lo mismo que lo de arriva solo que lo eliminada al recargar la pagina no aparece, los eliminados antes de recargar aparecen en console

/*
const pendientes = JSON.parse(localStorage.getItem('pendientes')) || [];
const render = () => {
  const listado = document.getElementById("lista-pendiente");
  const plantilla = pendientes.map(p => "<li>" + p + "</li>");
  listado.innerHTML = plantilla.join("");
  const elementos = document.querySelectorAll("#lista-pendiente li");
  elementos.forEach((elemento, i) => {
    elemento.addEventListener('click',()=>{
      elemento.parentNode.removeChild(elemento);
        console.log(elemento);
        pendientes.splice(i,1);
        const pendientescadena = JSON.stringify(pendientes);
        localStorage.setItem('pendientes', pendientescadena)
        render();
    });
  })
}
window.onload = () => {
  render();
  const formulario = document.getElementById("formulario-pendiente");
  formulario.onsubmit = (e) => {
    e.preventDefault();
    const pendiente = document.getElementById("pendiente");
    contenidopendiente = pendiente.value;
    pendiente.value = ""; 
    pendientes.push(contenidopendiente);
    const pendientescadena = JSON.stringify(pendientes);
    localStorage.setItem('pendientes', pendientescadena)
    render();


 // esto se mete en console para que se pueda ejecutar

  }
}

*/

//// es practicamente lo de arriva, solo que al eliminar un elemento de la lista no aprece este elemento en console

const pendientes = JSON.parse(localStorage.getItem('pendientes')) || [];
const render = () => {
  const listado = document.getElementById("lista-pendiente");
  const plantilla = pendientes.map(p => "<li>" + p + "</li>");
  listado.innerHTML = plantilla.join("");
  const elementos = document.querySelectorAll("#lista-pendiente li");
  elementos.forEach((elemento, i) => {
    elemento.addEventListener('click',()=>{
      elemento.parentNode.removeChild(elemento);
        pendientes.splice(i,1);
        actualizarpendientes(pendientes);
        render();
    });
  })
}

const actualizarpendientes = (pendientes) => {
  const pendientescadena = JSON.stringify(pendientes);
  localStorage.setItem('pendientes', pendientescadena);
}
window.onload = () => {
  render();
  const formulario = document.getElementById("formulario-pendiente");
  formulario.onsubmit = (e) => {
    e.preventDefault();
    const pendiente = document.getElementById("pendiente");
    contenidopendiente = pendiente.value;
    pendiente.value = ""; 
    pendientes.push(contenidopendiente);
    actualizarpendientes(pendientes);
    render();
 // esto se mete en console para que se pueda ejecutar

  }
}

// lo de acontinuacion nos muestra y nos ayuda 
//a acortar uno de de los numeros acontinuacion y se va a anotar por medio de console osea del grupo de 1,2,3,45 va a quedar 1,2,45
/*let arr = [1,2,3,45];
console.log(arr);
arr.splice(2,1);
console.log(arr);
//////////////////// la siguiente hace que el elemento que quitamos se separe y se muestre aparte y luego si se quita del conjunto.
let arr = [1,2,3,45];
console.log(arr);
let arr2 = arr.splice(2,1);
console.log(arr2);
console.log(arr);*/

// nota el numero 1 dentro del parentecisi del splice es el numero de numeros que quiero cortar