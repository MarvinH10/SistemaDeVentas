-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-07-2023 a las 23:52:07
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistemaventas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `caja`
--

CREATE TABLE `caja` (
  `id` int(11) NOT NULL,
  `caja` varchar(50) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `caja`
--

INSERT INTO `caja` (`id`, `caja`, `estado`) VALUES
(1, 'General', 1),
(2, 'Secundario', 1),
(4, 'Básico', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `estado`) VALUES
(1, 'Dulces', 1),
(2, 'Gaseosas', 1),
(3, 'Laptops', 1),
(4, 'Mesas', 1),
(5, 'Calcetines', 1),
(6, 'Cervezas', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cierre_caja`
--

CREATE TABLE `cierre_caja` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `monto_inicial` decimal(10,2) NOT NULL,
  `monto_final` decimal(10,2) NOT NULL DEFAULT 0.00,
  `fecha_apertura` date NOT NULL,
  `fecha_cierre` date NOT NULL,
  `total_ventas` int(11) NOT NULL,
  `monto_total` decimal(10,2) NOT NULL DEFAULT 0.00,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cierre_caja`
--

INSERT INTO `cierre_caja` (`id`, `id_usuario`, `monto_inicial`, `monto_final`, `fecha_apertura`, `fecha_cierre`, `total_ventas`, `monto_total`, `estado`) VALUES
(1, 1, '50.00', '0.00', '2023-06-24', '0000-00-00', 0, '0.00', 0),
(14, 1, '60.00', '0.00', '2023-06-28', '0000-00-00', 0, '0.00', 0),
(19, 1, '15.00', '24.00', '2023-06-28', '2023-06-28', 1, '39.00', 0),
(20, 1, '100.00', '15.90', '2023-06-28', '2023-07-11', 1, '115.90', 0),
(21, 1, '11.00', '15.90', '2023-07-11', '2023-07-12', 1, '26.90', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `dni` varchar(8) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `direccion` text NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `dni`, `nombre`, `telefono`, `direccion`, `estado`) VALUES
(1, '75179992', 'Marvin Hector', '966741288', 'Jr. 28 de julio #1614', 1),
(2, '75179991', 'Jhon Francis', '987654321', 'Jr. Juliaca #154', 1),
(3, '78946852', 'Jhamil Antony', '98746123', 'Jr. Cerros altos #187', 1),
(4, '40913726', 'Maribel', '963852741', 'Jr. 28 de julio #1615', 1),
(5, '50987512', 'Hector', '962773275', 'Jr. 28 de Julio', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id` int(11) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`id`, `total`, `fecha`, `estado`) VALUES
(1, '1107.00', '2023-06-23 04:50:00', 0),
(2, '54.00', '2023-06-23 04:41:19', 0),
(3, '154.00', '2023-06-23 04:47:57', 0),
(4, '16.00', '2023-06-24 00:29:00', 0),
(5, '400.00', '2023-06-27 22:53:56', 1),
(6, '12.00', '2023-07-12 05:53:01', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `configuracion`
--

CREATE TABLE `configuracion` (
  `id` int(11) NOT NULL,
  `ruc` varchar(20) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `mensaje` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `configuracion`
--

INSERT INTO `configuracion` (`id`, `ruc`, `nombre`, `telefono`, `direccion`, `mensaje`) VALUES
(1, '41414142', 'Empresa Martin', '987654321', 'Jr5454', 'Gracias por su preferencia!'),
(2, '41414142', 'Beibi', '987654321', 'Jr5454', 'Thanks');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle`
--

CREATE TABLE `detalle` (
  `id` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `sub_total` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_compras`
--

CREATE TABLE `detalle_compras` (
  `id` int(11) NOT NULL,
  `id_compra` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `sub_total` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalle_compras`
--

INSERT INTO `detalle_compras` (`id`, `id_compra`, `id_producto`, `cantidad`, `precio`, `sub_total`) VALUES
(1, 1, 2, 9, '123.00', '1107.00'),
(2, 2, 3, 1, '54.00', '54.00'),
(3, 3, 3, 1, '54.00', '54.00'),
(4, 3, 5, 4, '25.00', '100.00'),
(5, 4, 6, 2, '8.00', '16.00'),
(6, 5, 6, 50, '8.00', '400.00'),
(7, 6, 1, 1, '12.00', '12.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_permisos`
--

CREATE TABLE `detalle_permisos` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_permiso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalle_permisos`
--

INSERT INTO `detalle_permisos` (`id`, `id_usuario`, `id_permiso`) VALUES
(28, 3, 6),
(29, 3, 7),
(30, 3, 8),
(31, 3, 9),
(32, 3, 10),
(33, 3, 11),
(34, 3, 12),
(35, 4, 9),
(36, 4, 10),
(37, 4, 11),
(38, 4, 12),
(61, 1, 1),
(62, 1, 2),
(63, 1, 3),
(119, 2, 5),
(120, 2, 6),
(121, 2, 7),
(122, 2, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_temp`
--

CREATE TABLE `detalle_temp` (
  `id` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `descuento` decimal(10,2) NOT NULL DEFAULT 0.00,
  `sub_total` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_ventas`
--

CREATE TABLE `detalle_ventas` (
  `id` int(11) NOT NULL,
  `id_venta` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `descuento` decimal(10,2) NOT NULL DEFAULT 0.00,
  `precio` decimal(10,2) NOT NULL,
  `sub_total` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalle_ventas`
--

INSERT INTO `detalle_ventas` (`id`, `id_venta`, `id_producto`, `cantidad`, `descuento`, `precio`, `sub_total`) VALUES
(1, 1, 6, 2, '0.00', '12.00', '24.00'),
(2, 2, 1, 1, '0.00', '15.90', '15.90'),
(3, 3, 6, 1, '0.00', '12.00', '12.00'),
(4, 4, 6, 1, '0.00', '12.00', '12.00'),
(5, 5, 6, 2, '0.00', '12.00', '24.00'),
(6, 6, 5, 3, '0.00', '36.90', '110.70'),
(7, 7, 1, 1, '0.00', '15.90', '15.90'),
(8, 8, 1, 1, '0.00', '15.90', '15.90'),
(9, 9, 1, 2, '10.00', '15.90', '21.80'),
(10, 10, 1, 1, '0.00', '15.90', '15.90'),
(11, 11, 1, 1, '0.00', '15.90', '15.90');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medidas`
--

CREATE TABLE `medidas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `nombre_corto` varchar(5) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `medidas`
--

INSERT INTO `medidas` (`id`, `nombre`, `nombre_corto`, `estado`) VALUES
(1, 'Kilos', 'K', 1),
(2, 'Gramos', 'Gr', 1),
(3, 'Litros', 'L', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `id` int(11) NOT NULL,
  `permiso` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `permisos`
--

INSERT INTO `permisos` (`id`, `permiso`) VALUES
(1, 'usuarios'),
(2, 'configuracion'),
(3, 'cajas'),
(4, 'arqueo_caja'),
(5, 'clientes'),
(6, 'medidas'),
(7, 'categorias'),
(8, 'productos'),
(9, 'nueva_compra'),
(10, 'historial_compras'),
(11, 'nueva_venta'),
(12, 'historial_ventas'),
(13, 'eliminar_clientes'),
(14, 'registrar_clientes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `codigo` varchar(20) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `precio_compra` decimal(10,2) NOT NULL,
  `precio_venta` decimal(10,2) NOT NULL,
  `cantidad` int(11) NOT NULL DEFAULT 0,
  `id_medida` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `foto` varchar(50) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `codigo`, `descripcion`, `precio_compra`, `precio_venta`, `cantidad`, `id_medida`, `id_categoria`, `foto`, `estado`) VALUES
(1, '987645', 'Naaaadita', '12.00', '15.90', 1, 1, 1, '20230527030112.jpg', 1),
(2, '123141', 'Van Helsing', '123.00', '1231.00', 23, 1, 1, '20230410004539.jpg', 1),
(3, '786785', 'Fanta', '54.00', '98.00', 9, 3, 2, '20230411190554.jpg', 1),
(4, '3131211', 'cosas', '1.00', '2.00', 10, 1, 3, '20230411190609.jpg', 1),
(5, '00012', 'Kali', '25.00', '36.90', 3, 1, 3, '20230512185657.jpg', 1),
(6, '123456', 'Pilsen', '8.00', '12.00', 46, 3, 2, '20230623072723.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recuperar_passwords`
--

CREATE TABLE `recuperar_passwords` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `token` varchar(200) NOT NULL,
  `codigo` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `recuperar_passwords`
--

INSERT INTO `recuperar_passwords` (`id`, `email`, `token`, `codigo`, `fecha`) VALUES
(1, 'admin@gmail.com', '~???', 4457, '2023-07-12 02:03:01'),
(2, 'admin@gmail.com', 'Ff', 3993, '2023-07-12 02:10:30'),
(3, 'admin@gmail.com', 'g?w??', 3136, '2023-07-12 02:15:30'),
(4, 'admin@gmail.com', '8?D\Z	', 5520, '2023-07-12 02:22:53'),
(5, 'admin@gmail.com', '??~j-', 9707, '2023-07-12 02:24:31'),
(6, 'jhon@gmail.com', '2c99fd4e102d8a0b13', 7369, '2023-07-12 03:16:17'),
(7, 'admin@gmail.com', '0cc5aa67e23feb8c11', 7223, '2023-07-12 04:02:53'),
(8, 'admin@gmail.com', '894bf537e255f6ee10', 8819, '2023-07-12 04:06:19'),
(9, 'admin@gmail.com', 'be25c8a42fbbf65116', 9117, '2023-07-12 04:06:55'),
(10, 'jhon@gmail.com', 'd6ef3abf51a7f6c013', 1113, '2023-07-12 04:08:58'),
(11, 'jhon@gmail.com', '5ca721e0746e3d2f16', 6408, '2023-07-12 04:10:47'),
(12, 'jhon@gmail.com', '1952fa79be48ac0514', 2589, '2023-07-12 04:15:17'),
(13, 'jhon@gmail.com', 'ed1b1b96de4e79ef6', 5523, '2023-07-12 04:16:37'),
(14, 'jhon@gmail.com', 'bc58d4801681cbca13', 6643, '2023-07-12 04:19:30'),
(15, 'jhon@gmail.com', '4218faa886c7d29e7', 5594, '2023-07-12 04:26:47'),
(16, 'jhon@gmail.com', '4ef0c5ab899989405', 6122, '2023-07-12 05:34:00'),
(17, 'jhon@gmail.com', 'dc1a734503fefe8913', 6452, '2023-07-12 05:36:25'),
(18, 'jhon@gmail.com', 'd063793c21e44f797', 7674, '2023-07-12 05:42:24'),
(19, 'jhon@gmail.com', 'a806c1dd9cd6c85016', 1092, '2023-07-12 05:43:53'),
(20, 'jhon@gmail.com', '62cda516bc2bf0436', 6526, '2023-07-12 05:45:51'),
(21, 'jhon@gmail.com', '67e48ad2fd2bbf319', 4484, '2023-07-12 20:31:50'),
(22, 'jhon@gmail.com', 'f5033d6aa675dd746', 6113, '2023-07-12 20:32:11'),
(23, 'jhon@gmail.com', '9f74320bdd5f18015', 7247, '2023-07-12 20:32:37'),
(24, 'jhon@gmail.com', '57f5e7eb19eb52409', 7992, '2023-07-12 20:36:22'),
(25, 'jhon@gmail.com', '06e96a52e909234b13', 2695, '2023-07-12 20:50:57'),
(26, 'jhon@gmail.com', 'a54a62ee8cd317549', 1686, '2023-07-12 21:00:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `clave` varchar(100) NOT NULL,
  `id_caja` int(11) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `email`, `nombre`, `clave`, `id_caja`, `estado`) VALUES
(1, 'admin', 'admin@gmail.com', 'Marvin Héctor', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 1, 1),
(2, 'Jhon', 'jhon@gmail.com', 'Jhon Campos', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 2, 1),
(3, 'Luis', 'luis@gmail.com', 'Luis Campos', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 4, 1),
(4, 'hector', 'hector@gmail.com', 'Hector Teodoro', 'f6f2ea8f45d8a057c9566a33f99474da2e5c6a6604d736121650e2730c6fb0a3', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1,
  `apertura` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id`, `id_usuario`, `id_cliente`, `total`, `fecha`, `hora`, `estado`, `apertura`) VALUES
(1, 1, 1, '24.00', '2023-06-27', '00:00:00', 1, 0),
(2, 1, 1, '15.90', '2023-06-27', '00:00:00', 1, 0),
(3, 2, 1, '12.00', '2023-06-25', '00:00:00', 1, 1),
(4, 0, 1, '12.00', '2023-06-25', '00:00:00', 1, 1),
(5, 1, 2, '24.00', '2023-06-27', '22:39:37', 1, 0),
(6, 1, 1, '110.70', '2023-06-28', '00:52:20', 1, 0),
(7, 1, 1, '15.90', '2023-06-28', '01:45:32', 1, 0),
(8, 1, 1, '15.90', '2023-06-28', '09:21:09', 1, 0),
(9, 1, 4, '21.80', '2023-06-28', '19:30:55', 1, 0),
(10, 1, 1, '15.90', '2023-07-11', '19:53:07', 1, 0),
(11, 1, 1, '15.90', '2023-07-12', '07:53:58', 1, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `caja`
--
ALTER TABLE `caja`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cierre_caja`
--
ALTER TABLE `cierre_caja`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `configuracion`
--
ALTER TABLE `configuracion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle`
--
ALTER TABLE `detalle`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle_compras`
--
ALTER TABLE `detalle_compras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle_permisos`
--
ALTER TABLE `detalle_permisos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle_temp`
--
ALTER TABLE `detalle_temp`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle_ventas`
--
ALTER TABLE `detalle_ventas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medidas`
--
ALTER TABLE `medidas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_medida` (`id_medida`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indices de la tabla `recuperar_passwords`
--
ALTER TABLE `recuperar_passwords`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `caja`
--
ALTER TABLE `caja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `cierre_caja`
--
ALTER TABLE `cierre_caja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `configuracion`
--
ALTER TABLE `configuracion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `detalle`
--
ALTER TABLE `detalle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `detalle_compras`
--
ALTER TABLE `detalle_compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `detalle_permisos`
--
ALTER TABLE `detalle_permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT de la tabla `detalle_temp`
--
ALTER TABLE `detalle_temp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `detalle_ventas`
--
ALTER TABLE `detalle_ventas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `medidas`
--
ALTER TABLE `medidas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `recuperar_passwords`
--
ALTER TABLE `recuperar_passwords`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`),
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`id_medida`) REFERENCES `medidas` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_caja`) REFERENCES `caja` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
