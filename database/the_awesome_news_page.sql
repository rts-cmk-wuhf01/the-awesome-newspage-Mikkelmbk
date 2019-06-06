-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Vært: 127.0.0.1
-- Genereringstid: 06. 06 2019 kl. 14:57:26
-- Serverversion: 10.1.30-MariaDB
-- PHP-version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `the_awesome_news_page`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `article`
--

CREATE TABLE `article` (
  `article_id` int(11) NOT NULL,
  `article_image` varchar(30) NOT NULL,
  `article_title` varchar(200) NOT NULL,
  `article_content` varchar(3000) NOT NULL,
  `article_likes` smallint(6) NOT NULL,
  `article_comments` smallint(6) NOT NULL,
  `article_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `article`
--

INSERT INTO `article` (`article_id`, `article_image`, `article_title`, `article_content`, `article_likes`, `article_comments`, `article_date`) VALUES
(1, '16.jpg', 'Financial news: A new company is born today at the stock market', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.', 392, 12, '2018-04-11 07:00:00'),
(2, '17.jpg', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus\r\n                    sit amet odio sodales placerat. Sed varius leo ac...', 392, 10, '2018-04-11 07:00:00'),
(3, '18.jpg', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus\r\n                    sit amet odio sodales placerat. Sed varius leo ac...', 392, 10, '2018-04-11 07:00:00'),
(4, '19.jpg', '', 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.', 0, 0, '2018-04-11 07:00:00'),
(5, '20.jpg', '', 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.', 0, 0, '2018-04-11 07:00:00'),
(6, '21.jpg', '', 'Sed a elit euismod augue semper congue sit amet ac sapien.', 0, 0, '2018-04-11 07:00:00'),
(7, '22.jpg', '', 'Sed a elit euismod augue semper congue sit amet ac sapien.', 0, 0, '2018-04-11 07:00:00'),
(8, '23.jpg', '', 'Sed a elit euismod augue semper congue sit amet ac sapien.', 0, 0, '2018-04-11 07:00:00'),
(9, '24.jpg', '', 'Sed a elit euismod augue semper congue sit amet ac sapien.', 0, 0, '2018-04-11 07:00:00');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`article_id`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `article`
--
ALTER TABLE `article`
  MODIFY `article_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
