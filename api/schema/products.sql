-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 20-08-2021 a las 19:58:13
-- Versión del servidor: 8.0.13-4
-- Versión de PHP: 7.2.24-0ubuntu0.18.04.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `QjdNxnxxDT`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `image` text COLLATE utf8_unicode_ci NOT NULL,
  `stock` int(11) NOT NULL,
  `category` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `precio` varchar(12) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `stock`, `category`, `precio`) VALUES
(1, 'Plátano', 'El plátano es una de las frutas más conocidas y consumidas. Además, es un alimento con unas propiedades muy beneficiosas para nuestra salud. ', 'https://frutapasion.es/wp-content/uploads/2021/05/platano-p2.jpg', 3, 'dulces', '3.00'),
(2, 'Papaya', 'La papaya, una fruta tropical deliciosa que nos aporta más vitamina C que la naranja. Por lo tanto, nos ayuda a aumentar nuestras defensas naturales.', 'https://frutapasion.es/wp-content/uploads/2020/05/papaya-1.jpg', 0, 'dulces', '2.00'),
(3, 'Pera', 'La pera es una fruta suave y dulce con un centro fibroso. Es rica en antioxidantes y vitaminas ideales para favorecer una dieta sana y equilibrada.', 'https://frutapasion.es/wp-content/uploads/2019/06/pera-01.jpg', 20, 'dulces', '3.00'),
(4, 'Manzana', 'Cuando hablamos de la manzana, hablamos de una de las frutas más populares que siempre tenemos en nuestra cocina. Además, es una fruta imprescindible si queremos llevar una dieta sana', 'https://frutapasion.es/wp-content/uploads/2019/10/manzana.jpg', 10, 'dulces', '2.00'),
(5, 'Granadilla', 'La granadilla fruta, una fruta tropical que apasiona por su textura, sabor y aroma. Descubre todos sus beneficios para nuestra salud.', 'https://frutapasion.es/wp-content/uploads/2020/12/granadilla-p.jpg', 4, 'dulces', '1.50'),
(6, 'Uva', 'Las uvas son una fuente de vitaminas y otros nutrientes con excelentes propiedades nutricionales beneficiosas para la salud.', 'https://frutapasion.es/wp-content/uploads/2020/06/uvas-01.jpg.webp', 9, 'dulces', '2.30'),
(13, 'Limon', 'El limón (Citrus limon) muy conocido por sus propiedades medicinales, gracias a la multitud de propiedades beneficiosas para la salud que se le atribuyen. Por su disponibilidad y por sus propiedades', 'https://cdn1.frutapasion.es/wp-content/uploads/2019/06/limon-01.jpg', 12, 'acidas', '3.00'),
(14, 'Frambuesa', 'La frambuesa es una fruta con propiedades nutricionales que la hace esencial para mantener una buena salud. Además, está realmente deliciosa. Igualmente, la podemos comer sola o como ingredientes de variedad de recetas. ', 'https://cdn1.frutapasion.es/wp-content/uploads/2020/12/frambuesa-p.jpg', 13, 'acidas', '1.20'),
(15, 'Naranja', 'La naranja es unos de los cítricos más consumidos en todo el planeta gracias a su extraordinario aroma, sabor y sobre todo por sus propiedades nutricionales que son muy beneficiosas para nuestra salud. ', 'https://cdn1.frutapasion.es/wp-content/uploads/2019/12/naranja-01.jpg', 6, 'acidas', '2.00'),
(16, 'Piña', 'La piña es una fruta ácida que es muy popular en todo el mundo por su sabor, su aroma y, sobre todo, por sus propiedades nutricionales.  Esta fruta tropical es un excelente alimento muy beneficioso para nuestra salud. ', 'https://cdn1.frutapasion.es/wp-content/uploads/2019/09/pinya.jpg', 10, 'acidas', '4.00'),
(17, 'Kiwi', 'El Kiwi es una deliciosa fruta ácida con nombre de pájaro que se ha convertido en un imprescindible en nuestra dieta. Con un sabor ácido muy característico nos aporta vitaminas y minerales esenciales para nuestra salud.', 'https://cdn1.frutapasion.es/wp-content/uploads/2021/01/kiwi-p.jpg.webp', 5, 'acidas', '1.60'),
(23, 'Lima', 'La lima es una fruta cítrica rica en vitamina C, antioxidantes y otros nutrientes. Descubre todos los beneficios que este cítrico nos aporta.', 'https://cdn1.frutapasion.es/wp-content/uploads/2021/06/lima-p.jpg', 3, 'semiacidas', '2.00'),
(24, 'Fresa', 'La fresa es una fruta deliciosa que enamora por su aspecto y por sus sorprendentes propiedades nutricionales que son muy beneficiosas para nuestra salud.', 'https://cdn1.frutapasion.es/wp-content/uploads/2020/05/fresa-01.jpg', 8, 'semiacidas', '1.15'),
(25, 'Mandarina', 'La mandarina es uno de los cítricos más consumidos en todo el planeta. Son unas de las frutas más deseadas en el otoño. Además, posee unas propiedades muy beneficiosas para nuestra salud, sobre todo en esta época del año.', 'https://cdn1.frutapasion.es/wp-content/uploads/2019/11/mandarina-0.jpg', 10, 'semiacidas', '3.25'),
(26, 'Mango', 'El mango es una fruta tropical de un sabor muy característico. Además, posee unas propiedades nutricionales muy beneficiosas para nuestra salud.', 'https://cdn1.frutapasion.es/wp-content/uploads/2019/09/mango-0.jpg', 4, 'semiacidas', '5.00'),
(27, 'Tamarillo', 'El tamarillo, también es conocido como tomate de árbol, es una deliciosa fruta tropical. Asimismo, es muy similar al tomate común y nos aporta nutrientes muy beneficiosos para nuestra salud.', 'https://cdn1.frutapasion.es/wp-content/uploads/2021/02/tamarillo-p.jpg', 4, 'semiacidas', '2.30'),
(28, 'Aguacate', 'El aguacate o palta es una delicada fruta que, bajo su piel rugosa, esconde una deliciosa pulpa nutritiva con multitud de beneficios para nuestra salud.', 'https://cdn1.frutapasion.es/wp-content/uploads/2020/11/aguacate-p.jpg', 13, 'neutras', '2.00'),
(29, 'Nuez', 'La nuez es un fruto seco que deberías comer todos los días. Nutritivamente nos aporta unos beneficios muy necesarios para nuestra salud.', 'https://cdn1.frutapasion.es/wp-content/uploads/2020/09/nuez-8-p.jpg', 3, 'neutras', '1.20'),
(30, 'Maní', 'El maní (Arachis hypogaea), también conocido como cacahuate, cacahuete, caguate. Unos de los frutos secos más consumidos en todo el mundo y con beneficios nutricionales para nuestra salud que quizás no sabías', 'https://cdn1.frutapasion.es/wp-content/uploads/2019/06/mani-05.jpg', 7, 'neutras', '1.00'),
(31, 'Cacao', 'El cacao lo conocemos tradicionalmente como unos de los alimentos más deseables, sobre todo en la forma de chocolate blanco, chocolate con leche o chocolate negro que actualmente está más de moda. ', 'https://cdn1.frutapasion.es/wp-content/uploads/2019/06/cacao-01.jpg', 4, 'neutras', '2.00'),
(32, 'Espinacas', 'Vegetal de hoja verde, es una gran fuente de calcio, vitaminas, hierro y antioxidantes. Debido a su contenido en calcio y hierro, son muy recomendables para las dietas sin carne o sin lácteos. Una taza de espinacas crudas contiene solo 7 calorías. Además, tienen vitamina K, imprescindible para los huesos y para absorber el calcio.', 'https://www.lavanguardia.com/files/content_image_desktop_filter/uploads/2019/01/09/5e997ab1237ee.jpeg', 20, 'verduras', '2.30'),
(33, 'Ajo', 'Un antibiótico natural por su componente, sulfuro, que ha generado muchos estudios por sus grandes propiedades.\r\n\r\n', 'https://www.lavanguardia.com/uploads/2019/01/09/5e9979496cd43.jpeg', 8, 'verduras', '1.50'),
(34, 'Guisantes', 'Fibra, proteína, vitaminas A, C y K y algunas del grupo B, con muy pocas calorías. Es lo que aportan los guisantes, esas perlas verdes y dulces que se pueden incorporar a infinidad de ensaladas y guisos. De hecho, son legumbres y no verduras, aunque se identifican popularmente como vegetales.', 'https://www.lavanguardia.com/uploads/2019/01/09/5e997a5a03132.jpeg', 10, 'verduras', '2.00'),
(35, 'Cebolla', 'Conocida científicamente como Allium cepa, es una planta herbácea bienal perteneciente a la familia de las amarilidáceas. Se caracteriza por ser antiinflamatorio y antioxidante. Esta verdura protege el corazón, es un gran aliado contra la diabetes, reduce la tensión arterial y evita las enfermedades respiratorias.', 'https://c1.staticflickr.com/5/4261/35318849551_143127b920.jpg', 7, 'verduras', '3.00'),
(36, 'Tomate', 'El tomate es una de las frutas (sí: ¡es una fruta!) imprescindible en nuestra cocina. Es un ingrediente que se usa en una gran cantidad de recetas y que sirve tanto para platos fríos, como platos calientes. Se puede tomar tanto en sólido, como en líquido disfrutando de una sopa de tomate o un refrescante jugo de tomate.', 'https://assets.cdnelnuevodiario.com/cache/a3/52/a3522934947248809a3a890d7779c4bd.jpg', 8, 'neutras', '2.30');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
