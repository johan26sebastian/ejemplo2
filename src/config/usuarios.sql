--
-- File generated with SQLiteStudio v3.3.3 on jue. nov. 11 15:26:52 2021
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: usuarios
DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
    id_usuarios     INTEGER PRIMARY KEY
                            NOT NULL
                            UNIQUE,
    nom_usuarios    VARCHAR NOT NULL,
    correo_usuarios VARCHAR NOT NULL
);

INSERT INTO usuarios (
                         id_usuarios,
                         nom_usuarios,
                         correo_usuarios
                     )
                     VALUES (
                         1,
                         'johann',
                         'johann.gutierrez@cea.edu.co'
                     );


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
