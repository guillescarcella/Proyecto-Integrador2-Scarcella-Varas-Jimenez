CREATE SCHEMA proyecto;
USE proyecto;
CREATE TABLE usuarios (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
email VARCHAR(255) NOT NULL UNIQUE,
username VARCHAR(255) NOT NULL UNIQUE,
contra VARCHAR (255) NOT NULL,
foto VARCHAR (255) NOT NULL,
fecha DATE NOT NULL,
dni INT (9) NOT NULL UNIQUE,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);
CREATE TABLE productos (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nombre VARCHAR (255) NOT NULL,
descripcion VARCHAR (255) NOT NULL,
foto VARCHAR (255) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FkUserId INT,
FOREIGN KEY (FkUserId) REFERENCES usuarios (id)
);
CREATE TABLE comentarios (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
texto VARCHAR (255) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FkUserId INT,
FOREIGN KEY (FkUserId) REFERENCES usuarios (id),
FkProductId INT,
FOREIGN KEY (FkProductId) REFERENCES productos (id)
);



INSERT INTO usuarios (email, username, contra, foto, fecha, dni)
VALUES ("delfinajimenezherrera@gmail.com", "delfijimenez", "12345", "delfi.png", "2002-11-06", "44513870"),
("mvaras@gmail.com", "meryvaras", "54321", "mery.png", "2004-10-10",  "44334980"),
("gscarcella@gmail.com", "guillescar", "123guille", "guille.png", "2003-1-23", "43527498"),
("lolopico2@gmail.com", "lolopico", "lolito12", "lolo.png", "2000-3-12", "42431980"),
("pamerodriguez@gmail.com", "pamerodriguez", "pamecapa", "pame.png", "1998-5-4", "40563812");

INSERT INTO productos (nombre, descripcion, foto, FkUserId)
VALUES ("Kit Mascara Essentials Estée Lauder", "Destaca tu mirada con este set de Edición limitada.", "P1.png", "1"),
("Mac Primped & Prepped Kit", "Mantente resplandeciente con los productos de imprimación más vendidos para crear una base suave para looks de larga duración.", "P2.png", "2"),
("Set X4 Mascarillas Faciales", "Tratamiento revitalizador, antioxidante y energizante", "P3.png", "3"),
("Dermaglós Combo", "Compuesto por 3 productos específicamente seleccionados", "P4.png", "4"),
("Clinique Set Daily", "El kit mas completo", "P5.png", "5"),
("Paco Rabanne Olympéa", "Respaldado por décadas de memorables fragancias", "P6.png", "1"),
("Set Golden Hour", "Long-Wear Cream", "P7.png", "2"),
("Clinique Decorated Pop Set", "Deja los labios con acabados mate", "P8.png", "3"),
(" Rimmel Thrill Seeker","Volumen atrevido para emocionar", "P9.png", "4"),
("Labial Maybelline", "Para el día o la noche", "P10.png", "5") ;

INSERT INTO comentarios (texto, FkUserId, FkProductId)
VALUES ("Cuanto dura el producto?", "1", "1"),
("Lo tienen en otro tono?", "2", "1"),
("Muy buen producto", "4", "1"),
("Tienen local a la calle?", "3", "1"),
("Es un buen regalo?", "2", "2"),
("No es la mejor marca", "5", "2"),
("Yo amo este producto", "1", "2"),
("Cuanto tiempo dura abierto?", "4", "2"),
("Muuuuy bueno", "3", "3"),
("Es importado?", "2", "3"),
("Mi favorito", "5", "3"),
("Buena calidad.", "1", "3"),
("AMO", "1", "4"),
("Ilumina la piel?", "4", "4"),
("Que bueno", "2", "4"),
("Muy buena crema", "3", "4"),
("Dame mil", "1", "5"),
("Malo", "3", "5"),
("Me vino abierto", "4", "5"),
("Malo, muy malo", "2", "5"),
("Mejor producto", "5", "6"),
("De los mejores", "3", "6"),
("Me interesa, mandan info", "2", "6"),
("Esta ok", "1", "6"),
("Que bueno que esta", "3", "7"),
("Divino el color", "2", "7"),
("Amo el rosa", "1", "7"),
("Llegan a jujuy?", "4", "7"),
("Muchos colores", "1", "8"),
("lindos", "4", "8"),
("Los quiero para mi", "5", "8"),
("Mmmm", "2", "8"),
("Seran de verdad?", "1", "9"),
("no no me gusta", "4", "9"),
("Buena calidad", "3", "9"),
("Viva pestanela!", "1", "9"),
("Ay q bueno", "3", "10"),
("Bueno q lindo", "5", "10"),
("Muy caro seguro", "2", "10"),
("Divino", "4", "10");


