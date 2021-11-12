const db = require ("db");

let tablaUsuarios = db.run 
    (
        `CREATE TABLE usuarios (
        id_usuarios INTEGER PRIMARY KEY UNIQUE NOT NULL,
        nom_usuarios VARCHAR NOT NULL,
        correo_usuarios VARCHAR NOT NULL
        )`,
    (err) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log("Tabla creada correctamente")
        }
    });

let insertarusuarios = db.run 
    (
        `INSERT INTO usuarios (
            nom_usuarios,
            correo_usuarios
        )
        VALUES (
            'johann',
            'johann.gutierrez@cea.edu.co'
        );`,
    (err) => {
        if (err) {
            console.log(err.message)
        } 
        else {
            console.log("usuario creado");
        }
    });
