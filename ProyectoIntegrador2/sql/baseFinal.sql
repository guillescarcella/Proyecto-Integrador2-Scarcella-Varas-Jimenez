-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 16, 2023 at 09:23 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proyecto`
--

-- --------------------------------------------------------
--
-- Table structure for table `usuarios`
--
create database prueba;
use prueba;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `contra` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `dni` int(9) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `username`, `contra`, `foto`, `fecha`, `dni`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'delfinajimenezherrera@gmail.com', 'delfijimenez', '12345', 'delfi.png', '2002-11-06', 44513870, '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34'),
(2, 'mvaras@gmail.com', 'meryvaras', '54321', 'mery.png', '2004-10-10', 44334980, '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34'),
(3, 'gscarcella@gmail.com', 'guillescar', '123guille', 'guille.png', '2003-01-23', 43527498, '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34'),
(4, 'lolopico2@gmail.com', 'lolopico', 'lolito12', 'lolo.png', '2000-03-12', 42431980, '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34'),
(5, 'pamerodriguez@gmail.com', 'pamerodriguez', 'pamecapa', 'pame.png', '1998-05-04', 40563812, '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34'),
(6, 'delfijimenez@udesa.edu.ar', 'delfijimenezh', '$2a$10$raRkqr9/28ycajgXfnZBNOwQg00N8FVWjcPiVYtETCq3W.zUhCPy6', 'req.file.fieldname', '2023-06-20', 44513868, '2023-06-08 21:51:45', '2023-06-08 21:51:45', '2023-06-08 21:51:45');

--

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `FkUserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `foto`, `createdAt`, `updatedAt`, `deletedAt`, `FkUserId`) VALUES
(1, 'Kit Mascara Essentials Estée Lauder', 'Destaca tu mirada con este set de Edición limitada.', 'https://cdn.shopify.com/s/files/1/0264/9944/8917/products/mascaraset1.jpg?v=1668877105', '2023-05-29 12:59:34', '2023-06-16 21:15:01', '2023-06-16 21:15:01', 6),
(2, 'Mac Primped & Prepped Kit', 'Mantente resplandeciente con los productos de imprimación más vendidos para crear una base suave para looks de larga duración.', 'https://http2.mlstatic.com/D_NQ_NP_742359-MLA54270042412_032023-O.webp', '2023-05-29 12:59:34', '2023-06-16 21:14:16', '2023-06-16 21:14:16', 6),
(3, 'Set X4 Mascarillas Faciales', 'Tratamiento revitalizador, antioxidante y energizante', 'https://http2.mlstatic.com/D_NQ_NP_807824-MLA51804047708_102022-O.webp', '2023-05-29 12:59:34', '2023-06-16 21:15:38', '2023-06-16 21:15:38', 6),
(4, 'Dermaglós Combo', 'Compuesto por 3 productos específicamente seleccionados', 'https://pedidosfarma.vtexassets.com/arquivos/ids/196898-800-auto?v=638170077642970000&width=800&height=auto&aspect=true', '2023-05-29 12:59:34', '2023-06-16 21:16:01', '2023-06-16 21:16:01', 6),
(5, 'Clinique Set Daily', 'El kit mas completo', 'https://http2.mlstatic.com/D_NQ_NP_650347-MLA52544777700_112022-O.webp', '2023-05-29 12:59:34', '2023-06-16 21:16:24', '2023-06-16 21:16:24', 6),
(6, 'Paco Rabanne Olympéa', 'Respaldado por décadas de memorables fragancias', 'https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/p/a/paco-rabanne-olympea-eau-de-parfum.jpg', '2023-05-29 12:59:34', '2023-06-16 21:16:50', '2023-06-16 21:16:50', 6),
(7, 'Set Golden Hour', 'Long-Wear Cream', 'https://cdn.shopify.com/s/files/1/2026/1775/products/goldenhourssetClettering-08copy.jpg?v=1655332668', '2023-05-29 12:59:34', '2023-06-16 21:17:12', '2023-06-16 21:17:12', 6),
(8, 'Clinique Decorated Pop Set', 'Deja los labios con acabados mate', 'https://rougeb2car.vtexassets.com/arquivos/ids/197528-800-auto?v=638137313843330000&width=800&height=auto&aspect=true', '2023-05-29 12:59:34', '2023-06-16 21:17:38', '2023-06-16 21:17:38', 6),
(9, ' Rimmel Thrill Seeker', 'Volumen atrevido para emocionar', 'https://perfugroupar.vtexassets.com/arquivos/ids/185061/3616303997731-1.jpg?v=638121687017400000', '2023-05-29 12:59:34', '2023-06-16 21:18:15', '2023-06-16 21:18:15', 6),
(10, 'Labial Maybelline', 'Para el día o la noche', 'https://perfucristal.com.ar/wp-content/uploads/2020/10/LABIAL-LIQUIDO-STAY-MATTE-INK-3.jpg', '2023-05-29 12:59:34', '2023-06-16 21:18:46', '2023-06-16 21:18:46', 6);

