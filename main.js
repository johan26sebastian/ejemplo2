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

