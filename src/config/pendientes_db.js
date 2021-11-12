let tablaPendientes = db.run 
    (
        `CREATE TABLE pendientes (
          id_pendientes INTEGER PRIMARY KEY UNIQUE NOT NULL,
          descripcion VARCHAR NOT NULL,
          cumplida BOOLEAN,
          activa BOOLEAN
      );`,
    (err) => {
        if (err) {
            console.log(err.message)
        }
        else {
            console.log("Tabla creada correctamente")
        }
    });