-- --------------------------------------------------------

-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `texto` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `FkUserId` int(11) DEFAULT NULL,
  `FkProductId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id`, `texto`, `createdAt`, `updatedAt`, `deletedAt`, `FkUserId`, `FkProductId`) VALUES
(1, 'Cuanto dura el producto?', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 1, 1),
(2, 'Lo tienen en otro tono?', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 2, 1),
(3, 'Muy buen producto', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 4, 1),
(4, 'Tienen local a la calle?', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 3, 1),
(5, 'Es un buen regalo?', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 2, 2),
(6, 'No es la mejor marca', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 5, 2),
(7, 'Yo amo este producto', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 1, 2),
(8, 'Cuanto tiempo dura abierto?', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 4, 2),
(9, 'Muuuuy bueno', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 3, 3),
(10, 'Es importado?', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 2, 3),
(11, 'Mi favorito', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 5, 3),
(12, 'Buena calidad.', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 1, 3),
(13, 'AMO', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 1, 4),
(14, 'Ilumina la piel?', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 4, 4),
(15, 'Que bueno', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 2, 4),
(16, 'Muy buena crema', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 3, 4),
(17, 'Dame mil', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 1, 5),
(18, 'Malo', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 3, 5),
(19, 'Me vino abierto', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 4, 5),
(20, 'Malo, muy malo', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 2, 5),
(21, 'Mejor producto', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 5, 6),
(22, 'De los mejores', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 3, 6),
(23, 'Me interesa, mandan info', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 2, 6),
(24, 'Esta ok', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 1, 6),
(25, 'Que bueno que esta', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 3, 7),
(26, 'Divino el color', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 2, 7),
(27, 'Amo el rosa', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 1, 7),
(28, 'Llegan a jujuy?', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 4, 7),
(29, 'Muchos colores', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 1, 8),
(30, 'lindos', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 4, 8),
(31, 'Los quiero para mi', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 5, 8),
(32, 'Mmmm', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 2, 8),
(33, 'Seran de verdad?', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 1, 9),
(34, 'no no me gusta', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 4, 9),
(35, 'Buena calidad', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 3, 9),
(36, 'Viva pestanela!', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 1, 9),
(37, 'Ay q bueno', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 3, 10),
(38, 'Bueno q lindo', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 5, 10),
(39, 'Muy caro seguro', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 2, 10),
(40, 'Divino', '2023-05-29 12:59:34', '2023-05-29 12:59:34', '2023-05-29 12:59:34', 4, 10),
(41, 'hola', '2023-06-13 11:52:02', '2023-06-13 11:52:02', '2023-06-13 11:52:02', 6, 1),
(42, 'hola', '2023-06-13 12:24:48', '2023-06-13 12:24:48', '2023-06-13 12:24:48', 6, 1),
(43, 'como', '2023-06-13 12:25:19', '2023-06-13 12:25:19', '2023-06-13 12:25:20', 6, 1),
(44, 'buenoo', '2023-06-13 12:31:14', '2023-06-13 12:31:14', '2023-06-13 12:31:14', 6, 4),
(45, 'hola', '2023-06-15 22:09:29', '2023-06-15 22:09:29', '2023-06-15 22:09:29', 6, 1),
(46, 'hola', '2023-06-16 21:18:55', '2023-06-16 21:18:55', '2023-06-16 21:18:55', 6, 1),
(47, 'qe', '2023-06-16 21:19:06', '2023-06-16 21:19:06', '2023-06-16 21:19:06', 6, 1);

--
-- Indexes for dumped tables
--

-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FkUserId` (`FkUserId`);

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FkUserId` (`FkUserId`),
  ADD KEY `FkProductId` (`FkProductId`);

--


--
-- AUTO_INCREMENT for dumped tables
--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--

-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
--
-- Constraints for dumped tables
--
-- Constraints for table `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`FkUserId`) REFERENCES `usuarios` (`id`);
COMMIT;
--
-- Constraints for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`FkUserId`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`FkProductId`) REFERENCES `productos` (`id`);

--


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;